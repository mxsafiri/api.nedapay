'use client'

import { useState } from 'react'
import { X, Send, Building2, User, Mail, Phone, Globe, DollarSign, Upload, FileText } from 'lucide-react'

interface ApplicationFormProps {
  isOpen: boolean
  onClose: () => void
}

export function ApplicationForm({ isOpen, onClose }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [licenseFile, setLicenseFile] = useState<File | null>(null)
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    country: '',
    
    // Company Information
    companyName: '',
    companyType: '',
    businessRegistration: '',
    website: '',
    
    // Provider Details
    providerType: '',
    liquidityAmount: '',
    currencies: '',
    paymentMethods: '',
    
    // Experience & Compliance
    experience: '',
    compliance: '',
    kycCompleted: false,
    
    // Additional Information
    additionalInfo: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type (PDF only)
      if (file.type !== 'application/pdf') {
        alert('Please upload a PDF file only.')
        e.target.value = ''
        return
      }
      
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB.')
        e.target.value = ''
        return
      }
      
      setLicenseFile(file)
    }
  }

  const removeLicenseFile = () => {
    setLicenseFile(null)
    // Reset the file input
    const fileInput = document.getElementById('licenseFile') as HTMLInputElement
    if (fileInput) {
      fileInput.value = ''
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create FormData to handle file upload
      const submitData = new FormData()
      
      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value.toString())
      })
      
      // Add license file if present
      if (licenseFile) {
        submitData.append('licenseFile', licenseFile)
      }

      const response = await fetch('/api/submit-application', {
        method: 'POST',
        body: submitData, // Use FormData instead of JSON
      })

      if (response.ok) {
        const result = await response.json()
        
        // If we have mailto URLs, open them to send emails
        if (result.emailResults) {
          result.emailResults.forEach((emailResult: any) => {
            if (emailResult.mailtoUrl) {
              // Open mailto link in a new window/tab
              window.open(emailResult.mailtoUrl, '_blank')
            }
          })
        }
        
        // Also open confirmation email for applicant
        if (result.applicantConfirmation) {
          setTimeout(() => {
            window.open(result.applicantConfirmation, '_blank')
          }, 1000) // Delay to avoid popup blocker
        }
        
        setIsSubmitted(true)
      } else {
        throw new Error('Failed to submit application')
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      alert('Failed to submit application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-background border border-border rounded-lg max-w-md w-full p-8 text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Application Submitted!</h2>
          <p className="text-foreground-secondary mb-6">
            Thank you for your interest in becoming a NEDApay provider. We'll review your application and get back to you within 2-3 business days.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">NEDApay Provider Application</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-background-secondary rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Personal Information */}
          <section>
            <div className="flex items-center mb-4">
              <User className="h-5 w-5 text-blue-400 mr-2" />
              <h3 className="text-lg font-semibold">Personal Information</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Country *</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </section>

          {/* Company Information */}
          <section>
            <div className="flex items-center mb-4">
              <Building2 className="h-5 w-5 text-green-400 mr-2" />
              <h3 className="text-lg font-semibold">Company Information</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company Type *</label>
                <select
                  name="companyType"
                  value={formData.companyType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select company type</option>
                  <option value="bank">Bank</option>
                  <option value="psp">Payment Service Provider (PSP)</option>
                  <option value="mno">Mobile Network Operator (MNO)</option>
                  <option value="fintech">FinTech Company</option>
                  <option value="individual">Individual Provider</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Business Registration Number</label>
                <input
                  type="text"
                  name="businessRegistration"
                  value={formData.businessRegistration}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </section>

          {/* Provider Details */}
          <section>
            <div className="flex items-center mb-4">
              <DollarSign className="h-5 w-5 text-orange-400 mr-2" />
              <h3 className="text-lg font-semibold">Provider Details</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Provider Type *</label>
                <select
                  name="providerType"
                  value={formData.providerType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select provider type</option>
                  <option value="institutional">Institutional Provider</option>
                  <option value="individual">Individual Liquidity Provider</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Available Liquidity (USD) *</label>
                <select
                  name="liquidityAmount"
                  value={formData.liquidityAmount}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select liquidity range</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-500k">$100,000 - $500,000</option>
                  <option value="500k-1m">$500,000 - $1,000,000</option>
                  <option value="1m+">$1,000,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Supported Currencies *</label>
                <input
                  type="text"
                  name="currencies"
                  value={formData.currencies}
                  onChange={handleInputChange}
                  placeholder="e.g., USD, KES, TZS, UGX"
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Payment Methods *</label>
                <input
                  type="text"
                  name="paymentMethods"
                  value={formData.paymentMethods}
                  onChange={handleInputChange}
                  placeholder="e.g., Bank Transfer, Mobile Money, Cash Pickup"
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </section>

          {/* Experience & Compliance */}
          <section>
            <div className="flex items-center mb-4">
              <Globe className="h-5 w-5 text-purple-400 mr-2" />
              <h3 className="text-lg font-semibold">Experience & Compliance</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Previous Experience in Financial Services</label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe your experience in financial services, payment processing, or related fields..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Compliance & Regulatory Status</label>
                <textarea
                  name="compliance"
                  value={formData.compliance}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe your regulatory licenses, compliance status, and any relevant certifications..."
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="kycCompleted"
                  checked={formData.kycCompleted}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label className="text-sm">I confirm that I can complete KYC verification if required</label>
              </div>
              
              {/* License File Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Business License or Regulatory Permit (PDF)
                </label>
                <div className="space-y-3">
                  {!licenseFile ? (
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                      <Upload className="h-8 w-8 text-foreground-secondary mx-auto mb-2" />
                      <p className="text-sm text-foreground-secondary mb-2">
                        Upload your business license or regulatory permit
                      </p>
                      <p className="text-xs text-foreground-muted mb-3">
                        PDF format only, max 10MB
                      </p>
                      <label className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer transition-colors">
                        <Upload className="h-4 w-4 mr-2" />
                        Choose File
                        <input
                          id="licenseFile"
                          type="file"
                          accept=".pdf"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-green-600 dark:text-green-400 mr-3" />
                        <div>
                          <p className="text-sm font-medium text-green-800 dark:text-green-200">
                            {licenseFile.name}
                          </p>
                          <p className="text-xs text-green-600 dark:text-green-400">
                            {(licenseFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeLicenseFile}
                        className="p-1 hover:bg-green-100 dark:hover:bg-green-800 rounded transition-colors"
                      >
                        <X className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </button>
                    </div>
                  )}
                  <p className="text-xs text-foreground-muted">
                    Optional: Upload your business license, regulatory permit, or other compliance documentation to support your application.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
            <div>
              <label className="block text-sm font-medium mb-2">Additional Comments</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any additional information you'd like to share about your application..."
              />
            </div>
          </section>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-border">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-border hover:bg-background-secondary rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors flex items-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Submit Application
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
