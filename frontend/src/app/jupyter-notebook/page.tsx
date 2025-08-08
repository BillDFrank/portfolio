import React from 'react';
import JupyterViewer from '@/components/project/JupyterViewer';

const JupyterNotebookPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Jupyter Notebook Example</h1>
      <JupyterViewer file="/notebook.html" />
    </div>
  );
};

export default JupyterNotebookPage;