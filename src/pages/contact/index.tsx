import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Contact() {
  const router = useRouter();
  const basePath = router.basePath || '';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '产品咨询',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 英雄区域 */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-100 to-transparent rounded-full opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-100 to-transparent rounded-full opacity-30 transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                联系我们
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              无论您有任何问题或合作意向，都欢迎随时与我们联系
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          
          {/* 联系方式卡片 */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">电话咨询</h3>
              <p className="text-gray-600 mb-4">周一至周五 9:00-18:00</p>
              <a href="tel:+81-3-1234-5678" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">+86 180 9898 6553</a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">电子邮件</h3>
              <p className="text-gray-600 mb-4">24小时内回复</p>
              <a href="mailto:info@thanstudio.com" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">unsaturated2025@gmail.com</a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">工作室地址</h3>
              <p className="text-gray-600 mb-4">欢迎预约参观</p>
              <p className="text-purple-600 font-medium">深圳市·宝安区</p>
            </div>
          </div>
        </div>
      </section>

      {/* 联系表单 */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h2 className="text-4xl sm:text-5xl font-light mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  发送消息
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                告诉我们您的想法，我们将在24小时内回复您
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* 表单 */}
              <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                          姓名 *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="请输入您的姓名"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                          邮箱 *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="请输入您的邮箱"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                        主题 *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                      >
                        <option value="产品咨询">产品咨询</option>
                        <option value="项目合作">项目合作</option>
                        <option value="加入团队">加入团队</option>
                        <option value="其他问题">其他问题</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                        消息 *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical bg-gray-50 focus:bg-white"
                        placeholder="请详细描述您的需求或问题"
                      ></textarea>
                    </div>
                    
                    <div className="pt-4">
                      <a
                        href={`mailto:unsaturated2025@gmail.com?subject=${encodeURIComponent(`${formData.subject} - 来自${formData.name}`)}&body=${encodeURIComponent(`姓名: ${formData.name}\n邮箱: ${formData.email}\n\n${formData.message}\n\n此邮件由Than Studio网站发送`)}`}
                        className={`block w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 transform text-center hover:shadow-lg hover:-translate-y-1 hover:from-blue-700 hover:to-purple-700`}
                      >
                        使用邮箱发送消息
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 右侧信息 */}
              <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-gray-800">为什么选择我们？</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2">快速响应</h4>
                          <p className="text-gray-600">我们承诺在24小时内回复您的咨询，确保项目进度不受影响。</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2">专业团队</h4>
                          <p className="text-gray-600">拥有多年经验的设计师团队，为您提供最专业的设计解决方案。</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2">贴心服务</h4>
                          <p className="text-gray-600">从项目咨询到后期维护，我们提供全程贴心的一对一服务。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">常见问题</h4>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-700 mb-1">Q: 项目周期一般多长？</p>
                        <p className="text-gray-600">A: 根据项目复杂度，一般2-8周不等。</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700 mb-1">Q: 是否提供后期维护？</p>
                        <p className="text-gray-600">A: 是的，我们提供6个月免费维护服务。</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700 mb-1">Q: 如何确定项目报价？</p>
                        <p className="text-gray-600">A: 我们会根据具体需求提供详细报价方案。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 地图 */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-10">位置</h2>
          <div className="w-full aspect-[4/3] sm:aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm md:text-base">
              <span>地图将显示在这里</span>
            </div>
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-10">常见问题</h2>
          <div className="max-w-3xl mx-auto grid gap-4 md:gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">如何预约咨询？</h3>
              <p className="text-gray-600 text-sm">您可以通过电子邮件、电话或填写网站上的联系表单来预约咨询。我们的团队会在24小时内回复您，安排合适的咨询时间。</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">设计项目的一般周期是多久？</h3>
              <p className="text-gray-600 text-sm">设计项目的周期取决于项目的复杂性和规模。小型项目通常需要2-4周，中型项目需要1-2个月，大型项目可能需要3个月或更长时间。我们会在项目开始前提供详细的时间表。</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">你们提供哪些设计服务？</h3>
              <p className="text-gray-600 text-sm">我们提供品牌形象设计、平面设计、网站和移动应用UI/UX设计、产品设计、空间设计以及展览设计等服务。无论您的需求是什么，我们都能为您提供专业的设计解决方案。</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">你们接受国际项目吗？</h3>
              <p className="text-gray-600 text-sm">是的，我们接受来自世界各地的项目。我们的团队成员来自不同的文化背景，能够理解不同市场的需求。我们可以通过视频会议、电子邮件等方式与国际客户保持沟通。</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">设计修改的流程是怎样的？</h3>
              <p className="text-gray-600 text-sm">我们的设计过程包括多轮修改。在每个阶段，我们会向您展示设计成果，收集反馈，并进行必要的调整。标准服务包含2-3轮修改，如果需要更多修改，可能会产生额外费用。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}