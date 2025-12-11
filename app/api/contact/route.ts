import { NextRequest, NextResponse } from 'next/server'

// Rate limiting (simple in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = 5 // 5 submissions
  const window = 60 * 60 * 1000 // per hour

  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + window })
    return true
  }

  if (record.count >= limit) {
    return false
  }

  record.count++
  return true
}

function getClientIP(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0] ||
    request.headers.get('x-real-ip') ||
    'unknown'
  )
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function isSpam(formData: any): boolean {
  // Honeypot check (client should leave this empty)
  if (formData.honeypot) {
    return true
  }

  // Check for suspicious patterns
  const suspiciousPatterns = [
    /viagra/i,
    /cialis/i,
    /crypto/i,
    /casino/i,
    /<script/i,
    /onclick/i,
  ]

  const textToCheck = `${formData.name} ${formData.email} ${formData.subject} ${formData.message}`
  return suspiciousPatterns.some(pattern => pattern.test(textToCheck))
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIP(request)

    // Rate limiting
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, subject, message, honeypot } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Spam check
    if (isSpam(body)) {
      return NextResponse.json(
        { error: 'Submission flagged as spam' },
        { status: 400 }
      )
    }

    // Here you can add your email sending logic
    // Options:
    // 1. Use Resend, SendGrid, or similar service
    // 2. Send to a webhook
    // 3. Save to database
    // 4. Forward to Google Sheets/Airtable

    // Example: Log to console (replace with actual email sending)
    console.log('Contact Form Submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      ip,
    })

    // For now, just return success
    // In production, implement actual email sending here
    
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully! I\'ll get back to you soon.',
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
