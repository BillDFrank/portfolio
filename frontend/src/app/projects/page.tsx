"use client";

import { useState, useEffect } from "react";
import { Search, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import Link from "next/link";

interface Project {
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

const categories = ["All", "Jupyter", "Machine Learning", "Infrastructure", "Web Development"];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

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
                  {project.link ? (
                    <Link
                      href={project.link}
                      className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <Tag className="w-4 h-4 mr-2" />
                      View Project
                    </Link>
                  ) : (
                    <span className="flex items-center text-gray-500">
                      <Tag className="w-4 h-4 mr-2" />
                      Details
                    </span>
                  )}
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