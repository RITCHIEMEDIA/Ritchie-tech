"use client"

import { useEffect, useRef, useState } from "react"

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

/**
 * Hook for scroll-triggered animations using Intersection Observer
 * @param options Configuration options for the observer
 * @returns Ref to attach to element and visibility state
 */
export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px",
    triggerOnce = true,
  } = options

  const elementRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.disconnect()
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref: elementRef, isVisible }
}

/**
 * Hook for staggered animations on multiple children
 */
export function useStaggerAnimation(count: number, baseDelay = 100) {
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set())
  const observersRef = useRef<IntersectionObserver[]>([])

  useEffect(() => {
    // Cleanup previous observers
    observersRef.current.forEach(observer => observer.disconnect())
    observersRef.current = []

    return () => {
      observersRef.current.forEach(observer => observer.disconnect())
    }
  }, [count])

  const getChildProps = (index: number) => {
    const observerCallback = ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setVisibleIndices(prev => new Set([...prev, index]))
        observersRef.current[index]?.disconnect()
      }
    }

    const ref = (element: HTMLElement | null) => {
      if (!element) return

      const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1,
        rootMargin: "0px",
      })

      observer.observe(element)
      observersRef.current[index] = observer
    }

    return {
      ref,
      style: {
        animationDelay: `${index * baseDelay}ms`,
      },
      className: visibleIndices.has(index) ? "animate-fade-in-up" : "opacity-0",
    }
  }

  return { getChildProps }
}
