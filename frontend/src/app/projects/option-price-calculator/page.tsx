'use client';

import React, { useState } from 'react';

const EXTERNAL_URL = 'https://option-price-calculator.onrender.com/';

export default function OptionPriceCalculatorPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Option Price Calculator</h1>

      <p className="mb-4">
        This project is a web-based Option Price Calculator built with Flask and Materialize CSS. 
        It allows users to calculate the price of European call and put options using the Black-Scholes 
        model, as well as compute implied volatility or implied stock price given the other parameters. 
        The app also provides visualizations and the calculation of option Greeks.
      </p>
      <p className="mb-4">
        Embedded Flask app — this external app may take 50 seconds or more to load.
        If it does not appear, try opening it in a new tab.
      </p>

      <div className="mb-4 flex items-center gap-4">
        <a
          href={EXTERNAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Open the app in a new tab
        </a>
        <span className="text-sm text-gray-600">{iframeLoaded ? 'Loaded' : 'Loading...'}</span>
      </div>

      <div className="w-full h-[80vh] border rounded overflow-hidden">
        <iframe
          src={EXTERNAL_URL}
          title="Option Price Calculator"
          className="w-full h-full"
          onLoad={() => setIframeLoaded(true)}
          loading="lazy"
          sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
        />
      </div>

      <noscript className="mt-4 text-sm text-gray-600">
        JavaScript is required to embed the app. Open it directly:
        <a href={EXTERNAL_URL} target="_blank" rel="noopener noreferrer" className="underline ml-1">
          {EXTERNAL_URL}
        </a>
      </noscript>
    </main>
  );
}
