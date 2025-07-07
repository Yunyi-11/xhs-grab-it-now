
import React, { useState } from 'react';
import { Download, Link, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const DownloadForm = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    // 模拟下载过程
    setTimeout(() => {
      setIsLoading(false);
      // 这里将来会实现真实的下载功能
      console.log('下载链接:', url);
    }, 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="backdrop-blur-lg bg-white/20 rounded-3xl p-8 shadow-2xl border border-white/30">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl mb-4 shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            无水印下载
          </h2>
          <p className="text-gray-600">
            粘贴小红书链接，一键下载高清无水印内容
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <Link className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="url"
              placeholder="请粘贴小红书链接..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="pl-12 h-14 text-lg rounded-2xl border-2 border-white/30 bg-white/50 backdrop-blur-sm focus:border-red-400 focus:ring-0"
            />
          </div>
          
          <Button
            onClick={handleDownload}
            disabled={!url || isLoading}
            className="w-full h-14 text-lg font-semibold rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>处理中...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <Download className="w-6 h-6" />
                <span>立即下载</span>
              </div>
            )}
          </Button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            支持图片和视频下载 • 完全免费使用 • 无需注册
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadForm;
