import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ToolCard from './components/ToolCard';
import { TOOLS_DATA, QUICK_LINKS } from './constants';

const App: React.FC = () => {
  const INITIAL_VISIBLE_TOOLS = 4;
  const [visibleToolCount, setVisibleToolCount] = useState(INITIAL_VISIBLE_TOOLS);

  const visibleTools = TOOLS_DATA.slice(0, visibleToolCount);
  const allToolsShown = visibleToolCount >= TOOLS_DATA.length;

  const handleToggleTools = () => {
    if (allToolsShown) {
      setVisibleToolCount(INITIAL_VISIBLE_TOOLS);
    } else {
      setVisibleToolCount(prevCount => Math.min(prevCount + 2, TOOLS_DATA.length));
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-light-bg text-dark-text">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-dark-text tracking-tight">
              ÇAKÜ DİJİTAL ATÖLYE
            </h1>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {visibleTools.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} isFirst={index === 0} />
            ))}
            {TOOLS_DATA.length > INITIAL_VISIBLE_TOOLS && (
                <div className="sm:col-span-2 flex justify-center mt-6">
                    <button
                        onClick={handleToggleTools}
                        className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-light-bg"
                        aria-expanded={allToolsShown}
                    >
                        {allToolsShown ? 'Daha Az Göster' : 'Daha Fazla Araç...'}
                    </button>
                </div>
            )}
          </div>

          <div className="mt-16 pt-10 border-t border-gray-200">
            <div className="flex justify-end items-start gap-12 sm:gap-20">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-center group transition-transform transform hover:-translate-y-1"
                >
                  <link.icon className="w-8 h-8 text-accent group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium text-accent group-hover:text-dark-text transition-colors">{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;