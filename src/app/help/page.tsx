"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use the correct import for Next.js routing
import Hindi from "@/app/help/hindi/page";
import Kannada from "@/app/help/kannada/page"; // Rename the import to start with a capital letter
import English from "@/app/help/english/page";
import LanguageSelector from "@/app/help/languageSelector";

const HelpPage: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const router = useRouter(); // Initialize the router

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    router.push(`/help/${language}`);
     // Navigate to the language-specific page
  };
  const renderHelpContent = () => {
    switch (selectedLanguage) {
      case 'hindi':
        return <Hindi />;
      case 'kannada':
        return <Kannada/>;
      case 'english':
        return <English />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen p-4">
      <header className="py-4 border-b">
        <h1 className="text-2xl font-bold">Help Page</h1>
      </header>
      <main className="py-8">
        <LanguageSelector onLanguageSelect={handleLanguageSelect} />
        <div className="mt-8">
          {renderHelpContent()}
        </div>
      </main>
    </div>
  );
};

export default HelpPage;