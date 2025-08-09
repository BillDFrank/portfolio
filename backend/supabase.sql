-- Supabase database schema for portfolio
-- Run this in Supabase SQL editor after creating your project

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    short_description VARCHAR(500),
    technologies TEXT[] NOT NULL,
    github_url VARCHAR(500),
    live_url VARCHAR(500),
    image_url VARCHAR(500),
    featured BOOLEAN DEFAULT FALSE,
    category VARCHAR(100),
    status VARCHAR(50) DEFAULT 'completed',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL UNIQUE,
    category VARCHAR(50) NOT NULL,
    level INTEGER CHECK (level >= 1 AND level <= 5),
    icon VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create experiences table
CREATE TABLE IF NOT EXISTS experiences (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    start_date DATE NOT NULL,
    end_date DATE,
    current BOOLEAN DEFAULT FALSE,
    description TEXT,
    achievements TEXT[],
    technologies TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content TEXT NOT NULL,
    excerpt VARCHAR(500),
    tags TEXT[],
    published BOOLEAN DEFAULT FALSE,
    featured BOOLEAN DEFAULT FALSE,
    read_time INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_skills_category ON skills(category);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_experiences_updated_at BEFORE UPDATE ON experiences
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data
INSERT INTO skills (name, category, level, icon) VALUES
    ('Python', 'Programming', 5, 'python'),
    ('TypeScript', 'Programming', 4, 'typescript'),
    ('React', 'Frontend', 4, 'react'),
    ('Next.js', 'Frontend', 4, 'nextjs'),
    ('FastAPI', 'Backend', 4, 'fastapi'),
    ('PostgreSQL', 'Database', 4, 'postgresql'),
    ('Docker', 'DevOps', 3, 'docker'),
    ('AWS', 'Cloud', 3, 'aws');

INSERT INTO projects (title, description, short_description, technologies, github_url, live_url, featured, category) VALUES
    ('Portfolio Website', 'A modern, responsive portfolio website built with Next.js and FastAPI', 'Personal portfolio showcasing data science projects', ARRAY['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'], 'https://github.com/username/portfolio', 'https://portfolio.example.com', true, 'Web Development'),
    ('Data Analysis Dashboard', 'Interactive dashboard for analyzing sales data with real-time updates', 'Sales analytics dashboard with predictive modeling', ARRAY['Python', 'Pandas', 'Plotly', 'FastAPI'], 'https://github.com/username/dashboard', 'https://dashboard.example.com', true, 'Data Science');