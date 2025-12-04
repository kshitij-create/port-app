# Cloudflare Pages Deployment Guide

This guide will help you deploy your React frontend to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account (free tier works)
2. Git repository with your code pushed to GitHub/GitLab/Bitbucket
3. Wrangler CLI (optional, for CLI deployment)

## Deployment Options

### Option 1: Deploy via Cloudflare Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Prepare for Cloudflare Pages deployment"
   git push origin main
   ```

2. **Login to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com/
   - Navigate to **Pages** from the left sidebar

3. **Create a new project**
   - Click **Create a project**
   - Click **Connect to Git**
   - Select your repository
   - Authorize Cloudflare to access your repo

4. **Configure build settings**
   - **Project name**: `portfolio-app` (or your preferred name)
   - **Production branch**: `main` (or your default branch)
   - **Framework preset**: `Create React App`
   - **Build command**: `cd frontend && npm install && npm run build`
   - **Build output directory**: `frontend/build`
   - **Root directory**: `/` (leave as project root)

5. **Environment Variables** (if your app needs them)
   - Click **Add variable**
   - Add any `REACT_APP_*` environment variables your frontend needs
   - Example: `REACT_APP_API_URL=https://your-backend-url.com`

6. **Deploy**
   - Click **Save and Deploy**
   - Wait for the build to complete (usually 2-5 minutes)
   - Your site will be available at `https://portfolio-app.pages.dev`

### Option 2: Deploy via Wrangler CLI

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Build your app**
   ```bash
   cd frontend
   npm install
   npm run build
   ```

4. **Deploy to Cloudflare Pages**
   ```bash
   wrangler pages deploy build --project-name=portfolio-app
   ```

## Post-Deployment Configuration

### Custom Domain (Optional)

1. Go to your Pages project in Cloudflare Dashboard
2. Click on **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `portfolio.example.com`)
5. Follow the DNS configuration instructions

### Environment Variables

If your React app needs to connect to your backend API:

1. Go to your Pages project → **Settings** → **Environment variables**
2. Add variables for Production and/or Preview environments:
   - `REACT_APP_API_URL`: Your backend API URL
   - Any other `REACT_APP_*` variables your app uses

### Preview Deployments

Cloudflare Pages automatically creates preview deployments for:
- Every pull request
- Every branch push (if configured)

Preview URLs: `https://<branch>.<project-name>.pages.dev`

## Build Configuration Details

- **Build command**: `npm run build`
- **Build directory**: `build`
- **Node version**: 18 (configured in `wrangler.toml`)
- **Package manager**: npm or yarn (auto-detected)

## SPA Routing

The `_redirects` file in `frontend/public/` ensures client-side routing works:
```
/* /index.html 200
```

This redirects all routes to `index.html` so React Router can handle navigation.

## Troubleshooting

### Build Fails

1. **Check build logs** in Cloudflare Dashboard
2. **Test build locally**:
   ```bash
   cd frontend
   npm install
   npm run build
   ```

### Blank Page After Deployment

1. Check browser console for errors
2. Verify `_redirects` file is in `public/` folder
3. Check if environment variables are set correctly

### API Calls Fail

1. Verify `REACT_APP_API_URL` environment variable is set
2. Check CORS configuration on your backend
3. Ensure backend allows requests from `*.pages.dev` domain

## Backend Deployment

Your Python FastAPI backend needs to be deployed separately. Recommended platforms:

- **Railway**: https://railway.app
- **Render**: https://render.com
- **Fly.io**: https://fly.io
- **AWS Lambda**: with Mangum adapter
- **Google Cloud Run**: Container-based deployment

Once deployed, update the `REACT_APP_API_URL` environment variable in Cloudflare Pages with your backend URL.

## Monitoring & Analytics

Cloudflare provides:
- **Web Analytics**: Free, privacy-first analytics
- **Deployment logs**: View build and deployment history
- **Real-time metrics**: Request counts, bandwidth usage

Enable in: Pages project → **Analytics**

## Useful Commands

```bash
# Test build locally
cd frontend && npm run build

# Deploy via CLI
wrangler pages deploy build --project-name=portfolio-app

# View deployment logs
wrangler pages deployment list --project-name=portfolio-app

# View project info
wrangler pages project list
```

## Next Steps

1. ✅ Deploy frontend to Cloudflare Pages
2. ⚡ Deploy backend to a Python hosting platform
3. 🔗 Update frontend environment variables with backend URL
4. 🌐 Configure custom domain (optional)
5. 📊 Enable Web Analytics (optional)
