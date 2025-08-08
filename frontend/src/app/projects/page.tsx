"use client";

import { useState } from "react";
import { Search, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  date: string;
  status: "completed" | "in-progress" | "planned";
}

const projects: Project[] = [
  {
    id: "neural-network-research",
    title: "Neural Network Architecture Research",
    description: "Advanced research on transformer architectures for computer vision applications.",
    longDescription: "This research project explores novel transformer architectures specifically designed for computer vision tasks. We investigate attention mechanisms, positional encodings, and efficient training strategies to achieve state-of-the-art results on image classification and object detection benchmarks.",
    technologies: ["Python", "PyTorch", "CUDA", "Docker", "Weights & Biases"],
    githubUrl: "https://github.com/willi/neural-network-research",
    category: "Research",
    date: "2024-01-15",
    status: "in-progress",
  },
  {
    id: "data-pipeline-system",
    title: "Real-time Data Processing Pipeline",
    description: "Scalable data processing system for real-time analytics and ML model training.",
    longDescription: "Built a distributed data processing pipeline using Apache Kafka, Python, and Docker. The system handles millions of events per second, providing real-time analytics and feeding machine learning models with fresh data. Includes monitoring, alerting, and automatic scaling capabilities.",
    technologies: ["Python", "Apache Kafka", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/willi/data-pipeline",
    liveUrl: "https://pipeline-demo.willi.dev",
    category: "Infrastructure",
    date: "2023-11-20",
    status: "completed",
  },
  {
    id: "portfolio-website",
    title: "Academic Portfolio Website",
    description: "Modern portfolio website with academic dark theme and comprehensive project showcase.",
    longDescription: "A full-stack portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a custom academic dark theme, responsive design, project showcase, research papers section, and integration with backend APIs for dynamic content management.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/willi/portfolio",
    liveUrl: "https://willi-portfolio.vercel.app",
    category: "Web Development",
    date: "2024-02-01",
    status: "completed",
  },
  {
    id: "ml-experiment-tracker",
    title: "ML Experiment Tracking System",
    description: "Comprehensive experiment tracking and model management platform for ML workflows.",
    longDescription: "Developed an experiment tracking system that allows researchers to log, compare, and reproduce machine learning experiments. Features include hyperparameter tracking, metric visualization, model versioning, and integration with popular ML frameworks.",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Redis", "Docker"],
    githubUrl: "https://github.com/willi/ml-tracker",
    category: "Machine Learning",
    date: "2023-09-10",
    status: "completed",
  },
  {
    id: "computer-vision-toolkit",
    title: "Computer Vision Toolkit",
    description: "Open-source computer vision toolkit with pre-trained models and utilities.",
    longDescription: "Created a comprehensive computer vision toolkit that provides easy-to-use APIs for common CV tasks including image classification, object detection, and segmentation. Includes pre-trained models, data augmentation utilities, and evaluation metrics.",
    technologies: ["Python", "OpenCV", "PyTorch", "TensorFlow", "Docker"],
    githubUrl: "https://github.com/willi/cv-toolkit",
    category: "Machine Learning",
    date: "2023-07-05",
    status: "completed",
  },
];

const categories = ["All", "Research", "Machine Learning", "Infrastructure", "Web Development"];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => 
                           tech.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesStatus = selectedStatus === "all" || project.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-400 bg-green-400/10";
      case "in-progress":
        return "text-blue-400 bg-blue-400/10";
      case "planned":
        return "text-yellow-400 bg-yellow-400/10";
      default:
        return "text-gray-400 bg-gray-400/10";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-xl text-gray-400">
              A collection of my software systems and technical experiments
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors $(
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-card border border-border hover:bg-card/80"
                  )`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Status Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedStatus("all")}
                className={`px-4 py-2 rounded-lg transition-colors $(
                  selectedStatus === "all"
                    ? "bg-primary text-white"
                    : "bg-card border border-border hover:bg-card/80"
                )`}
              >
                All Status
              </button>
              {["completed", "in-progress", "planned"].map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-lg transition-colors capitalize $(
                    selectedStatus === status
                      ? "bg-primary text-white"
                      : "bg-card border border-border hover:bg-card/80"
                  )`}
                >
                  {status.replace("-", " ")}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(project.status)}`}>
                    {project.status.replace("-", " ")}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(project.date).toLocaleDateString()}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary-gray text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <Tag className="w-4 h-4 mr-2" />
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}