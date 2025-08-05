import { NextRequest, NextResponse } from 'next/server';
import { sendProjectInquiry, type ProjectInquiryData } from '@/lib/emailjs';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate required fields
    const { name, email, projectType, budget, timeline, services, description } = body;
    
    if (!name || !email || !projectType || !budget || !timeline || !services || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate services array
    if (!Array.isArray(services) || services.length === 0) {
      return NextResponse.json(
        { error: 'At least one service must be selected' },
        { status: 400 }
      );
    }

    // Prepare data for EmailJS
    const inquiryData: ProjectInquiryData = {
      name,
      email,
      company: body.company || '',
      projectType,
      budget,
      timeline,
      services,
      description,
    };

    // Send email via EmailJS
    await sendProjectInquiry(inquiryData);

    return NextResponse.json(
      { 
        message: 'Inquiry sent successfully',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Failed to send inquiry:', error);
    
    // More detailed error logging for debugging
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Detailed error:', errorMessage);
    
    return NextResponse.json(
      { 
        error: 'Failed to send inquiry. Please try again later.',
        success: false,
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods and provide debug info in development
export async function GET() {
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.json({
      debug: {
        hasEmailJSServiceId: !!process.env.EMAILJS_SERVICE_ID,
        hasEmailJSTemplateId: !!process.env.EMAILJS_TEMPLATE_ID,
        hasEmailJSPublicKey: !!process.env.EMAILJS_PUBLIC_KEY,
        serviceIdLength: process.env.EMAILJS_SERVICE_ID?.length || 0,
        templateIdLength: process.env.EMAILJS_TEMPLATE_ID?.length || 0,
        publicKeyLength: process.env.EMAILJS_PUBLIC_KEY?.length || 0,
      }
    });
  }
  
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}