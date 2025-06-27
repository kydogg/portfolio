import emailjs from '@emailjs/browser';

// EmailJS configuration (server-side)
const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY || '';

// Initialize EmailJS for server-side use
emailjs.init(EMAILJS_PUBLIC_KEY);

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

export const sendProjectInquiry = async (data: ProjectInquiryData): Promise<void> => {
  try {
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

    // Send email via EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status !== 200) {
      throw new Error(`EmailJS responded with status: ${response.status}`);
    }

    console.log('Email sent successfully:', response);
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