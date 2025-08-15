# GitHub Pages Deployment Guide

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Automatic Deployment

The deployment happens automatically when you push to the `main` branch. The workflow file `.github/workflows/deploy-pages.yml` handles the entire process:

1. **Build**: Installs dependencies and builds the Next.js project with static export
2. **Deploy**: Uploads the built files to GitHub Pages

## Manual Setup Required

To enable GitHub Pages deployment, you need to configure your repository settings:

### 1. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**

### 2. Repository Settings
Make sure your repository is public or you have GitHub Pro/Team for private repository Pages.

## Configuration Details

### Next.js Configuration
The project is configured for static export with:
- `output: 'export'` - Enables static export
- `trailingSlash: true` - Ensures compatibility with static hosting
- `images.unoptimized: true` - Disables Next.js image optimization for static export
- `basePath` and `assetPrefix` - Configured for GitHub Pages subdirectory deployment

### Project Structure
- Frontend built from `/frontend` directory
- Static data used instead of API calls for GitHub Pages compatibility
- Projects data stored in `/frontend/src/lib/projects.ts`

## Local Development

To run the project locally:

```bash
cd frontend
npm install
npm run dev
```

To test the production build locally:

```bash
cd frontend
npm run build
npm run start
```

## Deployment URL

After successful deployment, your site will be available at:
`https://[username].github.io/[repository-name]`

For this repository: `https://billdfrank.github.io/portfolio`

## Troubleshooting

### Build Failures
- Check the Actions tab in your GitHub repository for build logs
- Ensure all dependencies are properly listed in `package.json`
- Verify that the build process works locally first

### 404 Errors
- Ensure the `.nojekyll` file is present in the `public` directory
- Check that all internal links use relative paths
- Verify that the `basePath` is configured correctly

### Permission Issues
- Ensure GitHub Actions has permission to deploy to Pages
- Check repository settings under Actions > General > Workflow permissions
