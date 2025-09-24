import { ApiPlayground } from '@/components/api-playground'
import { Key, Shield, Lock, CheckCircle, AlertTriangle, Copy } from 'lucide-react'

export default function GetAggregatorPublicKeyPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Get Aggregator Public Key</h1>
          <p className="text-foreground-secondary">
            Retrieve NEDApay's public cryptographic keys for signature verification, webhook validation, and secure communication.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 p-4 bg-background-secondary rounded-lg border border-border">
          <h3 className="font-medium mb-3">On this page</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#overview" className="text-blue-400 hover:underline">Overview</a></li>
            <li><a href="#parameters" className="text-blue-400 hover:underline">Parameters</a></li>
            <li><a href="#response" className="text-blue-400 hover:underline">Response Format</a></li>
            <li><a href="#key-usage" className="text-blue-400 hover:underline">Key Usage</a></li>
            <li><a href="#examples" className="text-blue-400 hover:underline">Examples</a></li>
          </ul>
        </div>

        {/* API Playground */}
        <div className="mb-12">
          <ApiPlayground
            method="GET"
            endpoint="/general/public-key"
            title="Get Aggregator Public Key"
            description="Retrieve NEDApay's public keys for cryptographic operations"
            parameters={[
              {
                name: "key_type",
                type: "query",
                required: false,
                description: "Type of key to retrieve (signing, encryption, webhook)",
                example: "signing"
              },
              {
                name: "format",
                type: "query",
                required: false,
                description: "Key format (pem, jwk, hex, base64)",
                example: "pem"
              },
              {
                name: "algorithm",
                type: "query",
                required: false,
                description: "Cryptographic algorithm (RSA, ECDSA, Ed25519)",
                example: "ECDSA"
              }
            ]}
            responseExample={{
              "status": "success",
              "message": "Public key retrieved successfully",
              "data": {
                "keys": [
                  {
                    "keyId": "nedapay-signing-2024-01",
                    "keyType": "signing",
                    "algorithm": "ECDSA",
                    "curve": "secp256k1",
                    "usage": ["verify", "webhook_validation"],
                    "format": "pem",
                    "publicKey": "-----BEGIN PUBLIC KEY-----\nMFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAE7VKqoiGlKvVgOSgZ8WdIvDB6xDrHBlVr\nTVlFWjjBnbRjNfDK/etBhRbQrHQjJo+xqHMoVmFhlhL6OHI0+GNlNQ==\n-----END PUBLIC KEY-----",
                    "fingerprint": "SHA256:2cf24dba4f21d4288094c4b9b3de2c5c658ccbb3",
                    "createdAt": "2024-01-01T00:00:00Z",
                    "expiresAt": "2025-01-01T00:00:00Z",
                    "status": "active"
                  },
                  {
                    "keyId": "nedapay-webhook-2024-01",
                    "keyType": "webhook",
                    "algorithm": "ECDSA",
                    "curve": "secp256k1",
                    "usage": ["webhook_signing"],
                    "format": "pem",
                    "publicKey": "-----BEGIN PUBLIC KEY-----\nMFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEyVlqoiGlKvVgOSgZ8WdIvDB6xDrHBlVr\nTVlFWjjBnbRjNfDK/etBhRbQrHQjJo+xqHMoVmFhlhL6OHI0+ABC123==\n-----END PUBLIC KEY-----",
                    "fingerprint": "SHA256:1ab34cda4f21d4288094c4b9b3de2c5c658ccbb4",
                    "createdAt": "2024-01-01T00:00:00Z",
                    "expiresAt": "2025-01-01T00:00:00Z",
                    "status": "active"
                  }
                ],
                "metadata": {
                  "totalKeys": 2,
                  "activeKeys": 2,
                  "keyRotationSchedule": "quarterly",
                  "nextRotation": "2024-04-01T00:00:00Z",
                  "supportedAlgorithms": ["ECDSA", "RSA", "Ed25519"],
                  "supportedFormats": ["pem", "jwk", "hex", "base64"]
                },
                "verification": {
                  "instructions": "Use these keys to verify signatures on webhooks, API responses, and transaction confirmations",
                  "signatureHeader": "X-NEDApay-Signature",
                  "timestampHeader": "X-NEDApay-Timestamp",
                  "webhookEndpoint": "https://your-domain.com/webhooks/nedapay"
                }
              }
            }}
          />
        </div>

        {/* Documentation Sections */}
        <div className="space-y-12">
          {/* Overview */}
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-foreground-secondary mb-4">
              This endpoint provides access to NEDApay's public cryptographic keys used for digital signatures, 
              webhook validation, and secure communication. These keys are essential for verifying the authenticity 
              of data and communications from NEDApay's systems.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2 flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Security & Verification
                </h4>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• Webhook signature verification</li>
                  <li>• API response authentication</li>
                  <li>• Transaction confirmation validation</li>
                  <li>• Secure communication channels</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2 flex items-center">
                  <Key className="h-4 w-4 mr-2" />
                  Key Management
                </h4>
                <ul className="text-sm text-green-300 space-y-1">
                  <li>• Multiple key types and algorithms</li>
                  <li>• Automatic key rotation</li>
                  <li>• Flexible format support</li>
                  <li>• Expiration and lifecycle management</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-400 text-sm">
                <strong>Security Best Practice:</strong> Always verify signatures using these public keys 
                to ensure data integrity and authenticity. Cache keys locally but check for updates 
                regularly, especially before key rotation dates.
              </p>
            </div>
          </section>

          {/* Parameters */}
          <section id="parameters">
            <h2 className="text-2xl font-semibold mb-4">Query Parameters</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg">
                <thead>
                  <tr className="border-b border-border bg-background-secondary">
                    <th className="text-left p-4 font-medium">Parameter</th>
                    <th className="text-left p-4 font-medium">Type</th>
                    <th className="text-left p-4 font-medium">Required</th>
                    <th className="text-left p-4 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">key_type</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Filter by key type (signing, encryption, webhook)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">format</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Key format (pem, jwk, hex, base64) - default: pem
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">algorithm</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Filter by algorithm (RSA, ECDSA, Ed25519)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">include_metadata</td>
                    <td className="p-4 text-sm">boolean</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Include key management metadata (default: true)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Response Format */}
          <section id="response">
            <h2 className="text-2xl font-semibold mb-4">Response Format</h2>
            <p className="text-foreground-secondary mb-4">
              Returns public key information in the requested format along with metadata for 
              proper key usage, verification, and lifecycle management.
            </p>
            
            <h3 className="text-lg font-medium mb-3">Key Object Fields</h3>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Key Information</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>keyId</code> - Unique identifier for the key</li>
                  <li><code>keyType</code> - Purpose of the key (signing, encryption, webhook)</li>
                  <li><code>algorithm</code> - Cryptographic algorithm used</li>
                  <li><code>publicKey</code> - The actual public key in requested format</li>
                </ul>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Key Metadata</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>usage</code> - Array of allowed key operations</li>
                  <li><code>fingerprint</code> - SHA256 hash of the key for verification</li>
                  <li><code>createdAt</code> - Key creation timestamp</li>
                  <li><code>expiresAt</code> - Key expiration timestamp</li>
                  <li><code>status</code> - Current key status (active, rotating, deprecated)</li>
                </ul>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Verification Instructions</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>signatureHeader</code> - HTTP header containing signature</li>
                  <li><code>timestampHeader</code> - HTTP header containing timestamp</li>
                  <li><code>instructions</code> - Usage guidelines and best practices</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Usage */}
          <section id="key-usage">
            <h2 className="text-2xl font-semibold mb-4">Key Types & Usage</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 border border-blue-500/20 bg-blue-500/10 rounded-lg">
                <h3 className="text-lg font-medium text-blue-400 mb-3 flex items-center">
                  <Lock className="h-5 w-5 mr-2" />
                  Signing Keys
                </h3>
                <ul className="text-sm text-blue-300 space-y-2">
                  <li>• <strong>Purpose:</strong> API response signatures</li>
                  <li>• <strong>Algorithm:</strong> ECDSA (secp256k1)</li>
                  <li>• <strong>Usage:</strong> Transaction confirmations</li>
                  <li>• <strong>Verification:</strong> Order status updates</li>
                  <li>• <strong>Rotation:</strong> Quarterly</li>
                </ul>
              </div>

              <div className="p-4 border border-green-500/20 bg-green-500/10 rounded-lg">
                <h3 className="text-lg font-medium text-green-400 mb-3 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Webhook Keys
                </h3>
                <ul className="text-sm text-green-300 space-y-2">
                  <li>• <strong>Purpose:</strong> Webhook payload signing</li>
                  <li>• <strong>Algorithm:</strong> ECDSA (secp256k1)</li>
                  <li>• <strong>Usage:</strong> Event notifications</li>
                  <li>• <strong>Verification:</strong> Payment callbacks</li>
                  <li>• <strong>Rotation:</strong> Bi-annually</li>
                </ul>
              </div>

              <div className="p-4 border border-purple-500/20 bg-purple-500/10 rounded-lg">
                <h3 className="text-lg font-medium text-purple-400 mb-3 flex items-center">
                  <Key className="h-5 w-5 mr-2" />
                  Encryption Keys
                </h3>
                <ul className="text-sm text-purple-300 space-y-2">
                  <li>• <strong>Purpose:</strong> Secure data exchange</li>
                  <li>• <strong>Algorithm:</strong> RSA-4096</li>
                  <li>• <strong>Usage:</strong> Sensitive data encryption</li>
                  <li>• <strong>Verification:</strong> Private communications</li>
                  <li>• <strong>Rotation:</strong> Annually</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg mb-6">
              <h4 className="font-medium text-blue-400 mb-3">Webhook Signature Verification Example</h4>
              <div className="p-3 bg-code-background border border-code-border rounded font-mono text-xs">
{`// Node.js example
const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, publicKey) {
  const verify = crypto.createVerify('SHA256');
  verify.update(payload);
  verify.end();
  
  return verify.verify(publicKey, signature, 'base64');
}

// Usage
const isValid = verifyWebhookSignature(
  req.body, 
  req.headers['x-nedapay-signature'],
  nedapayPublicKey
);`}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium text-sm mb-2 flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Key Status: Active
                </h4>
                <p className="text-xs text-foreground-secondary">Key is current and should be used for verification</p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium text-sm mb-2 flex items-center">
                  <AlertTriangle className="h-4 w-4 text-yellow-400 mr-2" />
                  Key Status: Rotating
                </h4>
                <p className="text-xs text-foreground-secondary">Key rotation in progress, both old and new keys valid</p>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-2xl font-semibold mb-4">Example Requests</h2>
            
            <div className="space-y-6">
              {/* All Keys */}
              <div>
                <h3 className="text-lg font-medium mb-3">Get All Public Keys</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /general/public-key
                </div>
              </div>

              {/* Webhook Keys Only */}
              <div>
                <h3 className="text-lg font-medium mb-3">Webhook Keys Only</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /general/public-key?key_type=webhook&format=pem
                </div>
              </div>

              {/* JWK Format */}
              <div>
                <h3 className="text-lg font-medium mb-3">Keys in JWK Format</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /general/public-key?format=jwk&algorithm=ECDSA
                </div>
              </div>

              {/* Sample Response */}
              <div>
                <h3 className="text-lg font-medium mb-3">Sample Response - Signing Key</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "keys": [
      {
        "keyId": "nedapay-signing-2024-01",
        "keyType": "signing",
        "algorithm": "ECDSA",
        "curve": "secp256k1",
        "usage": ["verify", "webhook_validation"],
        "format": "pem",
        "publicKey": "-----BEGIN PUBLIC KEY-----\\nMFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAE7VKqoiGlKvVgOSgZ8WdIvDB6xDrHBlVr\\nTVlFWjjBnbRjNfDK/etBhRbQrHQjJo+xqHMoVmFhlhL6OHI0+GNlNQ==\\n-----END PUBLIC KEY-----",
        "fingerprint": "SHA256:2cf24dba4f21d4288094c4b9b3de2c5c658ccbb3",
        "status": "active",
        "expiresAt": "2025-01-01T00:00:00Z"
      }
    ],
    "verification": {
      "signatureHeader": "X-NEDApay-Signature",
      "timestampHeader": "X-NEDApay-Timestamp"
    }
  }
}`}
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Security Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400">✅ Recommended Security</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Always verify signatures on webhooks and API responses</li>
                  <li>• Cache public keys locally for performance</li>
                  <li>• Check key expiration dates regularly</li>
                  <li>• Implement key rotation handling</li>
                  <li>• Use secure key storage practices</li>
                  <li>• Validate key fingerprints for integrity</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-red-400">⚠️ Security Warnings</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Never use expired or deprecated keys</li>
                  <li>• Don't skip signature verification</li>
                  <li>• Avoid hardcoding keys in source code</li>
                  <li>• Monitor for key rotation announcements</li>
                  <li>• Implement proper error handling for verification failures</li>
                  <li>• Keep key retrieval endpoints accessible for updates</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
