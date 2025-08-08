'use client';

import React, { useEffect, useState } from 'react';
import '../../styles/notebook.css';

interface JupyterViewerProps {
  file: string;
}

const JupyterViewer: React.FC<JupyterViewerProps> = ({ file }) => {
  const [notebookHtml, setNotebookHtml] = useState('');

  useEffect(() => {
    const fetchNotebook = async () => {
      try {
        const response = await fetch(file);
        const html = await response.text();
        setNotebookHtml(html);
      } catch (error) {
        console.error('Error fetching notebook:', error);
        setNotebookHtml('<p>Error loading notebook.</p>');
      }
    };

    fetchNotebook();
  }, [file]);

  return <div className="notebook-container" dangerouslySetInnerHTML={{ __html: notebookHtml }} />;
};

export default JupyterViewer;