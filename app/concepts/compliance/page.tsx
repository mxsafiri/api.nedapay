import { Shield, Lock, Eye, FileCheck, AlertTriangle, CheckCircle } from 'lucide-react'

export default function CompliancePage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Compliance & Security</h1>
          <p className="text-foreground-secondary">
            NEDApay&apos;s comprehensive approach to regulatory compliance, security, and risk management across global markets.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <p className="text-foreground-secondary mb-6 leading-relaxed">
            As a secondary layer protocol operating across multiple jurisdictions and payment rails, NEDApay implements 
            robust compliance and security frameworks. Our omni-channel approach requires adherence to diverse regulatory 
            requirements while maintaining seamless user experience.
          </p>
        </section>

        {/* Regulatory Compliance */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Regulatory Compliance</h2>
          <div className="space-y-6">
            
            {/* KYC/AML */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <FileCheck className="h-8 w-8 text-blue-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Know Your Customer (KYC) & Anti-Money Laundering (AML)</h3>
                  <p className="text-sm text-foreground-secondary">Comprehensive identity verification and transaction monitoring</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">KYC Requirements:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• Identity document verification</li>
                    <li>• Address proof validation</li>
                    <li>• Biometric verification (where required)</li>
                    <li>• Enhanced due diligence for high-risk customers</li>
                    <li>• Ongoing monitoring and updates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">AML Measures:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• Real-time transaction monitoring</li>
                    <li>• Suspicious activity reporting (SAR)</li>
                    <li>• Sanctions screening (OFAC, UN, EU)</li>
                    <li>• Transaction pattern analysis</li>
                    <li>• Regulatory reporting automation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Regional Compliance */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-green-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Regional Regulatory Frameworks</h3>
                  <p className="text-sm text-foreground-secondary">Compliance with local regulations across operating jurisdictions</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-background border border-border rounded">
                  <h4 className="font-medium mb-2 text-blue-400">East Africa</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Tanzania: BoT regulations</li>
                    <li>• Kenya: CBK guidelines</li>
                    <li>• Uganda: BoU requirements</li>
                    <li>• EAC cross-border protocols</li>
                  </ul>
                </div>
                <div className="p-4 bg-background border border-border rounded">
                  <h4 className="font-medium mb-2 text-green-400">International</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• FATF recommendations</li>
                    <li>• Basel III requirements</li>
                    <li>• PCI DSS compliance</li>
                    <li>• GDPR data protection</li>
                  </ul>
                </div>
                <div className="p-4 bg-background border border-border rounded">
                  <h4 className="font-medium mb-2 text-orange-400">Emerging Markets</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Mobile money regulations</li>
                    <li>• Foreign exchange controls</li>
                    <li>• Consumer protection laws</li>
                    <li>• Data localization requirements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Licensing & Partnerships */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-purple-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Licensing & Strategic Partnerships</h3>
                  <p className="text-sm text-foreground-secondary">Working with licensed entities and regulatory bodies</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Licensed Partners:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• Money service businesses (MSBs)</li>
                    <li>• Payment service providers (PSPs)</li>
                    <li>• Licensed mobile money operators</li>
                    <li>• Regulated financial institutions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Regulatory Engagement:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• Regulatory sandbox participation</li>
                    <li>• Industry working groups</li>
                    <li>• Policy consultation responses</li>
                    <li>• Compliance audits and reviews</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Framework */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Security Framework</h2>
          <div className="space-y-6">
            
            {/* Infrastructure Security */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Infrastructure Security</h3>
                  <p className="text-sm text-foreground-secondary">Multi-layered security architecture</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Network Security:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• End-to-end encryption (TLS 1.3)</li>
                    <li>• DDoS protection and mitigation</li>
                    <li>• Network segmentation</li>
                    <li>• Intrusion detection systems</li>
                    <li>• VPN and secure tunneling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Application Security:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• API authentication and authorization</li>
                    <li>• Request signing and validation</li>
                    <li>• Rate limiting and throttling</li>
                    <li>• Input validation and sanitization</li>
                    <li>• Security headers and CORS policies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <Lock className="h-8 w-8 text-green-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Data Protection & Privacy</h3>
                  <p className="text-sm text-foreground-secondary">Comprehensive data security and privacy controls</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Data Security:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• AES-256 encryption at rest</li>
                    <li>• Encrypted data transmission</li>
                    <li>• Secure key management (HSM)</li>
                    <li>• Data masking and tokenization</li>
                    <li>• Regular security audits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Privacy Controls:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• GDPR compliance framework</li>
                    <li>• Data minimization principles</li>
                    <li>• User consent management</li>
                    <li>• Right to erasure implementation</li>
                    <li>• Privacy impact assessments</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Blockchain Security */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-orange-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Blockchain & Smart Contract Security</h3>
                  <p className="text-sm text-foreground-secondary">Secure blockchain operations and smart contract management</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Smart Contract Security:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• Formal verification processes</li>
                    <li>• Third-party security audits</li>
                    <li>• Bug bounty programs</li>
                    <li>• Gradual deployment strategies</li>
                    <li>• Emergency pause mechanisms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Operational Security:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• Multi-signature wallet management</li>
                    <li>• Hardware security modules</li>
                    <li>• Secure key generation and storage</li>
                    <li>• Transaction monitoring and alerts</li>
                    <li>• Incident response procedures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Management */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Risk Management</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Operational Risk</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• System redundancy and failover</li>
                <li>• Business continuity planning</li>
                <li>• Disaster recovery procedures</li>
                <li>• Performance monitoring and alerting</li>
                <li>• Regular security assessments</li>
              </ul>
            </div>
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Financial Risk</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Liquidity risk management</li>
                <li>• Currency exposure hedging</li>
                <li>• Credit risk assessment</li>
                <li>• Settlement risk mitigation</li>
                <li>• Insurance coverage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Compliance Monitoring */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Continuous Compliance Monitoring</h2>
          <div className="p-6 bg-background-secondary border border-border rounded-lg">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium mb-3 text-blue-400">Real-time Monitoring</h4>
                <ul className="space-y-1 text-sm text-foreground-secondary">
                  <li>• Transaction screening</li>
                  <li>• Behavioral analysis</li>
                  <li>• Anomaly detection</li>
                  <li>• Risk scoring</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-green-400">Reporting & Analytics</h4>
                <ul className="space-y-1 text-sm text-foreground-secondary">
                  <li>• Regulatory reporting</li>
                  <li>• Compliance dashboards</li>
                  <li>• Audit trail maintenance</li>
                  <li>• Performance metrics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-orange-400">Continuous Improvement</h4>
                <ul className="space-y-1 text-sm text-foreground-secondary">
                  <li>• Policy updates</li>
                  <li>• Training programs</li>
                  <li>• Technology upgrades</li>
                  <li>• Best practice adoption</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Incident Response & Recovery</h2>
          <div className="space-y-4">
            <div className="p-4 bg-background-secondary border border-border rounded-lg">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-sm font-medium">1</div>
                <h4 className="font-medium">Detection & Assessment</h4>
              </div>
              <p className="text-sm text-foreground-secondary ml-12">
                Automated monitoring systems detect anomalies → Security team assesses severity → Incident classification and escalation
              </p>
            </div>
            
            <div className="p-4 bg-background-secondary border border-border rounded-lg">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-sm font-medium">2</div>
                <h4 className="font-medium">Containment & Mitigation</h4>
              </div>
              <p className="text-sm text-foreground-secondary ml-12">
                Immediate containment measures → System isolation if needed → Mitigation strategies deployed → Stakeholder notification
              </p>
            </div>
            
            <div className="p-4 bg-background-secondary border border-border rounded-lg">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-medium">3</div>
                <h4 className="font-medium">Recovery & Lessons Learned</h4>
              </div>
              <p className="text-sm text-foreground-secondary ml-12">
                System restoration and validation → Post-incident analysis → Process improvements → Documentation updates
              </p>
            </div>
          </div>
        </section>

        {/* Certifications & Standards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Certifications & Standards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border border-border rounded-lg bg-background-secondary text-center">
              <h4 className="font-medium mb-2">ISO 27001</h4>
              <p className="text-xs text-foreground-secondary">Information Security Management</p>
            </div>
            <div className="p-4 border border-border rounded-lg bg-background-secondary text-center">
              <h4 className="font-medium mb-2">SOC 2 Type II</h4>
              <p className="text-xs text-foreground-secondary">Security & Availability</p>
            </div>
            <div className="p-4 border border-border rounded-lg bg-background-secondary text-center">
              <h4 className="font-medium mb-2">PCI DSS</h4>
              <p className="text-xs text-foreground-secondary">Payment Card Industry</p>
            </div>
            <div className="p-4 border border-border rounded-lg bg-background-secondary text-center">
              <h4 className="font-medium mb-2">GDPR</h4>
              <p className="text-xs text-foreground-secondary">Data Protection</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
