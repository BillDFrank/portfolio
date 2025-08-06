from fastapi import APIRouter, Depends
from datetime import datetime
from sqlalchemy.orm import Session
from app.database import get_db

router = APIRouter()

@router.get("/")
def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "timestamp": datetime.utcnow(),
        "service": "portfolio-api"
    }

@router.get("/db")
def db_health_check(db: Session = Depends(get_db)):
    """Database health check"""
    try:
        db.execute("SELECT 1")
        return {
            "status": "healthy",
            "database": "connected",
            "timestamp": datetime.utcnow()
        }
    except Exception as e:
        return {
            "status": "unhealthy",
            "database": "disconnected",
            "error": str(e),
            "timestamp": datetime.utcnow()
        }