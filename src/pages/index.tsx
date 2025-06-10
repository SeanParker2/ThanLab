import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const basePath = router.basePath || '';
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div>
      {/* Hero Banner - 增强视觉效果和动画 */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* 背景几何装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-tr from-pink-400/15 to-orange-500/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* 主背景图片 */}
        <div 
          className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-40"
          style={{
            background: `linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${basePath}/images/home_hero_banner.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>
        
        {/* 内容区域 */}
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white px-4">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-center leading-tight">
              <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                追求永恒的
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2 bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
                设计价值
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl text-center mb-8 px-4 leading-relaxed text-gray-200">
              我们致力于创造具有持久价值的设计作品
              <br className="hidden sm:block" />
              <span className="text-blue-200">融合东方美学与现代设计理念</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <div className="group px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Link href="/work" className="flex items-center justify-center gap-2">
                  探索作品
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
              <div className="group px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300 text-center backdrop-blur-sm">
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  联系我们
                  <span className="group-hover:translate-x-1 transition-transform">✦</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* 滚动指示器 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm opacity-70">向下滚动</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 品牌简介 - 创意重新设计 */}
      <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* 背景装饰元素 */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 border border-gray-200 rounded-full opacity-30"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-blue-200 rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* 标题区域 */}
            <div className="text-center mb-16">
              <div className="inline-block">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 relative">
                  <span className="bg-gradient-to-r from-gray-800 via-black to-gray-800 bg-clip-text text-transparent">
                    关于 Than Studio
                  </span>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                </h2>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-8 max-w-4xl mx-auto leading-relaxed">
                Than Studio 是一家位于
                <span className="text-blue-600 font-medium">东京</span>
                的设计工作室
                <br className="hidden sm:block" />
                专注于品牌形象、空间设计和视觉创意
              </p>
            </div>
            
            {/* 服务卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">品牌形象</h3>
                  <p className="text-gray-600 leading-relaxed">为品牌打造独特识别符号与视觉系统，建立深入人心的品牌印象</p>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 text-blue-500">→</div>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">空间设计</h3>
                  <p className="text-gray-600 leading-relaxed">创造富有情感与功能的空间体验，让每个角落都诉说故事</p>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 text-purple-500">→</div>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-400"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">视觉创意</h3>
                  <p className="text-gray-600 leading-relaxed">以创新思维打造独特视觉语言，传达品牌核心价值</p>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 text-orange-500">→</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 底部装饰文字 */}
            <div className="text-center mt-16">
              <p className="text-sm text-gray-400 italic">
                "我们将东方美学与现代设计语言融合，为客户创造具有持久价值的设计作品"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 精选作品 - 创意网格布局 */}
      <section className="py-20 sm:py-24 md:py-32 bg-white relative">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* 标题区域 */}
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
                <span className="bg-gradient-to-r from-gray-800 via-black to-gray-800 bg-clip-text text-transparent">
                  精选作品
                </span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
            </div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              探索我们的创意世界，每一个作品都承载着独特的设计理念
            </p>
          </div>
          
          {/* 作品网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              { id: 1, title: '品牌视觉系统', category: '品牌设计', color: 'from-blue-500 to-cyan-500' },
              { id: 2, title: '现代空间美学', category: '空间设计', color: 'from-purple-500 to-pink-500' },
              { id: 3, title: '产品包装设计', category: '包装设计', color: 'from-orange-500 to-red-500' },
              { id: 4, title: '数字界面设计', category: 'UI/UX', color: 'from-green-500 to-teal-500' },
              { id: 5, title: '企业形象设计', category: '品牌设计', color: 'from-indigo-500 to-blue-500' },
              { id: 6, title: '艺术装置设计', category: '艺术创作', color: 'from-pink-500 to-rose-500' }
            ].map((work, index) => (
              <div key={work.id} className="group relative">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* 作品图片 */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${basePath}/images/home_work_${work.id}.png)`,
                      }}
                    ></div>
                    
                    {/* 渐变遮罩 */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${work.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                    
                    {/* 悬浮内容 */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <span className="text-sm font-medium mb-2 opacity-90">{work.category}</span>
                      <h3 className="text-xl font-bold mb-3">{work.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">查看详情</span>
                        <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                          <span className="text-xs">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 底部信息条 */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-800">{work.title}</h4>
                        <p className="text-sm text-gray-500">{work.category}</p>
                      </div>
                      <Link href={`/work/${work.id}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 查看更多按钮 */}
          <div className="text-center mt-16">
            <Link href="/work" className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-black text-white font-medium rounded-full hover:from-black hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span>查看更多作品</span>
              <div className="w-5 h-5 border border-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <span className="text-xs">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 最新动态 - 时间线设计 */}
      <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white relative">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-100 to-transparent rounded-full opacity-30 transform translate-x-1/2"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-100 to-transparent rounded-full opacity-30 transform -translate-x-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* 标题区域 */}
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
                <span className="bg-gradient-to-r from-gray-800 via-black to-gray-800 bg-clip-text text-transparent">
                  最新动态
                </span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
            </div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              关注我们的最新动态，了解设计趋势与创新思维
            </p>
          </div>
          
          {/* 动态时间线 */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* 时间线 */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 transform md:-translate-x-1/2"></div>
              
              {[
                {
                  id: 1,
                  title: '2024设计趋势发布',
                  description: '探索未来设计的无限可能，从极简主义到沉浸式体验，我们为您解读2024年最前沿的设计趋势。',
                  date: '2024年1月15日',
                  category: '趋势洞察',
                  color: 'from-blue-500 to-cyan-500',
                  position: 'left'
                },
                {
                  id: 2,
                  title: '获得国际设计大奖',
                  description: '我们的品牌视觉系统设计荣获Red Dot设计大奖，这是对我们创新能力和设计水准的认可。',
                  date: '2024年1月8日',
                  category: '荣誉奖项',
                  color: 'from-purple-500 to-pink-500',
                  position: 'right'
                },
                {
                  id: 3,
                  title: '新工作室正式启用',
                  description: '全新的创意空间正式投入使用，配备最先进的设计设备，为团队提供更好的创作环境。',
                  date: '2024年1月1日',
                  category: '公司动态',
                  color: 'from-orange-500 to-red-500',
                  position: 'left'
                }
              ].map((news, index) => (
                <div key={news.id} className={`relative flex items-center mb-12 md:mb-16 ${news.position === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  {/* 时间线节点 */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-blue-400 rounded-full transform md:-translate-x-1/2 z-10"></div>
                  
                  {/* 内容卡片 */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${news.position === 'right' ? 'md:mr-auto md:ml-8' : 'md:ml-auto md:mr-8'}`}>
                    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                      {/* 图片区域 */}
                      <div className="relative h-48 overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                          style={{
                            backgroundImage: `url(${basePath}/images/news_${news.id}.png)`,
                          }}
                        ></div>
                        <div className={`absolute inset-0 bg-gradient-to-t ${news.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                        
                        {/* 分类标签 */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-800 rounded-full">
                            {news.category}
                          </span>
                        </div>
                      </div>
                      
                      {/* 内容区域 */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-500">{news.date}</span>
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                            <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                          {news.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {news.description}
                        </p>
                        
                        {/* 阅读更多 */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                            <span>阅读更多</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 查看更多动态 */}
          <div className="text-center mt-16">
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span>查看更多动态</span>
              <div className="w-5 h-5 border border-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <span className="text-xs">→</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* 团队成员 - 现代卡片设计 */}
      <section className="py-20 sm:py-24 md:py-32 bg-white relative">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-40 transform -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-pink-100 to-orange-100 rounded-full opacity-40 transform translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* 标题区域 */}
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
                <span className="bg-gradient-to-r from-gray-800 via-black to-gray-800 bg-clip-text text-transparent">
                  团队成员
                </span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            </div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              汇聚创意精英，用专业与热情创造非凡设计
            </p>
          </div>
          
          {/* 团队网格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              { 
                name: '田中太郎', 
                role: '创意总监', 
                image: 'home_teammate_1.png',
                description: '拥有15年设计经验，专注于品牌视觉系统设计',
                color: 'from-blue-500 to-cyan-500',
                social: { twitter: '#', linkedin: '#', behance: '#' }
              },
              { 
                name: '佐藤花子', 
                role: '设计师', 
                image: 'home_teammate_2.png',
                description: '擅长用户体验设计，致力于创造直观的交互体验',
                color: 'from-purple-500 to-pink-500',
                social: { twitter: '#', linkedin: '#', behance: '#' }
              },
              { 
                name: '山田次郎', 
                role: '项目经理', 
                image: 'home_teammate_3.png',
                description: '项目管理专家，确保每个项目的高质量交付',
                color: 'from-green-500 to-teal-500',
                social: { twitter: '#', linkedin: '#', behance: '#' }
              },
              { 
                name: '鈴木美咲', 
                role: '视觉设计师', 
                image: 'home_teammate_4.png',
                description: '视觉传达专家，擅长将创意转化为视觉语言',
                color: 'from-orange-500 to-red-500',
                social: { twitter: '#', linkedin: '#', behance: '#' }
              }
            ].map((member, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-4">
                  {/* 头像区域 */}
                  <div className="relative p-8 pb-4">
                    <div className="relative mx-auto w-32 h-32 mb-6">
                      {/* 背景装饰圆环 */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 transform group-hover:scale-110`}></div>
                      
                      {/* 头像 */}
                      <div 
                        className="relative w-full h-full bg-cover bg-center rounded-full border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-105"
                        style={{
                          backgroundImage: `url(${basePath}/images/${member.image})`,
                        }}
                      ></div>
                      
                      {/* 在线状态指示器 */}
                      <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
                    </div>
                    
                    {/* 基本信息 */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-3`}>
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed px-2">
                        {member.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* 社交媒体链接 */}
                  <div className="px-8 pb-8">
                    <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                      {Object.entries(member.social).map(([platform, link]) => (
                        <a 
                          key={platform}
                          href={link}
                          className="w-8 h-8 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        >
                          <svg className="w-4 h-4 text-gray-600 hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            {platform === 'twitter' && (
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            )}
                            {platform === 'linkedin' && (
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            )}
                            {platform === 'behance' && (
                              <path d="M7.003 5.324c.994 0 1.794.2 2.4.6.606.4.91 1.026.91 1.878 0 .852-.21 1.478-.628 1.878-.418.4-1.004.6-1.758.6H4.915V5.324h2.088zm-2.088 9.533h2.532c.994 0 1.794.2 2.4.6.606.4.91 1.026.91 1.878 0 .852-.21 1.478-.628 1.878-.418.4-1.004.6-1.758.6H4.915v-4.956zm7.025-1.878c0-1.878.628-3.356 1.884-4.434C15.06 7.567 16.54 7.028 18.243 7.028c1.703 0 3.183.539 4.439 1.617 1.256 1.078 1.884 2.556 1.884 4.434 0 1.878-.628 3.356-1.884 4.434-1.256 1.078-2.736 1.617-4.439 1.617-1.703 0-3.183-.539-4.439-1.617-1.256-1.078-1.884-2.556-1.884-4.434zm2.4 0c0 1.026.21 1.878.628 2.556.418.678 1.004 1.017 1.758 1.017.754 0 1.34-.339 1.758-1.017.418-.678.628-1.53.628-2.556 0-1.026-.21-1.878-.628-2.556-.418-.678-1.004-1.017-1.758-1.017-.754 0-1.34.339-1.758 1.017-.418.678-.628 1.53-.628 2.556z"/>
                            )}
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  {/* 悬浮效果装饰 */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${member.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 加入我们 */}
          <div className="text-center mt-16">
            <div className="inline-block bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">加入我们的团队</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                我们正在寻找有才华的设计师加入我们的创意团队
              </p>
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span>查看职位</span>
                <div className="w-5 h-5 border border-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <span className="text-xs">→</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}