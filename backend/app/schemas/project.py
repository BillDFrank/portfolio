from pydantic import BaseModel, HttpUrl
from typing import Optional, List
from datetime import datetime

class ProjectBase(BaseModel):
    title: str
    description: Optional[str] = None
    image_url: Optional[str] = None
    project_url: Optional[str] = None
    github_url: Optional[str] = None
    technologies: Optional[str] = None
    featured: bool = False
    order_index: int = 0

class ProjectCreate(ProjectBase):
    pass

class ProjectUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    image_url: Optional[str] = None
    project_url: Optional[str] = None
    github_url: Optional[str] = None
    technologies: Optional[str] = None
    featured: Optional[bool] = None
    order_index: Optional[int] = None

class ProjectResponse(ProjectBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class ProjectList(BaseModel):
    projects: List[ProjectResponse]
    total: int