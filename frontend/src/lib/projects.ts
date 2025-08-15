// Static projects data for GitHub Pages deployment
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  date: string;
  status: "completed" | "in-progress" | "planned";
  link?: string;
}

export const projectsData: Project[] = [
  {
    "id": "jupyter-notebook-example",
    "title": "Jupyter Notebook Example",
    "description": "An example project displaying a Jupyter Notebook directly on the website.",
    "technologies": ["Jupyter", "HTML", "Next.js"],
    "githubUrl": "https://github.com/BillDFrank/jupyter-notebook-example",
    "category": "Jupyter",
    "date": "2024-08-01",
    "status": "completed",
    "link": "/jupyter-notebook"
  },
  {
    "id": "portfolio-website",
    "title": "Portfolio Website",
    "description": "Modern portfolio website with academic dark theme and comprehensive project showcase.",
    "technologies": ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "Docker"],
    "githubUrl": "https://github.com/BillDFrank/portfolio",
    "liveUrl": "https://billdfrank.github.io/portfolio",
    "category": "Web Development",
    "date": "2024-02-01",
    "status": "completed"
  },
  {
    "id": "computer-vision-toolkit",
    "title": "Computer Vision Toolkit",
    "description": "Open-source computer vision toolkit with pre-trained models and utilities.",
    "technologies": ["Python", "OpenCV", "PyTorch", "TensorFlow", "Docker"],
    "githubUrl": "https://github.com/BillDFrank/cv-toolkit",
    "category": "Machine Learning",
    "date": "2023-07-05",
    "status": "completed"
  },
  {
    "id": "machine-learning-pipeline",
    "title": "ML Pipeline Framework",
    "description": "Scalable machine learning pipeline for data preprocessing, training, and deployment.",
    "technologies": ["Python", "Scikit-learn", "MLflow", "Apache Airflow", "Docker"],
    "githubUrl": "https://github.com/BillDFrank/ml-pipeline",
    "category": "Machine Learning",
    "date": "2023-11-15",
    "status": "completed"
  },
  {
    "id": "infrastructure-automation",
    "title": "Infrastructure as Code",
    "description": "Automated infrastructure deployment using Terraform and Ansible.",
    "technologies": ["Terraform", "Ansible", "AWS", "Docker", "Kubernetes"],
    "githubUrl": "https://github.com/BillDFrank/infrastructure-automation",
    "category": "Infrastructure",
    "date": "2024-01-10",
    "status": "in-progress"
  }
];
