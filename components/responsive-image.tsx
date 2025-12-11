import Image from "next/image"

interface ResponsiveImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
}

/**
 * Responsive image component with automatic optimization
 * Next.js Image component handles:
 * - WebP/AVIF conversion automatically
 * - Lazy loading
 * - Responsive srcset
 * - Blur placeholder
 */
export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 85,
}: ResponsiveImageProps) {
  // Check if external URL
  const isExternal = src.startsWith('http')

  if (width && height) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        quality={quality}
        loading={priority ? undefined : "lazy"}
        unoptimized={isExternal}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    )
  }

  // For responsive fill images
  return (
    <div className={`relative ${className || ''}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        quality={quality}
        loading={priority ? undefined : "lazy"}
        unoptimized={isExternal}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}

/**
 * Project card image with optimized loading
 */
export function ProjectImage({ 
  src, 
  alt, 
  featured = false 
}: { 
  src: string
  alt: string
  featured?: boolean
}) {
  const isExternal = src.startsWith('http')
  
  return (
    <div className="aspect-video relative bg-slate-200 dark:bg-slate-700 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
        priority={featured} // Load featured images immediately
        quality={featured ? 90 : 75}
        loading={featured ? undefined : "lazy"}
        unoptimized={isExternal}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
      />
    </div>
  )
}
