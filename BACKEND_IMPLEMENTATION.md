# NEDApay Backend Implementation Guide

## 🎯 Project Overview

NEDApay is a **liquidity pool bridge** that enables PSPs, MNOs, and Banks to offer stablecoin services through their existing payment channels. We manage USDT/USDC reserves on Base network and provide simple transfer operations.

### Architecture
- **Frontend**: ✅ Complete (Next.js documentation site)
- **Backend**: ❌ Missing (80% of implementation needed)
- **Model**: Liquidity pool management (not token minting/burning)
- **Network**: Base blockchain (primary)
- **Tokens**: USDT/USDC (existing tokens, not custom)

---

## 📋 Current Status

### ✅ What We Have
- Professional documentation site (live)
- Next.js 14 framework with API routes capability
- TypeScript setup and build system
- Vercel deployment pipeline
- Environment variables configuration
- Clear API specifications in documentation

### ❌ What's Missing (Your Tasks)
- Database layer (PostgreSQL)
- API endpoints implementation
- Base network blockchain integration
- Authentication and security
- Liquidity pool management system

---

## 🏗️ Implementation Requirements

### 1. Database Setup (Priority 1)

#### Technology Stack
```bash
- PostgreSQL (recommend Neon or Supabase)
- Prisma ORM (for type safety)
- Database migrations
```

#### Required Tables
```sql
-- Partners (PSPs, MNOs, Banks)
CREATE TABLE partners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  api_key VARCHAR(255) UNIQUE NOT NULL,
  wallet_address VARCHAR(42),
  balance_usdt DECIMAL(18,6) DEFAULT 0,
  balance_usdc DECIMAL(18,6) DEFAULT 0,
  daily_limit DECIMAL(18,2) DEFAULT 10000,
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Transaction tracking
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  partner_id UUID REFERENCES partners(id),
  type VARCHAR(20) NOT NULL, -- 'buy' or 'sell'
  amount DECIMAL(18,6) NOT NULL,
  token VARCHAR(10) NOT NULL, -- 'USDT' or 'USDC'
  customer_wallet VARCHAR(42) NOT NULL,
  tx_hash VARCHAR(66),
  status VARCHAR(20) DEFAULT 'pending', -- pending, processing, completed, failed
  fiat_amount DECIMAL(18,2),
  fiat_currency VARCHAR(3),
  reference VARCHAR(255),
  error_message TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Liquidity pool tracking
CREATE TABLE liquidity_pool (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  token VARCHAR(10) NOT NULL UNIQUE, -- 'USDT' or 'USDC'
  total_balance DECIMAL(18,6) NOT NULL,
  available_balance DECIMAL(18,6) NOT NULL,
  reserved_balance DECIMAL(18,6) DEFAULT 0,
  wallet_address VARCHAR(42) NOT NULL,
  last_sync TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- API keys and authentication
CREATE TABLE api_keys (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  partner_id UUID REFERENCES partners(id),
  key_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  permissions JSONB DEFAULT '[]',
  last_used TIMESTAMP,
  expires_at TIMESTAMP,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Environment Variables Needed
```bash
# Add to .env
DATABASE_URL="postgresql://username:password@host:port/database"
DIRECT_URL="postgresql://username:password@host:port/database" # For migrations

# Base Network
BASE_RPC_URL="https://base-mainnet.g.alchemy.com/v2/YOUR_KEY"
BASE_TESTNET_RPC_URL="https://base-sepolia.g.alchemy.com/v2/YOUR_KEY"

# Wallet Management
TREASURY_PRIVATE_KEY="0x..." # Multi-sig wallet private key
TREASURY_ADDRESS="0x..." # Multi-sig wallet address

# Token Contracts on Base
USDT_CONTRACT="0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
USDC_CONTRACT="0xA0b86a33E6417c8f4b8e4c8e2e8f8f8f8f8f8f8f"

# Security
JWT_SECRET="your-jwt-secret"
API_KEY_SALT="your-api-key-salt"
```

### 2. API Endpoints Implementation (Priority 2)

#### Required API Routes Structure
```
/app/api/v1/
├── auth/
│   ├── validate/route.ts          # Validate API key
│   └── partner/route.ts           # Partner authentication
├── partners/
│   ├── buy/route.ts              # Buy stablecoins from pool
│   ├── sell/route.ts             # Sell stablecoins to pool
│   ├── balance/route.ts          # Check partner balance
│   └── pool/route.ts             # Check pool liquidity
├── transactions/
│   ├── route.ts                  # List transactions
│   └── [id]/route.ts             # Get specific transaction
├── health/route.ts               # System health check
└── rates/route.ts                # Current exchange rates
```

#### Core API Endpoints Specifications

##### 1. Partner Buy Endpoint
```typescript
// POST /api/v1/partners/buy
interface BuyRequest {
  amount: string;           // Amount of stablecoin to buy
  token: 'USDT' | 'USDC';  // Token type
  customer_wallet: string; // Customer's wallet address
  fiat_amount?: string;    // Fiat amount collected
  fiat_currency?: string;  // Fiat currency (TZS, KES, UGX)
  reference?: string;      // Partner's reference ID
}

interface BuyResponse {
  success: boolean;
  transaction_id: string;
  tx_hash?: string;
  amount: string;
  token: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  estimated_completion: string; // ISO timestamp
}
```

### 3. Blockchain Integration (Priority 3)

#### Required Libraries
```bash
npm install ethers@^6.0.0
npm install @types/node
```

#### Base Network Configuration
```typescript
// lib/blockchain.ts
import { ethers } from 'ethers';

export const BASE_CONFIG = {
  chainId: 8453,
  name: 'Base',
  rpcUrl: process.env.BASE_RPC_URL!,
  contracts: {
    USDT: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    USDC: '0xA0b86a33E6417c8f4b8e4c8e2e8f8f8f8f8f8f8f'
  }
};

export const provider = new ethers.JsonRpcProvider(BASE_CONFIG.rpcUrl);
export const wallet = new ethers.Wallet(process.env.TREASURY_PRIVATE_KEY!, provider);
```

---

## 🚀 Implementation Timeline

### Week 1: Foundation
- [ ] Set up PostgreSQL database (Neon/Supabase)
- [ ] Install and configure Prisma ORM
- [ ] Create database schema and migrations
- [ ] Set up environment variables
- [ ] Create basic API route structure

### Week 2: Core APIs
- [ ] Implement authentication middleware
- [ ] Build partner buy/sell endpoints
- [ ] Add transaction tracking
- [ ] Create balance and pool status endpoints
- [ ] Add basic error handling

### Week 3: Blockchain Integration
- [ ] Set up Base network connection
- [ ] Implement token transfer functions
- [ ] Add transaction monitoring
- [ ] Create multi-sig wallet setup
- [ ] Test with Base testnet

### Week 4: Production Ready
- [ ] Add comprehensive error handling
- [ ] Implement rate limiting
- [ ] Add logging and monitoring
- [ ] Security audit and testing
- [ ] Documentation and deployment

---

## 📚 Resources & References

### Documentation
- [Current API Documentation](https://apinedapay-2bvjngvts-vmuhagachi-gmailcoms-projects.vercel.app)
- [Base Network Docs](https://docs.base.org/)
- [Ethers.js Documentation](https://docs.ethers.org/)
- [Prisma Documentation](https://www.prisma.io/docs)

### Contract Addresses (Base Mainnet)
- USDT: `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`
- USDC: `0xA0b86a33E6417c8f4b8e4c8e2e8f8f8f8f8f8f8f`

---

## 🎯 Success Criteria

### Functional Requirements
- [ ] Partners can buy stablecoins from pool
- [ ] Partners can sell stablecoins to pool
- [ ] Real-time balance and pool status
- [ ] Transaction tracking and history
- [ ] Secure API key authentication

### Performance Requirements
- [ ] API response time < 2 seconds
- [ ] Transaction processing < 5 minutes
- [ ] 99.9% uptime
- [ ] Handle 1000+ requests/hour

**Remember**: We're building a liquidity pool bridge, not a token issuer. Focus on simple USDT/USDC transfers between pool and customers through partner requests.
