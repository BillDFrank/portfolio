"use client";

import { useState } from "react";
import { Search, ExternalLink, Download, Calendar, Award } from "lucide-react";

interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  journal: string;
  year: number;
  doi?: string;
  arxivUrl?: string;
  pdfUrl?: string;
  githubUrl?: string;
  tags: string[];
  citations: number;
  impactFactor: number;
}

const researchPapers: ResearchPaper[] = [
  {
    id: "transformer-vision-2024",
    title: "Efficient Vision Transformers for Real-time Object Detection",
    authors: ["William", "Dr. Jane Smith", "Prof. John Doe"],
    abstract: "We present a novel approach to vision transformers that significantly reduces computational complexity while maintaining state-of-the-art accuracy on object detection tasks. Our method introduces a hierarchical attention mechanism that adapts to image content, reducing inference time by 40% compared to standard ViT models.",
    journal: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    year: 2024,
    doi: "10.1109/TPAMI.2024.12345678",
    arxivUrl: "https://arxiv.org/abs/2401.12345",
    pdfUrl: "/papers/transformer-vision-2024.pdf",
    githubUrl: "https://github.com/willi/efficient-vit",
    tags: ["Computer Vision", "Transformers", "Object Detection", "Efficiency"],
    citations: 45,
    impactFactor: 24.3,
  },
  {
    id: "federated-learning-2023",
    title: "Privacy-Preserving Federated Learning with Differential Privacy",
    authors: ["William", "Dr. Alice Johnson", "Prof. Bob Wilson"],
    abstract: "This paper introduces a novel federated learning framework that incorporates differential privacy mechanisms to protect user data while maintaining model accuracy. We demonstrate the effectiveness of our approach on healthcare datasets, achieving competitive performance with strong privacy guarantees.",
    journal: "Nature Machine Intelligence",
    year: 2023,
    doi: "10.1038/s42256-023-00789-0",
    arxivUrl: "https://arxiv.org/abs/2305.67890",
    pdfUrl: "/papers/federated-learning-2023.pdf",
    githubUrl: "https://github.com/willi/federated-privacy",
    tags: ["Federated Learning", "Privacy", "Differential Privacy", "Healthcare"],
    citations: 78,
    impactFactor: 25.8,
  },
  {
    id: "time-series-forecasting-2023",
    title: "Attention-based Neural Networks for Multivariate Time Series Forecasting",
    authors: ["William", "Dr. Sarah Chen", "Prof. Michael Brown"],
    abstract: "We propose an attention-based neural network architecture specifically designed for multivariate time series forecasting. Our model captures complex temporal dependencies and achieves superior performance on benchmark datasets compared to existing methods.",
    journal: "Journal of Machine Learning Research",
    year: 2023,
    doi: "10.48550/arXiv.2308.12345",
    arxivUrl: "https://arxiv.org/abs/2308.12345",
    pdfUrl: "/papers/time-series-2023.pdf",
    githubUrl: "https://github.com/willi/time-series-attention",
    tags: ["Time Series", "Attention Mechanisms", "Forecasting", "Neural Networks"],
    citations: 92,
    impactFactor: 6.0,
  },
  {
    id: "reinforcement-learning-2022",
    title: "Deep Reinforcement Learning for Autonomous Navigation",
    authors: ["William", "Dr. David Lee", "Prof. Emily Taylor"],
    abstract: "This work presents a deep reinforcement learning approach for autonomous navigation in complex environments. We introduce a novel reward shaping technique and demonstrate successful navigation in both simulated and real-world scenarios.",
    journal: "Robotics and Autonomous Systems",
    year: 2022,
    doi: "10.1016/j.robot.2022.104123",
    arxivUrl: "https://arxiv.org/abs/2209.45678",
    pdfUrl: "/papers/rl-navigation-2022.pdf",
    githubUrl: "https://github.com/willi/rl-navigation",
    tags: ["Reinforcement Learning", "Robotics", "Navigation", "Deep Learning"],
    citations: 156,
    impactFactor: 4.3,
  },
];

const researchStats = {
  totalPapers: 4,
  totalCitations: 371,
  hIndex: 4,
  avgImpactFactor: 15.1,
};

export default function ResearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const years = ["all", ...Array.from(new Set(researchPapers.map(p => p.year.toString())))].sort((a, b) => b.localeCompare(a));
  const allTags = ["all", ...Array.from(new Set(researchPapers.flatMap(p => p.tags)))];

  const filteredPapers = researchPapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesYear = selectedYear === "all" || paper.year.toString() === selectedYear;
    const matchesTag = selectedTag === "all" || paper.tags.includes(selectedTag);
    
    return matchesSearch && matchesYear && matchesTag;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Research</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring cutting-edge research in machine learning, computer vision, and artificial intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{researchStats.totalPapers}</div>
            <div className="text-gray-600">Publications</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{researchStats.totalCitations}</div>
            <div className="text-gray-600">Citations</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{researchStats.hIndex}</div>
            <div className="text-gray-600">h-index</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{researchStats.avgImpactFactor}</div>
            <div className="text-gray-600">Avg Impact Factor</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search papers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tag</label>
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {allTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {filteredPapers.map((paper) => (
            <div key={paper.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{paper.title}</h3>
                  <p className="text-gray-600 mb-2">{paper.authors.join(", ")}</p>
                  <p className="text-sm text-gray-500">
                    <Calendar className="inline w-4 h-4 mr-1" />
                    {paper.year} • {paper.journal}
                  </p>
                </div>
                <div className="flex space-x-2">
                  {paper.doi && (
                    <a
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {paper.pdfUrl && (
                    <a
                      href={paper.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800"
                    >
                      <Download className="w-5 h-5" />
                    </a>
                  )}
                  {paper.githubUrl && (
                    <a
                      href={paper.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{paper.abstract}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    {paper.citations} citations
                  </span>
                  <span>IF: {paper.impactFactor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPapers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No papers found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
