# Production Deployment Guide

## Overview
This document covers deploying the Optmodes landing page with admin contact management system to production.

## Prerequisites
- Node.js 18+
- PostgreSQL database (Supabase recommended)
- Vercel or similar Node.js hosting platform

## Environment Setup

### 1. Database Configuration
Switch from SQLite to PostgreSQL for production:

```bash
# Update .env.local with your Supabase credentials
DATABASE_URL=postgresql://[user]:[password]@[host]:[port]/[database]

# Generate Prisma client
npx prisma generate

# Push schema to production database
npx prisma db push
```

### 2. Generate Strong Secrets
Replace development secrets with production-grade ones:

```bash
# Generate JWT_SECRET (copy the output)
openssl rand -base64 32

# Update .env.local
JWT_SECRET=<generated-string>
NODE_ENV=production
```

### 3. Create Initial Admin Account
For production, create the admin account directly in the database using Prisma Studio:

```bash
npx prisma studio
```

Then manually create an Admin record with:
- **email**: admin@optmodes.com
- **password**: (Use bcryptjs hash of your chosen password)
- **name**: Admin

Or use a Prisma script:

```javascript
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('YourProductionPassword123!@#', 10);
  
  const admin = await prisma.admin.create({
    data: {
      email: 'admin@optmodes.com',
      password: hashedPassword,
      name: 'Admin'
    }
  });
  
  console.log('Admin created:', admin);
  await prisma.$disconnect();
}

main().catch(console.error);
```

## Deployment Steps

### 1. Verify Build
```bash
npm run build
```

### 2. Test Locally
```bash
npm run build
npm run start
```

### 3. Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

### 4. Set Environment Variables in Vercel
Add to Vercel project settings:
- `DATABASE_URL`: Your Supabase PostgreSQL connection string
- `JWT_SECRET`: Your production secret (from openssl command)
- `NODE_ENV`: production

## API Endpoints

### Contact Form Submission
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "subject": "Inquiry",
  "message": "Your message here"
}

Response: 201 Created
{
  "success": true,
  "data": { ...contact object }
}
```

### Admin Login
```
POST /api/admin/login
Content-Type: application/json

{
  "email": "admin@optmodes.com",
  "password": "YourPassword"
}

Response: 200 OK
{
  "success": true,
  "token": "jwt-token",
  "admin": {
    "id": "...",
    "email": "admin@optmodes.com",
    "name": "Admin"
  }
}
```

### Get Messages (Protected)
```
GET /api/admin/messages?limit=50&skip=0
Authorization: Bearer <jwt-token>

Response: 200 OK
{
  "success": true,
  "data": [ ...messages ]
}
```

### Update Message Status (Protected)
```
PATCH /api/admin/messages
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "messageId": "...",
  "read": true
}

Response: 200 OK
```

### Delete Message (Protected)
```
DELETE /api/admin/messages?id=<messageId>
Authorization: Bearer <jwt-token>

Response: 200 OK
```

## Security Checklist

- [ ] JWT_SECRET is a strong random string (32+ characters)
- [ ] DATABASE_URL uses HTTPS connection
- [ ] NODE_ENV is set to production
- [ ] CORS headers are properly configured
- [ ] Rate limiting is enabled (optional, use middleware)
- [ ] Admin credentials are strong
- [ ] Database backups are configured
- [ ] SSL certificate is valid
- [ ] Headers include security best practices
- [ ] Admin routes are properly protected

## Monitoring & Logs

Monitor for errors in:
- Vercel dashboard
- Server error logs (check console.error outputs)
- Database connection issues

## Database Maintenance

### Regular Backups
```bash
# Supabase automatically backups daily
# But you can also export data manually through Supabase dashboard
```

### Query Performance
Monitor slow queries in Supabase dashboard.

## Rollback Plan

If issues occur:
1. Revert to previous commit
2. Deploy again with working version
3. Check database migrations with `npx prisma db status`

## Support

For issues:
1. Check Next.js build logs
2. Check Supabase connection
3. Verify JWT_SECRET is set correctly
4. Ensure admin account exists in database

---

**Last Updated**: 2026-06-22
**Next.js Version**: 16.2.9
**Prisma Version**: 5.22.0
