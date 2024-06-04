'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import { API_BASE_URL } from '@/config';
import { IconGitHub, IconSpinner } from '@/components/ui/icons'

export default function StartPageComponent() {
  const [githubUrl, setGithubUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Initialize the router

  const handleOptionClick = (url: string) => {
    setGithubUrl(url);
  };

  const handleConnectClick = () => {
    setLoading(true);
    console.log("githubUrl", githubUrl);
    fetch(`${API_BASE_URL}/get_git_data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ github_url: githubUrl, email: 'golu123@gmail.com' }), // Correctly stringified JSON object
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          // Stop loading and show chat page
          console.log("Response payload:", data);
          Object.keys(data).forEach(key => {
            console.log(`${key}: ${data[key]}`);
          });
          setLoading(false);
          // Redirect to chat page with the key from the response
          const chatKey = data.key; // Assuming 'key' is the key in the response
          router.push(`/chat/${chatKey}`);
        }).catch(error => {
          console.error('Error parsing JSON:', error);
          setLoading(false);
        });
      } else {
        throw new Error('Failed to connect');
      }
    }).catch((error) => {
      console.error('Error calling API:', error);
      setLoading(false);
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-7">Enter GitHub URL</h1>
        <input
          type="text"
          value={githubUrl}
          onChange={(e) => setGithubUrl(e.target.value)}
          placeholder="https://github.com/example"
          className="bg-gray-200 bg-opacity-50 px-3 py-2 w-full mb-7 placeholder-gray-100"
        />
        <button onClick={handleConnectClick} className="bg-blue-500 hover:bg-blue-900 text-white text-3xl font-bold py-3 px-6 rounded-lg text-white font-bold border border-yellow-300 shadow-md">
          Connect Chatbot to Repo
        </button>
        {loading && <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 flex items-center justify-center">
        
          <h2 className="text-white text-3xl">Going through Code Files...</h2>
          <IconSpinner className="mr-2 animate-spin" />
        </div>}
      </div>
    </div>
  );
}
