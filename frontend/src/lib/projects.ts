// Static projects data for GitHub Pages deployment
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  categories: string[];
  date: string;
  status: "completed" | "in-progress" | "planned";
  link?: string;
}

export const projectsData: Project[] = [
  {
    "id": "document-classifier",
    "title": "Document Classifier",
    "description": "Python-based system for document classification, clustering, and analysis. It provides tools for processing text data, training classifiers, performing clustering, detecting outliers, computing similarities, and generating visualizations. The project is modular and designed for easy extension, making it suitable for tasks like document categorization, search, and recommendation.",
    "technologies": ["Streamlit", "Scikit-learn", "Transformers", "Hugging Face", "PyTorch"],
    "githubUrl": "https://github.com/BillDFrank/document-classifier",
    "categories": ["Transformers", "Web App", "Classifier"],
    "date": "2025-04-01",
    "status": "in-progress",
  },
  {
    "id": "option-price-calculator",
    "title": "Option Price Calculator",
    "description": "This project is a web-based Option Price Calculator built with Flask. It allows users to calculate the price of European call and put options using the Black-Scholes model, as well as compute implied volatility or implied stock price given the other parameters. The app also provides visualizations and the calculation of option Greeks.",
    "technologies": ["Plotly", "Flask", "Python"],
    "githubUrl": "https://github.com/BillDFrank/Option-Price-Calculator",
    "categories": ["Web App"],
    "date": "2025-02-01",
    "status": "completed",
    "link": "/projects/option-price-calculator",
  },
];
