# 🚀 Deployment Guide

This guide will help you deploy your Adna Fika Agestifanka portfolio to various platforms.

## 🌟 Vercel (Recommended)

Vercel is the recommended platform for deploying Next.js applications.

### Prerequisites
- GitHub account
- Vercel account
- Google AI API key

### Step-by-Step Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your GitHub repository
   - Select the repository and click "Import"

3. **Configure Environment Variables**
   In Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add the following variables:
     ```
     GOOGLE_AI_API_KEY=your_google_ai_api_key_here
     NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
     ```

4. **Deploy**
   - Click "Deploy" 
   - Wait for deployment to complete
   - Your site will be available at `https://your-project.vercel.app`

### Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## 🌐 Netlify

### Prerequisites
- Netlify account
- GitHub repository
- Google AI API key

### Deployment Steps

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

3. **Environment Variables**
   - Go to Site settings → Environment variables
   - Add:
     ```
     GOOGLE_AI_API_KEY=your_google_ai_api_key_here
     NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
     ```

4. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete

## 🐳 Docker Deployment

### Dockerfile
Create a `Dockerfile` in your project root:

```dockerfile
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Build and Run
```bash
# Build the image
docker build -t adna-portfolio .

# Run the container
docker run -p 3000:3000 \
  -e GOOGLE_AI_API_KEY=your_api_key \
  -e NEXT_PUBLIC_SITE_URL=https://your-domain.com \
  adna-portfolio
```

## ☁️ AWS Amplify

### Prerequisites
- AWS account
- AWS CLI configured
- GitHub repository

### Deployment Steps

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect your GitHub repository

2. **Build Settings**
   Create `amplify.yml` in your project root:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Environment Variables**
   - Go to App settings → Environment variables
   - Add your environment variables

4. **Deploy**
   - Save and deploy
   - Wait for build to complete

## 🌊 Digital Ocean App Platform

### Prerequisites
- Digital Ocean account
- GitHub repository

### Deployment Steps

1. **Create App**
   - Go to Digital Ocean Apps
   - Click "Create App"
   - Connect your GitHub repository

2. **Configure Build**
   ```
   Build Command: npm run build
   Run Command: npm start
   ```

3. **Environment Variables**
   Add your environment variables in the app settings

4. **Deploy**
   - Review and create app
   - Wait for deployment

## 🔧 Environment Variables Setup

For all platforms, you'll need these environment variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_AI_API_KEY` | Google AI API key for Gemini | Yes |
| `NEXT_PUBLIC_SITE_URL` | Your website URL | No |

### Getting Google AI API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated key
5. Add it to your deployment platform's environment variables

## 🔒 Security Considerations

### Environment Variables
- Never commit API keys to your repository
- Use environment variables for all sensitive data
- Rotate API keys regularly

### Headers
The application includes security headers:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

### HTTPS
- Always use HTTPS in production
- Most platforms provide SSL certificates automatically

## 📊 Performance Optimization

### Next.js Optimizations
- Image optimization enabled
- Automatic code splitting
- Static generation where possible
- Dynamic imports for large components

### Monitoring
- Set up analytics (Google Analytics, Vercel Analytics)
- Monitor Core Web Vitals
- Set up error tracking (Sentry, Bugsnag)

## 🐛 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check environment variables are set
   - Verify Node.js version compatibility
   - Check for TypeScript errors

2. **API Route Issues**
   - Ensure Google AI API key is valid
   - Check API rate limits
   - Verify environment variables in production

3. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check for CSS conflicts
   - Verify responsive design

### Debug Commands
```bash
# Check build locally
npm run build

# Check types
npm run type-check

# Check linting
npm run lint

# Test production build locally
npm run start
```

## 📈 Post-Deployment

### SEO Setup
- Submit sitemap to Google Search Console
- Set up Google Analytics
- Configure Open Graph meta tags
- Add structured data markup

### Performance Monitoring
- Set up Lighthouse CI
- Monitor Core Web Vitals
- Set up uptime monitoring

### Maintenance
- Update dependencies regularly
- Monitor API usage and costs
- Backup environment variables
- Test deployment pipeline regularly

---

**Need help?** Check the [README.md](README.md) for more information or create an issue in the repository.