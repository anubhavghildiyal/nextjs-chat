'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GithubUrlContextProps {
  githubUrl: string;
  setGithubUrl: (url: string) => void;
}

const GithubUrlContext = createContext<GithubUrlContextProps | undefined>(undefined);

export const GithubUrlProvider = ({ children }: { children: ReactNode }) => {
  const [githubUrl, setGithubUrl] = useState<string>('');

  return (
    <GithubUrlContext.Provider value={{ githubUrl, setGithubUrl }}>
      {children}
    </GithubUrlContext.Provider>
  );
};

export const useGithubUrl = () => {
  const context = useContext(GithubUrlContext);
  if (!context) {
    throw new Error('useGithubUrl must be used within a GithubUrlProvider');
  }
  return context;
};
