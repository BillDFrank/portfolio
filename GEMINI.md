# Project Overview

This project is a personal portfolio application with a modern architecture, consisting of a Next.js frontend, a FastAPI backend, and an Nginx reverse proxy, all orchestrated using Docker.

## Technologies Used

*   **Frontend:** Next.js, React, TypeScript, Tailwind CSS
*   **Backend:** FastAPI, Python, SQLAlchemy, Alembic, Pydantic
*   **Containerization:** Docker, Docker Compose
*   **Web Server:** Nginx

## Architecture

The application follows a microservices-like architecture:
*   **`portfolio-frontend`**: A Next.js application serving the user interface.
*   **`portfolio-backend`**: A FastAPI application providing API endpoints for data.
*   **`nginx`**: Acts as a reverse proxy, routing requests to the appropriate frontend or backend services.

# Building and Running

The easiest way to build and run this project is by using Docker Compose.

## Using Docker Compose

1.  Navigate to the root directory of the project (where `docker-compose.yml` is located).
2.  Build and run the services:
    ```bash
    docker-compose up --build
    ```
    This command will:
    *   Build the `portfolio-frontend` image using `docker/Dockerfile.frontend`.
    *   Build the `portfolio-backend` image using `docker/Dockerfile.backend`.
    *   Start the Nginx, frontend, and backend services.

3.  Once the services are up, you can access the application:
    *   Frontend: `http://localhost:3000` (or as configured in `docker-compose.yml`)
    *   Backend API: `http://localhost:8000` (or as configured in `docker-compose.yml`)

## Individual Service Development (without Docker Compose)

### Frontend

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

### Backend

To run the backend in development mode:

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Create a Python virtual environment and activate it:
    ```bash
    python -m venv venv
    # On Windows
    .\venv\Scripts\activate
    # On macOS/Linux
    source venv/bin/activate
    ```
3.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4.  Run the FastAPI application:
    ```bash
    uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
    ```
    The backend API will be accessible at `http://localhost:8000`.

# Development Conventions

## Frontend

*   **Framework:** Next.js
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Linting:** ESLint (configured via `eslint.config.mjs`)

## Backend

*   **Framework:** FastAPI
*   **Language:** Python
*   **ORM:** SQLAlchemy
*   **Database Migrations:** Alembic
*   **Data Validation:** Pydantic

# Project Structure

*   `.github/workflows`: GitHub Actions for CI/CD (e.g., `build-and-deploy.yml`).
*   `backend/`: Contains the FastAPI backend application.
    *   `app/`: Main application code, including database models, routers, and schemas.
    *   `alembic/`: Database migration scripts.
    *   `requirements.txt`: Python dependencies.
*   `data/`: Placeholder for data files, notebooks, and project-related data.
*   `docker/`: Docker-related files, including `Dockerfile.frontend`, `Dockerfile.backend`, `docker-compose.yml`, and `nginx.conf`.
*   `frontend/`: Contains the Next.js frontend application.
    *   `src/app/`: Next.js pages and routes.
    *   `src/components/`: Reusable React components.
    *   `package.json`: Node.js dependencies and scripts.
*   `scripts/`: Utility scripts for various tasks.
