import json
from fastapi import APIRouter, HTTPException
from pathlib import Path

router = APIRouter()

DATA_FILE = Path("data/projects.json")


@router.get("/api/projects")
def get_projects():
    if not DATA_FILE.is_file():
        raise HTTPException(status_code=404, detail="Projects data not found.")
    
    with open(DATA_FILE, "r") as f:
        projects = json.load(f)
    
    return projects