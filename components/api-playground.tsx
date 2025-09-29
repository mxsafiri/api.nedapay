"use client"

import { useState } from 'react'
import { Copy, Play, RotateCcw } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface ApiPlaygroundProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  endpoint: string
  title: string
  description?: string
  parameters?: Array<{
    name: string
    type: string
    required: boolean
    description: string
    example?: string
  }>
  requestBody?: object
  responseExample?: object
}

export function ApiPlayground({
  method,
  endpoint,
  title,
  description,
  parameters = [],
  requestBody,
  responseExample
}: ApiPlaygroundProps) {
  const [activeTab, setActiveTab] = useState<'request' | 'response'>('request')
  const [apiKey, setApiKey] = useState('')
  const [pathParams, setPathParams] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState<any>(null)
  const [responseStatus, setResponseStatus] = useState<number | null>(null)

  const handleSendRequest = async () => {
    setIsLoading(true)
    setActiveTab('response')
    
    // Simulate API call
    setTimeout(() => {
      setResponseStatus(200)
      setResponse(responseExample || {
        status: "success",
        message: "Operation successful",
        data: {
          id: "550e8400-e29b-41d4-a716-446655440000",
          timestamp: new Date().toISOString()
        }
      })
      setIsLoading(false)
    }, 1500)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const generateCurlCommand = () => {
    let url = `https://api.nedapay.io/v1${endpoint}`
    
    // Replace path parameters
    Object.entries(pathParams).forEach(([key, value]) => {
      url = url.replace(`{${key}}`, value)
    })

    let curl = `curl -X ${method} "${url}" \\\n  -H "API-Key: ${apiKey || 'your-api-key'}"`
    
    if (method !== 'GET' && requestBody) {
      curl += ` \\\n  -H "Content-Type: application/json" \\\n  -d '${JSON.stringify(requestBody, null, 2)}'`
    }

    return curl
  }

  return (
    <div className="border border-border rounded-lg bg-background-secondary overflow-hidden">
      {/* Header */}
      <div className="border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className={`method-badge method-${method.toLowerCase()}`}>
              {method}
            </span>
            <span className="font-mono text-sm text-foreground-secondary">
              {endpoint}
            </span>
          </div>
          <button
            onClick={handleSendRequest}
            disabled={isLoading}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-green-600/50 text-white rounded-lg text-sm font-medium transition-colors"
          >
            {isLoading ? (
              <RotateCcw className="h-4 w-4 animate-spin" />
            ) : (
              <Play className="h-4 w-4" />
            )}
            <span>Send</span>
          </button>
        </div>
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
        {description && (
          <p className="text-foreground-secondary text-sm mt-1">{description}</p>
        )}
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Left Panel - Request Configuration */}
        <div className="flex-1 p-4 space-y-6">
          {/* Authorization */}
          <div>
            <h4 className="text-sm font-medium mb-3">Authorization</h4>
            <div className="space-y-2">
              <label className="block text-sm text-foreground-secondary">
                API-Key <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="enter API-Key"
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Path Parameters */}
          {parameters.filter(p => p.type === 'path').length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-3">Path</h4>
              {parameters.filter(p => p.type === 'path').map((param) => (
                <div key={param.name} className="space-y-2">
                  <label className="block text-sm text-foreground-secondary">
                    {param.name} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={pathParams[param.name] || ''}
                    onChange={(e) => setPathParams(prev => ({
                      ...prev,
                      [param.name]: e.target.value
                    }))}
                    placeholder={`enter ${param.name}`}
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Panel - Code & Response */}
        <div className="w-full lg:w-1/2 border-t lg:border-t-0 lg:border-l border-border">
          {/* Tabs */}
          <div className="flex border-b border-border">
            <button
              onClick={() => setActiveTab('request')}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'request'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-foreground-secondary hover:text-foreground'
              }`}
            >
              Request
            </button>
            <button
              onClick={() => setActiveTab('response')}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'response'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-foreground-secondary hover:text-foreground'
              }`}
            >
              Response
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            {activeTab === 'request' ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">cURL</span>
                  <button
                    onClick={() => copyToClipboard(generateCurlCommand())}
                    className="p-1 hover:bg-background-tertiary rounded"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <div className="relative">
                  <SyntaxHighlighter
                    language="bash"
                    style={oneDark}
                    customStyle={{
                      background: '#0d1117',
                      border: '1px solid #21262d',
                      borderRadius: '8px',
                      fontSize: '12px',
                      margin: 0,
                    }}
                  >
                    {generateCurlCommand()}
                  </SyntaxHighlighter>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {responseStatus && (
                      <>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          responseStatus >= 200 && responseStatus < 300
                            ? 'bg-green-500/10 text-green-400'
                            : responseStatus >= 400
                            ? 'bg-red-500/10 text-red-400'
                            : 'bg-yellow-500/10 text-yellow-400'
                        }`}>
                          {responseStatus}
                        </span>
                        <span className="text-sm font-medium">
                          {responseStatus >= 200 && responseStatus < 300 ? 'Success' : 'Error'}
                        </span>
                      </>
                    )}
                  </div>
                  {response && (
                    <button
                      onClick={() => copyToClipboard(JSON.stringify(response, null, 2))}
                      className="p-1 hover:bg-background-tertiary rounded"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  )}
                </div>
                
                {isLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <RotateCcw className="h-6 w-6 animate-spin text-blue-400" />
                  </div>
                ) : response ? (
                  <SyntaxHighlighter
                    language="json"
                    style={oneDark}
                    customStyle={{
                      background: '#0d1117',
                      border: '1px solid #21262d',
                      borderRadius: '8px',
                      fontSize: '12px',
                      margin: 0,
                    }}
                  >
                    {JSON.stringify(response, null, 2)}
                  </SyntaxHighlighter>
                ) : (
                  <div className="text-center py-8 text-foreground-muted">
                    Click "Send" to see the response
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
