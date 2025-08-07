// EmailJS configuration (server-side using REST API)
const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY || '';
const EMAILJS_PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY || '';

export interface ProjectInquiryData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline: string;
  services: string[];
  description: string;
}

interface EmailJSPayload {
  service_id: string;
  template_id: string;
  user_id: string;
  template_params: Record<string, string>;
  accessToken?: string;
}

export const sendProjectInquiry = async (data: ProjectInquiryData): Promise<void> => {
  try {
    // Validate required environment variables
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('Missing EmailJS environment variables:', {
        hasServiceId: !!EMAILJS_SERVICE_ID,
        hasTemplateId: !!EMAILJS_TEMPLATE_ID,
        hasPublicKey: !!EMAILJS_PUBLIC_KEY,
        hasPrivateKey: !!EMAILJS_PRIVATE_KEY
      });
      throw new Error('EmailJS configuration missing. Please check environment variables.');
    }

    console.log('EmailJS configuration loaded successfully');

    // Format the services array into a readable string
    const servicesFormatted = data.services.join(', ');
    
    // Format project type for better readability
    const projectTypeFormatted = formatProjectType(data.projectType);
    const budgetFormatted = formatBudget(data.budget);
    const timelineFormatted = formatTimeline(data.timeline);

    // Prepare template parameters
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      company: data.company || 'Not specified',
      project_type: projectTypeFormatted,
      budget_range: budgetFormatted,
      timeline: timelineFormatted,
      services_needed: servicesFormatted,
      project_description: data.description,
      reply_to: data.email,
    };

    // Prepare the payload according to EmailJS REST API documentation
    const payload: EmailJSPayload = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: templateParams,
    };

    // Add accessToken (private key) if available for enhanced security
    if (EMAILJS_PRIVATE_KEY) {
      payload.accessToken = EMAILJS_PRIVATE_KEY;
    }

    console.log('Sending email via EmailJS REST API with payload:', {
      service_id: payload.service_id,
      template_id: payload.template_id,
      user_id: payload.user_id,
      hasAccessToken: !!payload.accessToken,
      templateParamsCount: Object.keys(templateParams).length
    });

    // Send email via EmailJS REST API (exact format from docs)
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log('EmailJS API response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('EmailJS API error response:', errorText);
      throw new Error(`EmailJS API responded with status: ${response.status}. ${errorText}`);
    }

    const responseData = await response.text();
    console.log('Email sent successfully via EmailJS REST API:', responseData);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send inquiry. Please try again or contact directly.');
  }
};

// Helper functions for formatting
function formatProjectType(type: string): string {
  const typeMap: Record<string, string> = {
    'web': 'Web Development',
    'uiux': 'UI/UX Design',
    'ios': 'iOS App Development',
    'fullstack': 'Full-Stack Solution',
    'ecommerce': 'E-commerce Platform',
    'other': 'Other',
  };
  return typeMap[type] || type;
}

function formatBudget(budget: string): string {
  const budgetMap: Record<string, string> = {
    '5k-10k': '$5,000 - $10,000',
    '10k-25k': '$10,000 - $25,000',
    '25k-50k': '$25,000 - $50,000',
    '50k+': '$50,000+',
    'discuss': "Let's Discuss",
  };
  return budgetMap[budget] || budget;
}

function formatTimeline(timeline: string): string {
  const timelineMap: Record<string, string> = {
    'asap': 'ASAP (Rush Project)',
    '1-3months': '1-3 Months',
    '3-6months': '3-6 Months',
    '6months+': '6+ Months',
    'flexible': 'Flexible Timeline',
  };
  return timelineMap[timeline] || timeline;
}