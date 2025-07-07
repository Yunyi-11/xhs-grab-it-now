
import React from 'react';
import { Image, Video, Zap, Shield, Clock, Star } from 'lucide-react';
import Header from '@/components/Header';
import DownloadForm from '@/components/DownloadForm';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';

const Index = () => {
  const features = [
    {
      icon: Image,
      title: '高清图片',
      description: '下载原画质图片，无压缩无水印，保持最佳视觉效果',
      gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500'
    },
    {
      icon: Video,
      title: '完整视频',
      description: '支持下载完整视频内容，保留原始音频和画质',
      gradient: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: '极速下载',
      description: '采用高速服务器，确保下载速度快速稳定',
      gradient: 'bg-gradient-to-r from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: '安全可靠',
      description: '无需登录注册，保护您的隐私安全',
      gradient: 'bg-gradient-to-r from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: '24/7 可用',
      description: '全天候在线服务，随时随地使用',
      gradient: 'bg-gradient-to-r from-indigo-500 to-purple-500'
    },
    {
      icon: Star,
      title: '完全免费',
      description: '永久免费使用，无任何隐藏收费',
      gradient: 'bg-gradient-to-r from-red-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-red-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-red-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Header />
        
        {/* 主要内容区域 */}
        <main className="px-4">
          {/* Hero Section */}
          <section className="max-w-6xl mx-auto py-20 text-center">
            <div className="mb-12">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-6 leading-tight">
                小红书内容
                <br />
                <span className="text-4xl md:text-6xl">无水印下载</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                一键下载小红书高清图片和视频，去除水印，保持原画质
                <br />
                简单快捷，完全免费
              </p>
            </div>
            
            <DownloadForm />
          </section>

          {/* Features Section */}
          <section id="features" className="max-w-6xl mx-auto py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                为什么选择我们？
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                专业的小红书内容下载工具，为创作者和用户提供最佳体验
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  gradient={feature.gradient}
                />
              ))}
            </div>
          </section>

          {/* How to Use Section */}
          <section id="how-to-use" className="max-w-4xl mx-auto py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                使用方法
              </h2>
              <p className="text-xl text-gray-600">
                三步即可完成下载，简单易用
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">复制链接</h3>
                <p className="text-gray-600">在小红书APP中复制想要下载的内容链接</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">粘贴链接</h3>
                <p className="text-gray-600">将链接粘贴到上方的输入框中</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">立即下载</h3>
                <p className="text-gray-600">点击下载按钮，获取无水印高清内容</p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
