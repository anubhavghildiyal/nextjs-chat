// components/LandingPage.js


export function LandingPage() {
    return (
      <div className="min-h-screen bg-black-100 flex items-center justify-center  w-full ">
        <div className="max-w-5xl mx-auto py-3 sm:px-6 lg:px-8 ">
          <div className="text-center ">
            <h1 className="text-7xl  text-yellow-900 sm:text-5xl " style={{ color: '#14eb9b' }}>Welcome to Git Curious</h1>
            <p className="mt-4 text-lg leading-9 text-blue-700  px-6" style={{ color: '#b3f9f4' }}>A platform that helps you dive deeper into your Git repositories. <br/>Be curious, and let us do the rest. </p>
            <div className="mt-8">
              <a href="login" className="inline-block bg-blue-500 bg-opacity-50 hover:bg-blue-700  text-white font-bold py-3 px-6 rounded-lg">Get Started</a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-0">
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0">
                {/* <img className="h-12 w-12" src="/public/chat-icon.svg" alt="BOBOB" /> */}
                
                
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-yellow-400 text-center">Issue Chat</h3>
                <p className="mt-2 text-base text-white text-opacity-85 text-center">Discuss and resolve issues directly from your repository.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
                {/* <img className="h-12 w-12" src="/feature-2.svg" alt="Feature 2" /> */}
              <div className="flex-shrink-0">
                
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-yellow-400 text-center">Code Insights</h3>
                <p className="mt-2 text-base text-white text-opacity-85 text-center">Understand your codebase better with in-depth analysis.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0">
                {/* <img className="h-12 w-12" src="/feature-3.svg" alt="Feature 3" /> */}
                
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-yellow-400 text-center">Collaboration</h3>
                <p className="mt-2 text-base text-white text-opacity-85 text-center">Collaborate with your team members in real-time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  
  