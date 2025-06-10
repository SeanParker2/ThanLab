import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Work() {
  const router = useRouter();
  const basePath = router.basePath || '';
  const [activeFilter, setActiveFilter] = useState('全部作品');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const filters = [
    { name: '全部作品', count: 12, color: 'from-gray-600 to-gray-800' },
    { name: '品牌形象', count: 3, color: 'from-blue-500 to-cyan-500' },
    { name: '空间设计', count: 2, color: 'from-purple-500 to-pink-500' },
    { name: '产品', count: 2, color: 'from-green-500 to-teal-500' },
    { name: '视觉设计', count: 2, color: 'from-orange-500 to-red-500' },
    { name: 'VI设计', count: 2, color: 'from-indigo-500 to-blue-500' },
    { name: '包装设计', count: 1, color: 'from-pink-500 to-rose-500' }
  ];

  const workItems = [
    { 
      id: 1, 
      image: `${basePath}/images/work-2.png`, 
      category: '品牌形象', 
      title: '品牌视觉系统设计',
      description: '为现代科技公司打造的完整品牌视觉识别系统',
      year: '2024',
      client: 'Tech Innovation Co.',
      tags: ['品牌设计', 'VI系统', '视觉识别']
    },
    { 
      id: 2, 
      image: `${basePath}/images/work-3.png`, 
      category: '空间设计', 
      title: '现代办公空间设计',
      description: '融合自然元素的开放式办公环境设计',
      year: '2024',
      client: 'Creative Agency',
      tags: ['空间设计', '办公环境', '现代风格']
    },
    { 
      id: 3, 
      image: `${basePath}/images/work-4.png`, 
      category: '产品', 
      title: '智能家居产品设计',
      description: '简约美学与智能科技的完美结合',
      year: '2023',
      client: 'Smart Home Ltd.',
      tags: ['产品设计', '智能家居', '用户体验']
    },
    { 
      id: 4, 
      image: `${basePath}/images/work-5.png`, 
      category: '视觉设计', 
      title: '数字艺术展览设计',
      description: '沉浸式数字艺术体验空间视觉设计',
      year: '2023',
      client: 'Digital Art Museum',
      tags: ['视觉设计', '数字艺术', '展览设计']
    },
    { 
      id: 5, 
      image: `${basePath}/images/work-6.png`, 
      category: 'VI设计', 
      title: '餐饮品牌VI设计',
      description: '传统与现代融合的餐饮品牌形象设计',
      year: '2023',
      client: 'Fusion Restaurant',
      tags: ['VI设计', '餐饮品牌', '文化融合']
    },
    { 
      id: 6, 
      image: `${basePath}/images/work-7.png`, 
      category: '包装设计', 
      title: '有机护肤品包装',
      description: '环保理念与美学设计的完美诠释',
      year: '2022',
      client: 'Organic Beauty',
      tags: ['包装设计', '环保理念', '护肤品']
    },
  ];

  const filteredWorks = activeFilter === '全部作品' 
    ? workItems 
    : workItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* 英雄区域 - 现代化设计 */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-100 to-transparent rounded-full opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-100 to-transparent rounded-full opacity-30 transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* 主标题 */}
          <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6">
              <span className="bg-gradient-to-r from-gray-800 via-black to-gray-800 bg-clip-text text-transparent">
                我们的作品
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              每一个项目都是创意与技术的完美融合，展现设计的无限可能
            </p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          
          {/* 统计数据 */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
              <div className="text-gray-600">完成项目</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">30+</div>
              <div className="text-gray-600">合作客户</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">8</div>
              <div className="text-gray-600">设计领域</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">95%</div>
              <div className="text-gray-600">客户满意度</div>
            </div>
          </div>
          
          {/* 现代化筛选器 */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* 移动端筛选器 */}
            <div className="md:hidden mb-8 px-4">
              <select 
                className="w-full max-w-xs mx-auto block px-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
              >
                {filters.map((filter) => (
                  <option key={filter.name} value={filter.name}>
                    {filter.name} ({filter.count})
                  </option>
                ))}
              </select>
            </div>
            
            {/* 桌面端筛选器 */}
            <div className="hidden md:flex flex-wrap justify-center gap-4">
              {filters.map((filter, index) => (
                <button
                  key={filter.name}
                  className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 ${
                    activeFilter === filter.name 
                      ? 'bg-white text-gray-800 shadow-lg scale-105' 
                      : 'bg-white/70 text-gray-600 hover:bg-white hover:shadow-md'
                  }`}
                  onClick={() => setActiveFilter(filter.name)}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <span className="relative z-10">
                    {filter.name}
                    <span className="ml-2 text-sm opacity-70">({filter.count})</span>
                  </span>
                  {activeFilter === filter.name && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${filter.color} opacity-10 rounded-full`}></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 作品展示区域 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredWorks.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500">没有找到与"{activeFilter}"相关的作品</p>
            </div>
          ) : (
            <>
              {/* 作品网格 */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredWorks.map((work, index) => (
                  <Link 
                    key={index} 
                    href={`/work/${work.title.replace(/\s+/g, '-').toLowerCase()}`}
                    className={`group block transform transition-all duration-700 hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                    style={{
                      animationDelay: `${index * 150}ms`
                    }}
                  >
                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                      {/* 图片容器 */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-110 transition-transform duration-700"
                          style={{
                            background: `url(${work.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        ></div>
                        
                        {/* 悬浮遮罩 */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        
                        {/* 分类标签 */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium rounded-full">
                            {work.category}
                          </span>
                        </div>
                        
                        {/* 年份标签 */}
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                            {work.year}
                          </span>
                        </div>
                        
                        {/* 悬浮信息 */}
                        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="text-white">
                            <p className="text-sm mb-2 line-clamp-2">{work.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs opacity-80">客户: {work.client}</span>
                              <div className="flex items-center text-sm">
                                <span>查看详情</span>
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* 内容区域 */}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {work.title}
                        </h3>
                        
                        {/* 标签 */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {work.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        {/* 底部信息 */}
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{work.client}</span>
                          <span>{work.year}</span>
                        </div>
                      </div>
                      
                      {/* 装饰元素 */}
                      <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-150"></div>
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* 加载更多按钮 */}
              <div className="text-center mt-16">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-gray-800 to-black text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                  <span className="relative z-10">加载更多作品</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}