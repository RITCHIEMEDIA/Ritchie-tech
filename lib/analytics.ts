// Google Analytics 4 Event Tracking
// To use: Add your GA4 Measurement ID in environment variables

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''

// Event types for type safety
export type EventName =
  | 'project_click'
  | 'demo_click'
  | 'github_click'
  | 'resume_download'
  | 'contact_submit'
  | 'whatsapp_click'
  | 'email_click'
  | 'phone_click'
  | 'project_share'
  | 'theme_toggle'

interface EventParams {
  [key: string]: string | number | boolean
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = (eventName: EventName, params?: EventParams) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...params,
      timestamp: new Date().toISOString(),
    })
  }
  
  // Also log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, params)
  }
}

// Specific event tracking functions
export const trackProjectClick = (projectTitle: string, projectId: string) => {
  event('project_click', {
    project_title: projectTitle,
    project_id: projectId,
  })
}

export const trackDemoClick = (projectTitle: string, demoUrl: string) => {
  event('demo_click', {
    project_title: projectTitle,
    demo_url: demoUrl,
  })
}

export const trackGithubClick = (projectTitle: string, githubUrl: string) => {
  event('github_click', {
    project_title: projectTitle,
    github_url: githubUrl,
  })
}

export const trackResumeDownload = (source: string) => {
  event('resume_download', {
    source: source, // e.g., 'hero', 'navigation', 'footer'
  })
}

export const trackContactSubmit = (method: string) => {
  event('contact_submit', {
    method: method, // 'form', 'whatsapp', 'email', 'phone'
  })
}

export const trackWhatsAppClick = (source: string) => {
  event('whatsapp_click', {
    source: source,
  })
}

export const trackProjectShare = (projectTitle: string, shareMethod: string) => {
  event('project_share', {
    project_title: projectTitle,
    share_method: shareMethod, // 'screenshot', 'link'
  })
}

// Initialize Google Analytics
export const initGA = () => {
  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID is not set')
    return
  }

  // Load GA script
  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  script.async = true
  document.head.appendChild(script)

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer!.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
  })
}
