# NEDApay Developer Setup Checklist

## 🚀 Quick Start Guide
We're building a liquidity pool bridge (not a token issuer). Focus on simple USDT/USDC transfers between our pool and customers through partner API requests. The documentation site shows exactly what the APIs should do - you just need to implement the backend logic
### Prerequisites
- [ ] Node.js 18+ installed
- [ ] Git access to repository
- [ ] Basic knowledge of Next.js, TypeScript, PostgreSQL
- [ ] Understanding of blockchain/Web3 concepts

### 1. Environment Setup (Day 1)

#### Clone and Install
```bash
git clone https://github.com/mxsafiri/api.nedapay.git
cd api.nedapay
npm install
```

#### Database Setup (Choose One)
**Option A: Neon (Recommended)**
```bash
# 1. Go to https://neon.tech
# 2. Create free account
# 3. Create new project "nedapay-db"
# 4. Copy connection string
```

**Option B: Supabase**
```bash
# 1. Go to https://supabase.com
# 2. Create free account  
# 3. Create new project "nedapay"
# 4. Go to Settings > Database
# 5. Copy connection string
```

#### Install Database Tools
```bash
npm install prisma @prisma/client
npm install ethers@^6.0.0
npx prisma init
```

### 2. Environment Variables (Day 1)

Create `.env.local` file:
```bash
# Database
DATABASE_URL="postgresql://username:password@host:port/database"
DIRECT_URL="postgresql://username:password@host:port/database"

# Base Network (Get from Alchemy)
BASE_RPC_URL="https://base-mainnet.g.alchemy.com/v2/YOUR_KEY"
BASE_TESTNET_RPC_URL="https://base-sepolia.g.alchemy.com/v2/YOUR_KEY"

# Wallet (Generate test wallet for development)
TREASURY_PRIVATE_KEY="0x..."
TREASURY_ADDRESS="0x..."

# Token Contracts (Base Mainnet)
USDT_CONTRACT="0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
USDC_CONTRACT="0xA0b86a33E6417c8f4b8e4c8e2e8f8f8f8f8f8f8f"

# Security
JWT_SECRET="your-random-jwt-secret-here"
API_KEY_SALT="your-random-salt-here"
```

### 3. Database Schema (Day 2)

#### Create Prisma Schema
```bash
# Edit prisma/schema.prisma with the database schema from BACKEND_IMPLEMENTATION.md
npx prisma db push
npx prisma generate
```

#### Test Database Connection
```bash
npx prisma studio  # Opens database browser
```

### 4. First API Endpoint (Day 3)

#### Create Health Check
```bash
mkdir -p app/api/v1/health
# Create app/api/v1/health/route.ts
```

#### Test API
```bash
npm run dev
curl http://localhost:3000/api/v1/health
```

### 5. Development Workflow

#### Daily Tasks
1. **Morning**: Pull latest changes, check documentation updates
2. **Development**: Work on assigned endpoints from BACKEND_IMPLEMENTATION.md
3. **Testing**: Test each endpoint with curl/Postman
4. **Evening**: Commit progress, update status

#### Testing Commands
```bash
# Run development server
npm run dev

# Test API endpoints
curl -X GET http://localhost:3000/api/v1/health
curl -X POST http://localhost:3000/api/v1/partners/buy \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer test_key" \
  -d '{"amount":"10","token":"USDT","customer_wallet":"0x..."}'

# Database operations
npx prisma studio
npx prisma db push
npx prisma generate
```

---

## 📋 Implementation Priority

### Week 1 Checklist
- [ ] Environment setup complete
- [ ] Database connected and schema created
- [ ] Health endpoint working
- [ ] Basic authentication middleware
- [ ] Partner buy endpoint (basic version)

### Week 2 Checklist  
- [ ] All partner endpoints implemented
- [ ] Transaction tracking working
- [ ] Basic blockchain integration
- [ ] Error handling added
- [ ] API testing complete

### Week 3 Checklist
- [ ] Full blockchain integration
- [ ] Multi-sig wallet setup
- [ ] Rate limiting implemented
- [ ] Security audit passed
- [ ] Documentation updated

### Week 4 Checklist
- [ ] Production deployment
- [ ] Monitoring setup
- [ ] Partner onboarding tested
- [ ] Performance optimization
- [ ] Pilot ready

---

## 🆘 Common Issues & Solutions

### Database Connection Issues
```bash
# Check connection string format
# Ensure database exists
# Verify network access
npx prisma db push --preview-feature
```

### API Route Not Found
```bash
# Ensure file is named route.ts (not index.ts)
# Check directory structure matches /app/api/v1/...
# Restart development server
```

### Blockchain Connection Issues
```bash
# Verify RPC URL is correct
# Check private key format (starts with 0x)
# Test with Base testnet first
```

### Environment Variables Not Loading
```bash
# Use .env.local for Next.js
# Restart development server after changes
# Check for typos in variable names
```

---

## 📞 Getting Help

### Resources
1. **Main Documentation**: [Live API Docs](https://apinedapay-2bvjngvts-vmuhagachi-gmailcoms-projects.vercel.app)
2. **Implementation Guide**: `BACKEND_IMPLEMENTATION.md`
3. **Next.js API Routes**: [Next.js Docs](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
4. **Prisma ORM**: [Prisma Docs](https://www.prisma.io/docs)
5. **Ethers.js**: [Ethers Docs](https://docs.ethers.org/)

### Support Process
1. Check documentation first
2. Review implementation guide
3. Search for similar issues online
4. Contact project lead with specific questions

---

## ✅ Ready to Start?

1. **Clone the repository**
2. **Set up your environment** (database, API keys)
3. **Create your first API endpoint** (health check)
4. **Follow the weekly checklist** in BACKEND_IMPLEMENTATION.md
5. **Test everything** as you build

**Remember**: We're building a simple liquidity pool bridge. Focus on USDT/USDC transfers, not complex smart contracts. Keep it simple and functional!

Good luck! 🚀
