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
    
    return NextResponse.json(
      { 
        error: 'Failed to send inquiry. Please try again later.',
        success: false 
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}