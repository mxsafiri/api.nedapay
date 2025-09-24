import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extract form fields
    const applicationData = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      country: formData.get('country') as string,
      companyName: formData.get('companyName') as string,
      companyType: formData.get('companyType') as string,
      businessRegistration: formData.get('businessRegistration') as string,
      website: formData.get('website') as string,
      providerType: formData.get('providerType') as string,
      liquidityAmount: formData.get('liquidityAmount') as string,
      currencies: formData.get('currencies') as string,
      paymentMethods: formData.get('paymentMethods') as string,
      experience: formData.get('experience') as string,
      compliance: formData.get('compliance') as string,
      kycCompleted: formData.get('kycCompleted') === 'true',
      additionalInfo: formData.get('additionalInfo') as string,
    }
    
    // Handle file upload
    const licenseFile = formData.get('licenseFile') as File | null
    let fileInfo = null
    
    if (licenseFile && licenseFile.size > 0) {
      fileInfo = {
        name: licenseFile.name,
        size: licenseFile.size,
        type: licenseFile.type,
        // In a real implementation, you would save the file to cloud storage
        // and include the URL here. For now, we'll just include file metadata.
      }
    }
    
    // Email recipients
    const recipients = [
      'info@nedapay.xyz',
      'victor@nedapay.xyz', 
      'machuche@nedapay.xyz'
    ]

    // Format the email content
    const emailContent = `
New NEDApay Provider Application

PERSONAL INFORMATION:
- Full Name: ${applicationData.fullName}
- Email: ${applicationData.email}
- Phone: ${applicationData.phone}
- Country: ${applicationData.country}

COMPANY INFORMATION:
- Company Name: ${applicationData.companyName}
- Company Type: ${applicationData.companyType}
- Business Registration: ${applicationData.businessRegistration || 'Not provided'}
- Website: ${applicationData.website || 'Not provided'}

PROVIDER DETAILS:
- Provider Type: ${applicationData.providerType}
- Available Liquidity: ${applicationData.liquidityAmount}
- Supported Currencies: ${applicationData.currencies}
- Payment Methods: ${applicationData.paymentMethods}

EXPERIENCE & COMPLIANCE:
- Previous Experience: ${applicationData.experience || 'Not provided'}
- Compliance Status: ${applicationData.compliance || 'Not provided'}
- KYC Ready: ${applicationData.kycCompleted ? 'Yes' : 'No'}

LICENSE DOCUMENTATION:
${fileInfo ? `- File: ${fileInfo.name} (${(fileInfo.size / 1024 / 1024).toFixed(2)} MB)` : '- No file uploaded'}

ADDITIONAL INFORMATION:
${applicationData.additionalInfo || 'None provided'}

---
Application submitted on: ${new Date().toISOString()}
    `.trim()

    // Log the application for debugging
    console.log('New provider application received:', {
      applicant: applicationData.fullName,
      email: applicationData.email,
      company: applicationData.companyName,
      fileAttached: fileInfo ? fileInfo.name : 'None',
      timestamp: new Date().toISOString()
    })

    // For now, we'll simulate email sending by creating mailto URLs
    // and triggering them on the client side
    const subject = `New NEDApay Provider Application - ${applicationData.fullName}`
    
    // Send emails to all recipients using mailto (fallback approach)
    const emailPromises = recipients.map(async (email) => {
      try {
        // In a real implementation, you would use an email service here
        // For now, we'll create a mailto URL for each recipient
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`
        
        // Log each email that would be sent
        console.log(`Email would be sent to: ${email}`)
        console.log(`Subject: ${subject}`)
        
        return { email, status: 'queued', mailtoUrl }
      } catch (error) {
        console.error(`Failed to queue email for ${email}:`, error)
        return { email, status: 'failed', error: error instanceof Error ? error.message : 'Unknown error' }
      }
    })

    const emailResults = await Promise.all(emailPromises)
    
    // Also send a confirmation email to the applicant
    const applicantMailto = `mailto:${applicationData.email}?subject=${encodeURIComponent('NEDApay Provider Application Received')}&body=${encodeURIComponent(`Dear ${applicationData.fullName},

Thank you for your interest in becoming a NEDApay provider. We have received your application and will review it within 2-3 business days.

Our team will contact you at ${applicationData.email} or ${applicationData.phone} if we need any additional information.

Best regards,
The NEDApay Team

---
This is an automated confirmation email.`)}`

    return NextResponse.json({ 
      success: true, 
      message: 'Application received successfully',
      emailResults,
      applicantConfirmation: applicantMailto,
      // Include the raw data for potential manual processing
      applicationData: {
        ...applicationData,
        fileInfo,
        submittedAt: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('Error processing application:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to process application' },
      { status: 500 }
    )
  }
}
