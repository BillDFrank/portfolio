import { Code, Database, Brain, BookOpen, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const skills = [
    { name: "Machine Learning", icon: Brain, level: 80 },
    { name: "Data Science", icon: Database, level: 80 },
    { name: "Software Engineering", icon: Code, level: 70 },
  ];

  const featuredProjects = [
    {
      title: "Neural Network Research",
      description: "Advanced research on neural network architectures for computer vision applications.",
      tags: ["Python", "PyTorch", "Computer Vision"],
      link: "/projects/neural-network-research",
    },
    {
      title: "Data Pipeline System",
      description: "Scalable data processing pipeline for real-time analytics and machine learning.",
      tags: ["Python", "Apache Kafka", "Docker"],
      link: "/projects/data-pipeline",
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website built with Next.js and academic dark theme design.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "/projects/portfolio",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary-gray to-secondary-gray">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              William's Academic Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
              Machine Learning Researcher & Software Engineer
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in">
              Exploring the intersection of academic research and practical software engineering 
              to build intelligent systems that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link
                href="/projects"
                className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="/research"
                className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                Research Papers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-secondary-gray rounded-lg p-6 text-center">
                <skill.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-accent-gray rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-sm text-gray-400 mt-2">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.title} className="bg-card rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary-gray text-sm rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, research collaborations, 
            or interesting technical challenges.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/willi"
              className="p-3 bg-secondary-gray rounded-full hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/willi"
              className="p-3 bg-secondary-gray rounded-full hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:willi@example.com"
              className="p-3 bg-secondary-gray rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
