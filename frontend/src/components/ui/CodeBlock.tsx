'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  language: string;
  value: string;
}

export const CodeBlock = ({ language, value }: CodeBlockProps) => {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} customStyle={{
        background: '#0f172a',
        border: '1px solid #334155',
        borderRadius: '0.375rem',
    }}>
      {value}
    </SyntaxHighlighter>
  );
};