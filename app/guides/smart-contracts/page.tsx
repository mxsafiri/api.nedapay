import { Copy, Code, CheckCircle, ArrowRight, Layers, Network, Shield } from 'lucide-react'

export default function SmartContractsPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Smart Contract Interaction</h1>
          <p className="text-foreground-secondary">
            Direct blockchain integration with NEDApay's multi-chain smart contracts on XRPL, Base, and Ethereum networks.
          </p>
        </div>

        {/* Multi-Chain Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibent mb-6">Multi-Chain Architecture</h2>
          <p className="text-foreground-secondary mb-6 leading-relaxed">
            NEDApay operates across multiple blockchain networks to provide optimal performance, cost efficiency, and 
            accessibility. Our smart contracts are deployed on XRPL (primary), Base (EVM compatibility), and Ethereum 
            (maximum liquidity access).
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <Network className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="font-medium mb-2">XRPL (Primary)</h3>
              <p className="text-sm text-foreground-secondary mb-3">
                Main settlement layer with native multi-currency support and fast finality.
              </p>
              <ul className="space-y-1 text-xs text-foreground-secondary">
                <li>• 3-5 second settlement</li>
                <li>• Native stablecoin support</li>
                <li>• Low transaction costs</li>
                <li>• Built-in DEX functionality</li>
              </ul>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <Layers className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="font-medium mb-2">Base (EVM Compatible)</h3>
              <p className="text-sm text-foreground-secondary mb-3">
                Coinbase's L2 solution providing EVM compatibility with low fees and high throughput.
              </p>
              <ul className="space-y-1 text-xs text-foreground-secondary">
                <li>• EVM compatibility</li>
                <li>• Low gas fees</li>
                <li>• Ethereum ecosystem access</li>
                <li>• Coinbase integration</li>
              </ul>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <Shield className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="font-medium mb-2">Ethereum (Liquidity)</h3>
              <p className="text-sm text-foreground-secondary mb-3">
                Access to maximum DeFi liquidity and established stablecoin ecosystems.
              </p>
              <ul className="space-y-1 text-xs text-foreground-secondary">
                <li>• Maximum liquidity</li>
                <li>• Established DeFi protocols</li>
                <li>• USDC/USDT native support</li>
                <li>• Institutional adoption</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contract Addresses */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Contract Addresses</h2>
          <div className="space-y-4">
            
            {/* XRPL */}
            <div className="p-4 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">XRPL Ledger</h3>
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Primary</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground-secondary">Gateway Contract:</span>
                  <code className="text-xs font-mono bg-code-background px-2 py-1 rounded">rNEDApayGateway123...</code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground-secondary">Network:</span>
                  <span className="text-xs">Mainnet</span>
                </div>
              </div>
            </div>

            {/* Base */}
            <div className="p-4 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">Base Network</h3>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">EVM Compatible</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground-secondary">Gateway Contract:</span>
                  <code className="text-xs font-mono bg-code-background px-2 py-1 rounded">0x1234...abcd</code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground-secondary">Chain ID:</span>
                  <span className="text-xs">8453</span>
                </div>
              </div>
            </div>

            {/* Ethereum */}
            <div className="p-4 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">Ethereum Mainnet</h3>
                <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">High Liquidity</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground-secondary">Gateway Contract:</span>
                  <code className="text-xs font-mono bg-code-background px-2 py-1 rounded">0x5678...efgh</code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground-secondary">Chain ID:</span>
                  <span className="text-xs">1</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* XRPL Integration */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">XRPL Integration</h2>
          <p className="text-foreground-secondary mb-6">
            XRPL serves as our primary settlement layer with native multi-currency support and fast finality.
          </p>

          <div className="space-y-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Creating Payment Orders</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground-secondary">JavaScript (xrpl.js)</span>
                  <button className="text-foreground-secondary hover:text-foreground">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <pre className="text-green-400">{`const xrpl = require('xrpl');

const client = new xrpl.Client('wss://xrplcluster.com');
await client.connect();

// Create payment order transaction
const transaction = {
  TransactionType: 'Payment',
  Account: 'rSenderAddress...',
  Destination: 'rNEDApayGateway123...',
  Amount: {
    currency: 'USD',
    value: '100',
    issuer: 'rUSDIssuer...'
  },
  Memos: [{
    Memo: {
      MemoType: Buffer.from('nedapay_order').toString('hex'),
      MemoData: Buffer.from(JSON.stringify({
        recipient_phone: '+255712345678',
        recipient_name: 'John Doe',
        target_currency: 'TZS',
        provider_preference: 'mpesa'
      })).toString('hex')
    }
  }]
};

const prepared = await client.autofill(transaction);
const signed = wallet.sign(prepared);
const result = await client.submitAndWait(signed.tx_blob);`}</pre>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Monitoring Order Status</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-blue-400">{`// Subscribe to account transactions
client.request({
  command: 'subscribe',
  accounts: ['rNEDApayGateway123...']
});

client.on('transaction', (tx) => {
  if (tx.meta.TransactionResult === 'tesSUCCESS') {
    // Parse memo data for order updates
    const memos = tx.Memos || [];
    memos.forEach(memo => {
      const memoData = Buffer.from(memo.Memo.MemoData, 'hex').toString();
      const orderUpdate = JSON.parse(memoData);
      
      if (orderUpdate.event === 'order_completed') {
        console.log('Order completed:', orderUpdate.order_id);
      }
    });
  }
});`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Base/EVM Integration */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Base Network Integration</h2>
          <p className="text-foreground-secondary mb-6">
            Base provides EVM compatibility with low fees, perfect for DeFi integrations and Ethereum ecosystem access.
          </p>

          <div className="space-y-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Smart Contract Interface</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground-secondary">Solidity Interface</span>
                  <button className="text-foreground-secondary hover:text-foreground">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <pre className="text-green-400">{`interface INEDApayGateway {
    struct PaymentOrder {
        uint256 orderId;
        address sender;
        uint256 amount;
        address tokenIn;
        string targetCurrency;
        string recipientPhone;
        string recipientName;
        string providerPreference;
        uint256 createdAt;
        OrderStatus status;
    }
    
    enum OrderStatus { Pending, Processing, Executing, Completed, Failed }
    
    function createOrder(
        uint256 amount,
        address tokenIn,
        string calldata targetCurrency,
        string calldata recipientPhone,
        string calldata recipientName,
        string calldata providerPreference
    ) external returns (uint256 orderId);
    
    function getOrder(uint256 orderId) external view returns (PaymentOrder memory);
    
    event OrderCreated(uint256 indexed orderId, address indexed sender);
    event OrderStatusChanged(uint256 indexed orderId, OrderStatus status);
}`}</pre>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Web3 Integration</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground-secondary">JavaScript (ethers.js)</span>
                  <button className="text-foreground-secondary hover:text-foreground">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <pre className="text-blue-400">{`const { ethers } = require('ethers');

// Connect to Base network
const provider = new ethers.JsonRpcProvider('https://mainnet.base.org');
const wallet = new ethers.Wallet(privateKey, provider);

// Contract instance
const gatewayAddress = '0x1234...abcd';
const gateway = new ethers.Contract(gatewayAddress, abi, wallet);

// Create payment order
const tx = await gateway.createOrder(
  ethers.parseUnits('100', 6), // 100 USDC
  '0xUSDCAddress...', // USDC token address
  'TZS', // Target currency
  '+255712345678', // Recipient phone
  'John Doe', // Recipient name
  'mpesa' // Provider preference
);

const receipt = await tx.wait();
const orderId = receipt.logs[0].args.orderId;

console.log('Order created:', orderId.toString());`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-Chain Coordination */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Cross-Chain Coordination</h2>
          <p className="text-foreground-secondary mb-6">
            NEDApay's aggregator nodes coordinate orders across multiple chains to optimize for cost, speed, and liquidity.
          </p>

          <div className="p-6 border border-border rounded-lg bg-background-secondary">
            <h3 className="text-lg font-medium mb-4">Chain Selection Logic</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-medium">1</div>
                <div>
                  <span className="font-medium">Order Analysis</span>
                  <p className="text-sm text-foreground-secondary">Analyze order requirements: amount, target currency, speed preference</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-medium">2</div>
                <div>
                  <span className="font-medium">Chain Optimization</span>
                  <p className="text-sm text-foreground-secondary">Select optimal chain based on gas costs, liquidity, and settlement time</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-sm font-medium">3</div>
                <div>
                  <span className="font-medium">Cross-Chain Settlement</span>
                  <p className="text-sm text-foreground-secondary">Coordinate settlement across chains using bridge protocols when needed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Considerations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Security Considerations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Smart Contract Security</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• All contracts audited by leading security firms</li>
                <li>• Multi-signature governance for upgrades</li>
                <li>• Emergency pause mechanisms</li>
                <li>• Formal verification for critical functions</li>
                <li>• Bug bounty program active</li>
              </ul>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Integration Best Practices</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Always validate transaction receipts</li>
                <li>• Implement proper error handling</li>
                <li>• Use appropriate gas limits</li>
                <li>• Monitor contract events for status updates</li>
                <li>• Test thoroughly on testnets first</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testing Networks */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibent mb-6">Testing Networks</h2>
          <div className="space-y-4">
            <div className="p-4 border border-border rounded-lg bg-background-secondary">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">XRPL Testnet</h4>
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Free XRP</span>
              </div>
              <div className="text-sm text-foreground-secondary">
                <p>Endpoint: <code className="bg-code-background px-1 rounded">wss://s.altnet.rippletest.net:51233</code></p>
                <p>Faucet: <a href="#" className="text-blue-400 hover:underline">https://xrpl.org/xrp-testnet-faucet.html</a></p>
              </div>
            </div>
            
            <div className="p-4 border border-border rounded-lg bg-background-secondary">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">Base Sepolia</h4>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Free ETH</span>
              </div>
              <div className="text-sm text-foreground-secondary">
                <p>RPC: <code className="bg-code-background px-1 rounded">https://sepolia.base.org</code></p>
                <p>Chain ID: <code className="bg-code-background px-1 rounded">84532</code></p>
              </div>
            </div>
            
            <div className="p-4 border border-border rounded-lg bg-background-secondary">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">Ethereum Sepolia</h4>
                <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">Free ETH</span>
              </div>
              <div className="text-sm text-foreground-secondary">
                <p>RPC: <code className="bg-code-background px-1 rounded">https://sepolia.infura.io/v3/YOUR_KEY</code></p>
                <p>Chain ID: <code className="bg-code-background px-1 rounded">11155111</code></p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="/api-reference"
              className="group p-6 border border-border rounded-lg hover:bg-background-secondary transition-colors"
            >
              <h3 className="font-medium mb-2 group-hover:text-blue-400 transition-colors">
                API Reference
              </h3>
              <p className="text-sm text-foreground-secondary mb-4">
                Explore REST API endpoints for easier integration
              </p>
              <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-blue-400 transition-colors" />
            </a>
            
            <a 
              href="/guides/provider-setup"
              className="group p-6 border border-border rounded-lg hover:bg-background-secondary transition-colors"
            >
              <h3 className="font-medium mb-2 group-hover:text-blue-400 transition-colors">
                Provider Setup
              </h3>
              <p className="text-sm text-foreground-secondary mb-4">
                Learn how to provide liquidity across multiple chains
              </p>
              <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
