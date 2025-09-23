export const config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.nedapay.io/v1',
    sandboxUrl: process.env.NEXT_PUBLIC_API_SANDBOX_URL || 'https://sandbox-api.nedapay.io/v1',
  },
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://docs.nedapay.io',
    name: process.env.NEXT_PUBLIC_SITE_NAME || 'NEDApay Documentation',
  },
  examples: {
    apiKey: process.env.NEXT_PUBLIC_EXAMPLE_API_KEY || 'nedapay_live_1234567890abcdef',
    sandboxKey: process.env.NEXT_PUBLIC_EXAMPLE_SANDBOX_KEY || 'nedapay_test_1234567890abcdef',
  },
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
}

export default config
