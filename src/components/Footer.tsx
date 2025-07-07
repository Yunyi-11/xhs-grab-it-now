
import React from 'react';
import { Heart, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-gray-600">Made with</span>
              <Heart className="w-5 h-5 text-red-500 fill-current" />
              <span className="text-gray-600">for creators</span>
            </div>
            
            <div className="flex items-center justify-center space-x-6 mb-6">
              <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            <div className="text-sm text-gray-500 space-y-2">
              <p>© 2024 小红书下载器. 仅供学习交流使用</p>
              <p>请尊重原创作者版权，合理使用下载内容</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
