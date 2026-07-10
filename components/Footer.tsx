import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Mikan Project Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;