# Portfolio Backend API

A FastAPI-based backend for a portfolio website with project management capabilities.

## Features

- RESTful API for managing portfolio projects
- SQLite database with SQLAlchemy ORM
- Alembic for database migrations
- CORS support for frontend integration
- Comprehensive API documentation with Swagger UI

## Tech Stack

- **Framework**: FastAPI
- **Database**: SQLite with SQLAlchemy ORM
- **Migrations**: Alembic
- **Validation**: Pydantic
- **Testing**: pytest

## Project Structure

```
portfolio/backend/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI application
│   ├── database.py          # Database configuration
│   ├── models/              # SQLAlchemy models
│   ├── schemas/             # Pydantic schemas
│   └── routers/             # API endpoints
├── alembic/                 # Database migrations
├── tests/                   # Test files
├── requirements.txt         # Python dependencies
└── .env.example            # Environment variables template
```

## Getting Started

### Prerequisites

- Python 3.8+
- pip (Python package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio/backend
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment**
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

5. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

6. **Initialize the database**
   ```bash
   alembic upgrade head
   ```

7. **Run the development server**
   ```bash
   uvicorn app.main:app --reload
   ```

The API will be available at `http://localhost:8000`

## API Documentation

Once the server is running, you can access:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## API Endpoints

### Projects
- `GET /api/v1/projects` - Get all projects
- `GET /api/v1/projects/{id}` - Get a specific project
- `POST /api/v1/projects` - Create a new project
- `PUT /api/v1/projects/{id}` - Update a project
- `DELETE /api/v1/projects/{id}` - Delete a project

### Health Check
- `GET /health` - Health check endpoint

## Database Migrations

To create a new migration after modifying models:
```bash
alembic revision --autogenerate -m "Description of changes"
alembic upgrade head
```

## Testing

Run the test suite:
```bash
pytest
```

## Development

### Adding New Models

1. Create the SQLAlchemy model in `app/models/`
2. Create the Pydantic schemas in `app/schemas/`
3. Create the router in `app/routers/`
4. Import and include the router in `app/main.py`
5. Generate and run migrations

### Code Style

This project uses:
- Black for code formatting
- isort for import sorting
- flake8 for linting

Format code:
```bash
black .
isort .
flake8