"use client";

import { Mail, Github, Linkedin, Twitter, BookOpen, Award, MapPin, Calendar } from "lucide-react";
import Image from "next/image";

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  gpa?: string;
}

interface Skill {
  category: string;
  items: string[];
}

export default function AboutPage() {
  const experiences: Experience[] = [
    {
      role: "Document Management System Consultant",
      company: "Capgemini Engineering",
      period: "Jul 2024 - Present",
      location: "Portugal & Tunisia · Hybrid",
      description: "Document management consultant in one of the biggest companies in the renewable energy industry.",
      achievements: [
        "Review and organize existing documents with systematic approach",
        "Clean up and standardize metadata associated with each document",
        "Ensure accurate and consistent documentation practices",
        "Create and maintain Power BI reports for data visualization",
        "Create Python algorithms to optimize data cleaning process",
        "Develop a Python app using Streamlit, Transformers and scikit-learn for NLP, data cleaning, clustering and classification"
      ]
    },
    {
      role: "Bilingual Customer Service Representative",
      company: "Concentrix",
      period: "Jun 2022 - Jul 2024",
      location: "Porto, Portugal",
      description: "Customer service agent at Concentrix (Randstad contractor), supporting one of the biggest online travel agency for lodging reservations and other travel products in the world.",
      achievements: [
        "Provided exceptional customer service in multiple languages",
        "Resolved complex booking issues and travel-related inquiries",
        "Maintained high customer satisfaction ratings",
        "Collaborated with international teams across different time zones"
      ]
    },
    {
      role: "Internship at the Secretary of Public Works",
      company: "Prefeitura Municipal de Blumenau",
      period: "Nov 2020 - Dec 2021",
      location: "Blumenau, Brazil",
      description: "Internship realized in the Blumenau town hall at the secretary of public works.",
      achievements: [
        "Project and design the pavement structure and drainage for public streets",
        "Conduct topographic surveys for infrastructure projects",
        "Perform technical analysis of public biddings",
        "Budgeting for paving and drainage works"
      ]
    },
    {
      role: "Internship of Engineer Sector",
      company: "TBJ Engenharia",
      period: "Dec 2019 - Nov 2020",
      location: "Blumenau, Brazil",
      description: "Internship realized in TBJ Engenharia, a company specialized in the design and execution of fire prevention projects for large industries, especially large food processing companies (Ex. BRF FOODS and JBS).",
      achievements: [
        "Assist in the development of fire prevention projects",
        "Plot and organize the projects to send to the Firefighter department and clients",
        "Receive architecture plants and clean the plants, setting them to the office standard"
      ]
    },
    {
      role: "Laboratory Internship",
      company: "FURB - Universidade de Blumenau",
      period: "Sep 2017 - Dec 2019",
      location: "Blumenau, Brazil",
      description: "Internship realized in the laboratory of Materials, Geology, and Soil Mechanics of the course of Civil Engineer at the University.",
      achievements: [
        "Assist civil engineer students in laboratory experiments (Ex.: Concrete molding, concrete compression and tensile tests, characterization of soils tests, concrete permeability tests, etc.)",
        "Assist the laboratory technician and professors during the classes in the laboratory",
        "Organize and clean the laboratory",
        "Attend visitors and provide laboratory guidance"
      ]
    }
  ];

  const education: Education[] = [
    {
      degree: "BSc in Civil Engineering",
      institution: "FURB - Universidade de Blumenau",
      period: "2015 - 2021",
      location: "Blumenau, Brazil",
      description: "Comprehensive civil engineering education with focus on materials, geology, soil mechanics, and infrastructure projects."
    }
  ];

  const skills: Skill[] = [
    {
      category: "Data & Analytics",
      items: ["Data Management", "Power BI", "Microsoft Excel", "Data Cleaning", "Statistical Analysis", "Data Visualization"]
    },
    {
      category: "Programming & ML",
      items: ["Python", "Natural Language Processing (NLP)", "Machine Learning", "Transformers", "Word Embeddings", "scikit-learn", "Streamlit"]
    },
    {
      category: "Tools & Platforms",
      items: ["SAP", "Jira", "Docker", "Git", "Linux", "AWS", "Google Cloud Platform"]
    },
    {
      category: "Languages",
      items: ["Portuguese (Native)", "English (Fluent)"]
    }
  ];

  const awards = [
    {
      title: "Professional Excellence",
      organization: "Capgemini Engineering",
      year: "2024",
      description: "Recognized for outstanding contribution to document management systems in renewable energy sector"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-gray-400">
              Document Management & Data Analytics Professional
            </p>
          </div>

          {/* Profile Section */}
          <div className="bg-card rounded-lg p-8 mb-8 border border-border">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl font-bold">
                W
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">William</h2>
                <p className="text-gray-400 mb-4">
                  Document Management Consultant | Data Analytics Specialist
                </p>
                <p className="text-gray-300 mb-4">
                  I'm a data-driven professional with expertise in document management systems, business intelligence,
                  and data analytics. My experience spans from implementing enterprise-level document management solutions
                  at Capgemini to developing data visualization dashboards and conducting research in NLP applications.
                  I specialize in transforming complex business requirements into scalable technical solutions, with a strong
                  focus on process optimization and data-driven decision making.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="mailto:willi@example.com" className="text-gray-400 hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/willi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com/in/willi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/willi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="bg-card rounded-lg p-6 border border-border">
                  <h4 className="text-lg font-semibold mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary-gray text-sm rounded-full text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold">{exp.role}</h4>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 md:mt-0">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold">{edu.degree}</h4>
                      <p className="text-primary">{edu.institution}</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 md:mt-0">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-2" />
                        {edu.location}
                      </div>
                      {edu.gpa && (
                        <div className="text-sm text-gray-400 mt-1">
                          GPA: {edu.gpa}
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-400">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6">Awards & Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center mb-3">
                    <Award className="w-5 h-5 text-yellow-400 mr-2" />
                    <h4 className="font-semibold">{award.title}</h4>
                  </div>
                  <p className="text-sm text-primary mb-2">{award.organization}</p>
                  <p className="text-sm text-gray-400 mb-2">{award.year}</p>
                  <p className="text-sm text-gray-300">{award.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-card rounded-lg p-8 border border-border text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-400 mb-6">
              I'm always interested in discussing opportunities in data analytics,
              document management systems, or business intelligence projects.
            </p>
            <a
              href="mailto:willi@example.com"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}