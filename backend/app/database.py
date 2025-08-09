from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("POSTGRES_URL_NON_POOLING", "sqlite:///./portfolio.db")

# Supabase PostgreSQL configuration
if DATABASE_URL and DATABASE_URL.startswith("postgresql://"):
    # For Supabase PostgreSQL
    engine = create_engine(
        DATABASE_URL,
        pool_size=5,
        max_overflow=10,
        pool_pre_ping=True,
        pool_recycle=300
    )
else:
    # For SQLite (local development)
    engine = create_engine(
        DATABASE_URL,
        connect_args={"check_same_thread": False}
    )

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()