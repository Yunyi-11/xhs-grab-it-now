
import React from 'react';
import { Download } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-6 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
            <Download className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            小红书下载器
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-700 hover:text-red-500 transition-colors">
            功能特色
          </a>
          <a href="#how-to-use" className="text-gray-700 hover:text-red-500 transition-colors">
            使用说明
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
