# Deployment Guide

This guide provides step-by-step instructions for deploying the portfolio application to Vercel (frontend) and Render (backend), using a Supabase PostgreSQL database.

## Prerequisites

- A [Vercel](https://vercel.com/) account
- A [Render](https://render.com/) account
- A [Supabase](https://supabase.com/) account
- A [GitHub](https://github.com/) account

## 1. Supabase Setup

1.  **Create a new project** in your Supabase dashboard.
2.  Navigate to the **SQL Editor** and execute the contents of `backend/supabase.sql` to create the necessary tables.
3.  Navigate to **Project Settings > Database** and copy the following values:
    *   `Host`
    *   `Database name`
    *   `User`
    *   `Password`
    *   `Port`
    *   `Connection string` (select the `psql` tab)

## 2. Vercel Frontend Deployment

1.  **Fork this repository** to your GitHub account.
2.  **Create a new project** in your Vercel dashboard and import the forked repository.
3.  **Configure the project:**
    *   **Framework Preset:** Next.js
    *   **Root Directory:** `frontend`
4.  **Add Environment Variables:**
    *   `NEXT_PUBLIC_SUPABASE_URL`: The URL of your Supabase project.
    *   `NEXT_PUBLIC_SUPABASE_ANON_KEY`: The `anon` key for your Supabase project.
    *   `NEXT_PUBLIC_API_URL`: The URL of your backend service on Render (you'll get this in the next section).
5.  **Deploy** the project.

## 3. Render Backend Deployment

1.  **Create a new Web Service** in your Render dashboard.
2.  **Connect your GitHub account** and select the forked repository.
3.  **Configure the service:**
    *   **Name:** `portfolio-backend` (or your preferred name)
    *   **Root Directory:** `backend`
    *   **Environment:** Python 3
    *   **Build Command:** `pip install -r requirements.txt`
    *   **Start Command:** `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
4.  **Add Environment Variables:**
    *   `DATABASE_URL`: The `psql` connection string from your Supabase project.
    *   `FRONTEND_URL`: The URL of your deployed Vercel frontend (e.g., `https://your-project.vercel.app`).
    *   `SECRET_KEY`: A randomly generated secret key. You can use `openssl rand -hex 32` to generate one.
5.  **Deploy** the service.
6.  Once deployed, copy the URL of the service. This is your `NEXT_PUBLIC_API_URL` for the Vercel project. Go back to your Vercel project settings and add this environment variable.

## 4. GitHub Actions CI/CD

To automate deployments, you need to add the following secrets to your GitHub repository settings (`Settings > Secrets and variables > Actions`):

*   `VERCEL_TOKEN`: Your Vercel access token.
*   `VERCEL_ORG_ID`: Your Vercel organization ID.
*   `VERCEL_PROJECT_ID`: The project ID of your frontend application on Vercel.
*   `RENDER_SERVICE_ID`: The service ID of your backend application on Render.
*   `RENDER_API_KEY`: Your Render API key.

Now, whenever you push to the `main` branch, the GitHub Actions workflow will automatically build and deploy your frontend and backend.