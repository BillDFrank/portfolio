"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Github, Linkedin, Award, MapPin, Calendar, ExternalLink } from "lucide-react";

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
  const [imgOk, setImgOk] = useState(true);
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
      items: ["SAP", "Jira", "Docker", "Git"]
    },
    {
      category: "Languages",
      items: ["Portuguese (Native)", "English (Fluent)"]
    }
  ];

  interface Certification {
    title: string;
    organization: string;
    issued: string; // e.g., "Jul 2025"
    credentialId: string;
    url: string;
    skills: string[];
  }

  const certifications: Certification[] = [
    {
      title: "IBM AI Engineering Specialization",
      organization: "IBM",
      issued: "Jul 2025",
      credentialId: "DA5F6KRZWWFO",
      url: "https://www.coursera.org/account/accomplishments/specialization/DA5F6KRZWWFO",
      skills: [
        "Scikit-Learn",
        "Natural Language Processing (NLP)",
        "Supervised Learning",
        "Machine Learning",
        "Python (Programming Language)",
        "LangChain",
        "Hugging Face",
        "PyTorch",
        "Fine Tuning",
        "Transformers",
        "Large Language Models (LLM)",
        "Deep Learning",
        "Neural Networks"
      ]
    },
    {
      title: "Microsoft Power BI Data Analyst",
      organization: "Microsoft",
      issued: "Dec 2024",
      credentialId: "644G4BLA8G3F",
      url: "https://www.coursera.org/account/accomplishments/specialization/644G4BLA8G3F",
      skills: [
        "Power BI",
        "Extract, Transform, Load (ETL)",
        "Data Modeling",
        "Data Analysis",
        "Data Preparation"
      ]
    },
    {
      title: "Learn SQL Basics for Data Science Specialization",
      organization: "University of California, Davis",
      issued: "May 2024",
      credentialId: "Z94X5TM8PTXX",
      url: "https://www.coursera.org/account/accomplishments/specialization/Z94X5TM8PTXX",
      skills: ["SQL", "Databases", "Data Manipulation", "Analytics"]
    },
    {
      title: "Data Visualization",
      organization: "University of Illinois Urbana-Champaign",
      issued: "Feb 2024",
      credentialId: "HMT35UU226VX",
      url: "https://www.coursera.org/account/accomplishments/verify/HMT35UU226VX",
      skills: ["Analytics"]
    },
    {
      title: "Machine Learning Specialization | DeepLearning.AI & Stanford University",
      organization: "DeepLearning.AI",
      issued: "Feb 2024",
      credentialId: "4CB256KQWWLD",
      url: "https://www.coursera.org/account/accomplishments/specialization/4CB256KQWWLD",
      skills: [
        "Scikit-Learn",
        "Linear Regression",
        "Classification",
        "Neural Networks",
        "XGBoost",
        "TensorFlow",
        "Supervised Learning",
        "Logistic Regression",
        "Decision Trees",
        "Data Manipulation"
      ]
    },
    {
      title: "Python for Data Science and Machine Learning Bootcamp",
      organization: "Udemy",
      issued: "Aug 2023",
      credentialId: "UC-80775c45-5744-4656-8272-624caf26c2be",
      url: "https://www.udemy.com/certificate/UC-80775c45-5744-4656-8272-624caf26c2be/",
      skills: [
        "Scikit-Learn",
        "Python (Programming Language)",
        "Machine Learning",
        "TensorFlow",
        "Seaborn",
        "Data Science"
      ]
    },
    {
      title: "A Crash Course in Data Science",
      organization: "Coursera",
      issued: "Jun 2023",
      credentialId: "VZ2NUELZDRRG",
      url: "https://www.coursera.org/account/accomplishments/certificate/VZ2NUELZDRRG",
      skills: ["Machine Learning", "Statistical Data Analysis", "Data Science"]
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
              Document Management Consultant
            </p>
          </div>

          {/* Profile Section */}
          <div className="bg-card rounded-lg p-8 mb-8 border border-border">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {imgOk ? (
                <Image
                  src="/profile.jpg"
                  alt="William profile photo"
                  width={128}
                  height={128}
                  priority
                  onError={() => setImgOk(false)}
                  className="w-32 h-32 rounded-full object-cover"
                />
              ) : (
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl font-bold">
                  W
                </div>
              )}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">William</h2>
                <p className="text-gray-400 mb-4">
                  Document Management Consultant 
                </p>
                <p className="text-gray-300 mb-4">
                  I’m a Civil Engineer with a strong interest in data, automation, and problem-solving. 
                  Currently working as a Document Management Consultant at Capgemini Engineering, I focus 
                  on organizing and standardizing technical documentation.
                  Alongside my main responsibilities, I create tools and dashboards to streamline tasks—
                  such as Python scripts for data cleaning and document classification using NLP, and Power BI 
                  reports to improve visibility and decision-making.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="mailto:william_dieter@icloud.com" className="text-gray-400 hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/BillDFrank" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/william-dieter-f-475475104/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
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

          {/* Certificates */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6">Certificates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center mb-3">
                    <Award className="w-5 h-5 text-yellow-400 mr-2" />
                    <h4 className="font-semibold">{cert.title}</h4>
                  </div>
                  <p className="text-sm text-primary mb-2">{cert.organization}</p>
                  <div className="text-xs text-gray-400 mb-2">Issued {cert.issued}</div>
                  <div className="text-xs text-gray-400 mb-3">Credential ID: {cert.credentialId}</div>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 mb-4"
                  >
                    View credential
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  {cert.skills?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-secondary-gray text-[11px] rounded-full text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-card rounded-lg p-8 border border-border text-center">
            <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
            <p className="text-gray-400 mb-6">
              I&apos;m always interested in discussing opportunities in data analytics,
              data science, or business intelligence projects.
            </p>
            <a
              href="mailto:william_dieter@icloud.com"
              className="inline-flex items-center px-6 py-3 text-white rounded-lg hover:bg-primary/90 transition-colors"
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