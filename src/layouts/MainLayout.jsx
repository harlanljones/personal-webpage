import React from 'react';
import Navigation from '../components/Navigation';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        {children}
      </main>
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Harlan Jones. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;