import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Story() {
  const router = useRouter();
  const basePath = router.basePath || '';
  const [activeTab, setActiveTab] = useState('关于我们');
  const [isVisible, setIsVisible] = useState(false);
  
  const tabs = ['关于我们', '发展历程', '核心优势', '团队文化'];

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      {/* 英雄区域 */}
      <section className="relative pt-20 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full opacity-20 transform -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-blue-200 to-indigo-200 rounded-full opacity-20 transform translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-15 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light mb-8">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                我们的故事
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              从创意的火花到设计的实现，Than Studio 始终致力于为客户创造独特而有意义的设计体验
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          
          {/* 核心价值观 */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">创新思维</h3>
              <p className="text-gray-600">突破传统界限，探索设计的无限可能</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">用心服务</h3>
              <p className="text-gray-600">以客户需求为中心，提供贴心专业的服务</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">高效执行</h3>
              <p className="text-gray-600">快速响应，精准执行，确保项目完美交付</p>
            </div>
          </div>
        </div>
      </section>

      {/* 现代化导航栏 */}
      <section className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center py-6">
            <div className="flex bg-gray-50 rounded-full p-1">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  className={`relative px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeTab === tab
                      ? 'text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <span className="relative z-10">{tab}</span>
                  {activeTab === tab && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 关于我们 - 调整为自适应布局和等比例图片 */}
      <section 
        className={`py-16 bg-gradient-to-b from-white to-gray-50 ${activeTab !== '关于我们' ? 'hidden' : ''}`}
        id="关于我们"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                <div>
                  <h2 className="text-4xl sm:text-5xl font-light mb-6">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      关于 Than Studio
                    </span>
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mb-8"></div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Than Studio 最早成立于2015年，是一家位于深圳的设计工作室。我们专注于品牌形象、空间设计、产品设计和视觉设计等领域，为客户提供全方位的设计解决方案。
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    我们的设计理念源于对中华传统美学的理解和现代设计语言的融合，追求简约而不简单的设计表达，注重细节和用户体验。
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Than Studio 团队由来自不同文化背景的设计师组成，这使我们能够从多元视角思考问题，为客户创造独特而有价值的设计作品。
                  </p>
                </div>
                
                {/* 特色亮点 */}
                <div className="grid grid-cols-2 gap-6 mt-12">
                  <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">9+</div>
                    <div className="text-gray-600">年专业经验</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                    <div className="text-gray-600">成功案例</div>
                  </div>
                </div>
              </div>
              
              <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                <div className="relative">
                  <div 
                    className="w-full aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden"
                    style={{
                      background: `url(${basePath}/images/story-2.png)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                  {/* 装饰元素 */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-full opacity-15"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程 - 现代化设计 */}
      <section 
        className={`py-16 bg-gradient-to-b from-gray-50 to-white ${activeTab !== '发展历程' ? 'hidden' : ''}`}
        id="发展历程"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h2 className="text-4xl sm:text-5xl font-light mb-6">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  发展历程
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                从初创到成长，每一步都见证着我们的专业与创新
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full mt-6"></div>
            </div>
            
            {/* 现代化时间线 */}
            <div className="relative">
              {/* 桌面端时间线 */}
              <div className="hidden lg:block">
                <div className="relative">
                  {/* 主时间线 */}
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200 transform -translate-y-1/2 rounded-full"></div>
                  
                  <div className="grid grid-cols-5 gap-8">
                    {[
                      { year: '2015', title: '工作室成立', desc: '在深圳成立Than Studio，开启设计之旅', color: 'from-blue-500 to-indigo-500' },
                      { year: '2019', title: '团队扩张', desc: '团队成员增至10人，业务快速发展', color: 'from-indigo-500 to-purple-500' },
                      { year: '2020', title: '业务拓展', desc: '开始国际项目合作，服务全球客户', color: 'from-purple-500 to-pink-500' },
                      { year: '2021', title: '获得认可', desc: '荣获多项设计大奖，行业地位确立', color: 'from-pink-500 to-red-500' },
                      { year: '2023', title: '持续创新', desc: '探索新设计领域，引领行业发展', color: 'from-red-500 to-orange-500' }
                    ].map((item, index) => (
                      <div key={index} className={`relative flex flex-col items-center transform transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {/* 时间点 */}
                        <div className={`w-6 h-6 bg-gradient-to-r ${item.color} rounded-full mb-6 relative z-10 shadow-lg ring-4 ring-white`}></div>
                        
                        {/* 内容卡片 */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                          <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-3`}>
                            {item.year}
                          </div>
                          <div className="text-lg font-semibold text-gray-800 mb-2">{item.title}</div>
                          <div className="text-sm text-gray-600 leading-relaxed">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* 移动端时间线 */}
              <div className="lg:hidden">
                <div className="relative">
                  {/* 垂直线 */}
                  <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-200 via-purple-200 to-indigo-200 rounded-full"></div>
                  
                  <div className="space-y-12">
                    {[
                      { year: '2018', title: '工作室成立', desc: '在东京成立Than Studio，开启设计之旅', color: 'from-blue-500 to-indigo-500' },
                      { year: '2019', title: '团队扩张', desc: '团队成员增至10人，业务快速发展', color: 'from-indigo-500 to-purple-500' },
                      { year: '2020', title: '业务拓展', desc: '开始国际项目合作，服务全球客户', color: 'from-purple-500 to-pink-500' },
                      { year: '2021', title: '获得认可', desc: '荣获多项设计大奖，行业地位确立', color: 'from-pink-500 to-red-500' },
                      { year: '2023', title: '持续创新', desc: '探索新设计领域，引领行业发展', color: 'from-red-500 to-orange-500' }
                    ].map((item, index) => (
                      <div key={index} className={`relative flex items-start transform transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                        {/* 时间点 */}
                        <div className={`w-6 h-6 bg-gradient-to-r ${item.color} rounded-full relative z-10 shadow-lg ring-4 ring-white flex-shrink-0`}></div>
                        
                        {/* 内容卡片 */}
                        <div className="ml-8 bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex-1">
                          <div className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                            {item.year}
                          </div>
                          <div className="text-lg font-semibold text-gray-800 mb-2">{item.title}</div>
                          <div className="text-sm text-gray-600 leading-relaxed">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心优势 - 调整为自适应栅格 */}
      <section 
        className={`py-10 sm:py-16 md:py-20 ${activeTab !== '核心优势' ? 'hidden' : ''}`}
        id="核心优势"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">核心优势</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="mb-4 md:mb-6 flex justify-center">
                <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">创新思维</h3>
              <p className="text-gray-600 text-sm md:text-base text-center">我们不断探索新的设计方法和理念，为客户带来前沿的设计解决方案，让品牌在竞争中脱颖而出。</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="mb-4 md:mb-6 flex justify-center">
                <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">专业团队</h3>
              <p className="text-gray-600 text-sm md:text-base text-center">我们拥有一支经验丰富、专业素养高的设计团队，每位成员都在各自领域拥有深厚的专业知识和丰富的项目经验。</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 sm:col-span-2 md:col-span-1">
              <div className="mb-4 md:mb-6 flex justify-center">
                <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 8L2 22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 15H9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">用户体验</h3>
              <p className="text-gray-600 text-sm md:text-base text-center">我们始终将用户体验放在首位，通过深入的用户研究和测试，确保我们的设计不仅美观，而且实用、易用。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 团队文化 - 调整为自适应栅格和等比例图片 */}
      <section 
        className={`py-10 sm:py-16 md:py-20 bg-gray-50 ${activeTab !== '团队文化' ? 'hidden' : ''}`}
        id="团队文化"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">团队文化</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="bg-white p-5 md:p-6 shadow-sm rounded-lg hover:shadow-md transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">共同创造</h3>
              <p className="text-gray-600 mb-0 text-sm md:text-base">我们鼓励团队成员之间的合作与交流，相信集体的智慧和创造力能够产生更优秀的设计作品。每个项目都是团队共同努力的成果。</p>
            </div>
            <div className="bg-white p-5 md:p-6 shadow-sm rounded-lg hover:shadow-md transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">追求卓越</h3>
              <p className="text-gray-600 mb-0 text-sm md:text-base">我们对设计品质有着极高的要求，不断挑战自我，精益求精，追求每一个细节的完美，为客户提供最优质的设计服务。</p>
            </div>
            <div className="bg-white p-5 md:p-6 shadow-sm rounded-lg hover:shadow-md transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">开放创新</h3>
              <p className="text-gray-600 mb-0 text-sm md:text-base">我们保持开放的心态，欢迎新的想法和观点，鼓励团队成员勇于尝试新的设计方法和技术，推动设计创新。</p>
            </div>
            <div className="bg-white p-5 md:p-6 shadow-sm rounded-lg hover:shadow-md transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">尊重多元</h3>
              <p className="text-gray-600 mb-0 text-sm md:text-base">我们尊重每个人的独特性和创造力，鼓励多元化的思维和表达方式，相信多样性能够带来更丰富的设计灵感和创意。</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
            <div className="aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage: `url(${basePath}/images/story-3.png)`,
                }}
              ></div>
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage: `url(${basePath}/images/story-4.png)`,
                }}
              ></div>
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage: `url(${basePath}/images/story-5.png)`,
                }}
              ></div>
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage: `url(${basePath}/images/story-6.png)`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}