# NEDApay API Reference Update Plan

## Current Status
- **Implemented**: Only `/api/submit-application` endpoint (provider applications)
- **Documented**: Full API reference with placeholder endpoints
- **Gap**: 95% of documented APIs don't exist in implementation

## Priority 1: Core Payment Processing APIs

### 1. Order Management
```
POST /v1/orders              - Create payment order
GET  /v1/orders              - List orders (with pagination)
GET  /v1/orders/{id}         - Get order details
PUT  /v1/orders/{id}/cancel  - Cancel order
```

### 2. Provider Network
```
GET  /v1/providers           - List available providers
GET  /v1/providers/{id}      - Get provider details
POST /v1/providers/apply     - Apply to become provider (existing)
```

### 3. Liquidity & Rates
```
GET  /v1/rates               - Get current exchange rates
GET  /v1/liquidity           - Check available liquidity
POST /v1/quotes              - Request payment quote
```

## Priority 2: Aggregator Node APIs

### 4. Route Optimization
```
POST /v1/routes/optimize     - Get optimal payment route
GET  /v1/routes/{id}/status  - Check route execution status
```

### 5. Settlement
```
POST /v1/settlements         - Initiate settlement
GET  /v1/settlements/{id}    - Get settlement status
```

## Priority 3: Partner Integration

### 6. Authentication
```
POST /v1/auth/api-keys       - Generate API key
GET  /v1/auth/api-keys       - List API keys
DELETE /v1/auth/api-keys/{id} - Revoke API key
```

### 7. Webhooks
```
POST /v1/webhooks            - Create webhook endpoint
GET  /v1/webhooks            - List webhooks
PUT  /v1/webhooks/{id}       - Update webhook
DELETE /v1/webhooks/{id}     - Delete webhook
```

## Implementation Strategy

1. **Update API documentation** to reflect actual vs planned endpoints
2. **Mark unimplemented endpoints** with clear status indicators
3. **Create implementation roadmap** with realistic timelines
4. **Add interactive playground** for existing endpoints only
5. **Document partner onboarding** process accurately

## Key Partners to Consider
- **Tembo**: African payment rails integration
- **Thunes**: Global payment network access
- **BlockOps**: Base network infrastructure

## Technical Requirements
- PostgreSQL database layer
- Base network blockchain integration
- Real-time webhook system
- API authentication & rate limiting
- Provider KYC/compliance system
