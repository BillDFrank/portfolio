# Deployment Guide

This guide provides step-by-step instructions for deploying the static portfolio application to Vercel.

## Prerequisites

- A [Vercel](https://vercel.com/) account
- A [GitHub](https://github.com/) account

## Vercel Frontend Deployment

1.  **Fork this repository** to your GitHub account.
2.  **Create a new project** in your Vercel dashboard and import the forked repository.
3.  **Configure the project:**
    *   **Framework Preset:** Next.js
    *   **Root Directory:** `frontend`
4.  **Deploy** the project.

Vercel will automatically detect that this is a Next.js project and configure the build settings correctly. Because the site is static, no environment variables are required.

## GitHub Actions CI/CD (Optional)

To automate deployments, you can set up the Vercel integration for GitHub. This will automatically deploy the site every time you push to the `main` branch.

Alternatively, you can create a simple GitHub Actions workflow:

1.  Add the following secrets to your GitHub repository settings (`Settings > Secrets and variables > Actions`):
    *   `VERCEL_TOKEN`: Your Vercel access token.
    *   `VERCEL_ORG_ID`: Your Vercel organization ID.
    *   `VERCEL_PROJECT_ID`: The project ID of your frontend application on Vercel.

2.  Create a file at `.github/workflows/deploy.yml` with the following content:

```yaml
name: Build and Deploy
on:
  push:
    branches:
      - main
jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: "--prod"
          working-directory: ./frontend