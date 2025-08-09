# Project Overview

This project is a personal portfolio application built with Next.js, featuring a clean, modern, and static architecture.

## Technologies Used

*   **Frontend:** Next.js, React, TypeScript, Tailwind CSS

## Architecture

The application is a simple, static Next.js site. All project data is stored statically within the frontend application, and there is no backend or database.

# Building and Running

## Frontend Development

To run the frontend in development mode:

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
    The frontend will be accessible at `http://localhost:3000`.

# Development Conventions

## Frontend

*   **Framework:** Next.js
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Linting:** ESLint (configured via `eslint.config.mjs`)

# Project Structure

*   `frontend/`: Contains the Next.js frontend application.
    *   `src/app/`: Next.js pages and routes.
    *   `src/components/`: Reusable React components.
    *   `package.json`: Node.js dependencies and scripts.
