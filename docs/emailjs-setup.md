# EmailJS Setup Guide

Follow these steps to get email notifications working for your project inquiry form.

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for personal)
   - **Outlook** (if you use Outlook)
   - **Yahoo** or others
4. Follow the setup instructions to connect your email
5. **Save the Service ID** (you'll need this)

## 3. Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

### Subject Line:
```
New Project Inquiry from {{from_name}}
```

### Email Body:
```
New Project Inquiry

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Project Details:
- Type: {{project_type}}
- Budget: {{budget_range}}
- Timeline: {{timeline}}
- Services Needed: {{services_needed}}

Project Description:
{{project_description}}

---
Reply directly to this email to respond to {{from_name}}.
```

4. **Save the Template ID** (you'll need this)

## 4. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. **Save this key** (you'll need this)

## 5. Add Environment Variables

1. Create a `.env.local` file in your project root:

```bash
EMAILJS_SERVICE_ID=your_service_id_here
EMAILJS_TEMPLATE_ID=your_template_id_here
EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Replace the placeholder values with your actual EmailJS credentials

**Note**: No `NEXT_PUBLIC_` prefix needed - these are server-side only for security.

## 6. Deploy to Vercel

1. Add the environment variables to your Vercel project:
   - Go to your Vercel dashboard
   - Select your project
   - Go to **Settings** → **Environment Variables**
   - Add all three variables (without `NEXT_PUBLIC_` prefix)

2. Redeploy your site

## 7. Test the Form

1. Visit your live site
2. Fill out the project inquiry form
3. Check your email for the inquiry!

## Template Variables Reference

The following variables are automatically filled in your email template:

- `{{from_name}}` - Contact's name
- `{{from_email}}` - Contact's email
- `{{company}}` - Company name (or "Not specified")
- `{{project_type}}` - Formatted project type
- `{{budget_range}}` - Formatted budget range
- `{{timeline}}` - Formatted timeline
- `{{services_needed}}` - Comma-separated list of services
- `{{project_description}}` - Full project description
- `{{reply_to}}` - Contact's email (for reply-to functionality)

## Free Tier Limits

- **200 emails per month**
- More than enough for a portfolio contact form
- Upgrade available if needed

## Troubleshooting

- **Emails not arriving**: Check spam folder, verify email service connection
- **Template errors**: Ensure all variables are spelled correctly with double curly braces
- **Build errors**: Verify environment variables are properly set