import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PageLoader from './PageLoader';

type LayoutProps = {
  children: React.ReactNode;
  pageLoading?: boolean;
};

const Layout: React.FC<LayoutProps> = ({ children, pageLoading = false }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // 关闭移动菜单当路由变化时
  useEffect(() => {
    const handleRouteChange = () => setMobileMenuOpen(false);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <PageLoader pageLoading={pageLoading} />
      <header className="fixed top-0 left-0 w-full h-20 bg-white bg-opacity-90 backdrop-blur-md z-[9999] shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="text-xl font-bold">
            <Link href="/">Than Studio</Link>
          </div>
          
          {/* 移动端汉堡菜单按钮 */}
          <button 
            className="md:hidden flex flex-col space-y-1.5 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 touch-manipulation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={mobileMenuOpen}
          >
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          
          {/* 桌面端导航 */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation">
            <Link href="/work" className={`transition-all duration-200 font-medium px-3 py-2 rounded-lg ${currentPath.startsWith('/work') ? 'text-black bg-gray-100' : 'text-gray-600 hover:text-black hover:bg-gray-50'}`}>
              Work
            </Link>
            <Link href="/story" className={`transition-all duration-200 font-medium px-3 py-2 rounded-lg ${currentPath.startsWith('/story') ? 'text-black bg-gray-100' : 'text-gray-600 hover:text-black hover:bg-gray-50'}`}>
              Story
            </Link>
            <Link href="/contact" className={`transition-all duration-200 font-medium px-3 py-2 rounded-lg ${currentPath.startsWith('/contact') ? 'text-black bg-gray-100' : 'text-gray-600 hover:text-black hover:bg-gray-50'}`}>
              Contact
            </Link>
            <Link href="/store" className={`transition-all duration-200 font-medium px-3 py-2 rounded-lg ${currentPath.startsWith('/store') ? 'text-black bg-gray-100' : 'text-gray-600 hover:text-black hover:bg-gray-50'}`}>
              Store
            </Link>
          </nav>
        </div>
        
        {/* 移动端导航菜单 */}
        <div className={`md:hidden absolute w-full bg-white shadow-lg border-t transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <nav className="flex flex-col py-4 px-4 space-y-2" role="navigation">
            <Link 
              href="/work"
              className={`py-3 px-4 rounded-lg transition-all duration-200 touch-manipulation ${currentPath.startsWith('/work') ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50 active:bg-gray-100'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </Link>
            <Link 
              href="/story"
              className={`py-3 px-4 rounded-lg transition-all duration-200 touch-manipulation ${currentPath.startsWith('/story') ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50 active:bg-gray-100'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Story
            </Link>
            <Link 
              href="/contact"
              className={`py-3 px-4 rounded-lg transition-all duration-200 touch-manipulation ${currentPath.startsWith('/contact') ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50 active:bg-gray-100'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/store"
              className={`py-3 px-4 rounded-lg transition-all duration-200 touch-manipulation ${currentPath.startsWith('/store') ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50 active:bg-gray-100'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Store
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow pt-20">
        {children}
      </main>
      
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          {/* 主要内容区域 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* 联系信息 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">联系我们</h3>
              <div className="space-y-2 text-gray-300">
                <p>深圳市·宝安区</p>
                <p>unsaturated2025@gmail.com</p>
                <p>+86 180 9898 6553</p>
              </div>
            </div>
            
            {/* 社交媒体 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">关注我们</h3>
              <div className="space-y-2">
                <a href="https://www.xiaohongshu.com/user/profile/629e137b0000000021026e64?xsec_token=YB1EnAzViaXpCVcu24U7fqyOXU0rtmIJfiKNRCGQV9A3E=&xsec_source=app_share&xhsshare=CopyLink&appuid=629e137b0000000021026e64&apptime=1749779112&share_id=2f8fa3a9ebee403d927a640c278f8b35" 
                   className="block text-gray-300 hover:text-white transition-colors">
                  RedBook
                </a>
                <a href="https://x.com/ThanStudio2025" 
                   className="block text-gray-300 hover:text-white transition-colors">
                  Twitter
                </a>
              </div>
            </div>
            
            {/* 快速导航 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">快速导航</h3>
              <div className="space-y-2">
                <Link href="/work" className="block text-gray-300 hover:text-white transition-colors">
                  作品集
                </Link>
                <Link href="/story" className="block text-gray-300 hover:text-white transition-colors">
                  故事
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                  联系
                </Link>
                <Link href="/store" className="block text-gray-300 hover:text-white transition-colors">
                  商店
                </Link>
              </div>
            </div>
          </div>
            
          {/* 底部版权信息 */}
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Than Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;