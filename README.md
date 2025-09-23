# NEDApay Documentation Site

A comprehensive documentation and developer portal for NEDApay - the decentralized payment routing protocol for East Africa.

![NEDApay Documentation](https://img.shields.io/badge/NEDApay-Documentation-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

## 🌟 Features

- **Interactive API Playground** - Test API endpoints directly in the browser
- **Comprehensive Documentation** - Complete guides, tutorials, and reference materials
- **Dark Theme Design** - Professional Paycrest-inspired aesthetic
- **Mobile Responsive** - Optimized for all devices
- **Fast Search** - Command palette with instant search (⌘K)
- **Code Examples** - Multi-language code samples (JavaScript, Python, Go, PHP)
- **Real-time Testing** - Live API testing with authentication
- **Syntax Highlighting** - Beautiful code presentation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nedapay/docs.git
   cd docs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
nedapay-docs/
├── app/                          # Next.js App Router
│   ├── api-reference/           # API documentation pages
│   │   ├── sender/             # Sender endpoints
│   │   ├── provider/           # Provider endpoints
│   │   └── general/            # General endpoints
│   ├── quickstart/             # Getting started guide
│   ├── concepts/               # Core concepts
│   ├── guides/                 # Integration guides
│   └── resources/              # Additional resources
├── components/                  # Reusable React components
│   ├── api-playground.tsx      # Interactive API testing
│   ├── header.tsx              # Site header
│   ├── sidebar.tsx             # Navigation sidebar
│   └── command-palette.tsx     # Search functionality
├── lib/                        # Utility functions
└── public/                     # Static assets
```

## 🎨 Design System

### Colors

```css
/* Background Colors */
--background: #0a0a0a           /* Primary background */
--background-secondary: #111111  /* Cards, panels */
--background-tertiary: #1a1a1a   /* Hover states */

/* Text Colors */
--foreground: #ffffff           /* Primary text */
--foreground-secondary: #a1a1aa /* Secondary text */
--foreground-muted: #71717a     /* Muted text */

/* Accent Colors */
--accent-blue: #3b82f6         /* Links, primary actions */
--accent-green: #10b981        /* Success, GET methods */
--accent-orange: #f59e0b       /* Warnings, PUT methods */
--accent-red: #ef4444          /* Errors, DELETE methods */
```

### Typography

- **Primary Font**: Inter (system-ui fallback)
- **Monospace Font**: JetBrains Mono (Consolas fallback)

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Deployment
npm run export       # Export static site
```

### Adding New Pages

1. **Create page file**
   ```bash
   # Example: Add new API endpoint documentation
   touch app/api-reference/new-endpoint/page.tsx
   ```

2. **Update sidebar navigation**
   ```typescript
   // components/sidebar.tsx
   const sidebarData = [
     // Add new item to appropriate section
   ]
   ```

3. **Add to search**
   ```typescript
   // components/command-palette.tsx
   const searchItems = [
     // Add new searchable item
   ]
   ```

### Customizing API Playground

The `ApiPlayground` component supports various configurations:

```typescript
<ApiPlayground
  method="POST"                    // HTTP method
  endpoint="/v1/endpoint"          // API endpoint
  title="Endpoint Title"           // Display title
  description="Description"        // Endpoint description
  parameters={[                    // Path/query parameters
    {
      name: "id",
      type: "path",
      required: true,
      description: "Resource ID"
    }
  ]}
  requestBody={{                   // Example request body
    "field": "value"
  }}
  responseExample={{               // Example response
    "status": "success",
    "data": {}
  }}
/>
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository to Vercel**
   ```bash
   npx vercel --prod
   ```

2. **Configure environment variables** (if needed)
   - `NEXT_PUBLIC_API_URL` - API base URL
   - `NEXT_PUBLIC_ANALYTICS_ID` - Analytics tracking ID

### Netlify

1. **Build settings**
   - Build command: `npm run build`
   - Publish directory: `out`

2. **Deploy**
   ```bash
   npm run build
   netlify deploy --prod --dir=out
   ```

### Docker

1. **Build image**
   ```bash
   docker build -t nedapay-docs .
   ```

2. **Run container**
   ```bash
   docker run -p 3000:3000 nedapay-docs
   ```

### Static Export

For static hosting (GitHub Pages, S3, etc.):

```bash
npm run build
npm run export
```

## 🔧 Configuration

### Next.js Configuration

```javascript
// next.config.js
const nextConfig = {
  output: 'export',           // For static export
  trailingSlash: true,        // For static hosting
  images: {
    unoptimized: true         // For static export
  }
}
```

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Custom theme extensions
    }
  }
}
```

## 📚 Content Management

### Adding Documentation

1. **Create MDX files** for rich content
2. **Use components** for interactive elements
3. **Update navigation** in sidebar
4. **Add to search** in command palette

### Writing Guidelines

- Use clear, concise language
- Include code examples
- Add interactive playgrounds for API endpoints
- Provide real-world use cases
- Include error handling examples

## 🔍 SEO & Analytics

### Meta Tags

Each page includes optimized meta tags:

```typescript
export const metadata = {
  title: 'Page Title - NEDApay Documentation',
  description: 'Page description for SEO',
  keywords: 'nedapay, api, documentation, east africa',
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    type: 'website'
  }
}
```

### Analytics Integration

Add analytics tracking:

```typescript
// Add to app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**
   ```bash
   git checkout -b feature/new-documentation
   ```
3. **Make changes**
4. **Test locally**
   ```bash
   npm run dev
   ```
5. **Submit pull request**

### Contribution Guidelines

- Follow existing code style
- Add tests for new features
- Update documentation
- Ensure responsive design
- Test on multiple browsers

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.nedapay.io](https://docs.nedapay.io)
- **API Support**: [support@nedapay.io](mailto:support@nedapay.io)
- **Community**: [Discord](https://discord.gg/nedapay)
- **Issues**: [GitHub Issues](https://github.com/nedapay/docs/issues)

## 🗺️ Roadmap

- [ ] Multi-language support (Swahili, French)
- [ ] Advanced API testing tools
- [ ] SDK documentation generators
- [ ] Community contributions system
- [ ] Real-time API status monitoring
- [ ] Interactive tutorials
- [ ] Video documentation

---

Built with ❤️ for the East African developer community by the NEDApay team.
