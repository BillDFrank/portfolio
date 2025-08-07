from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import projects, health
from app.database import engine
from app.models import Base

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
-------
    title="William Frank's Portfolio API",
    description="API for managing portfolio projects",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(projects.router, prefix="/api/projects", tags=["projects"])
app.include_router(health.router, prefix="/api/health", tags=["health"])

@app.get("/")
def read_root():
    return {"message": "Portfolio API is running"}