import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

// 商品类型定义
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew: boolean;
  isHot: boolean;
  description?: string;
};

export default function Store() {
  const router = useRouter();
  const basePath = router.basePath || '';
  
  const [activeCategory, setActiveCategory] = useState('全部商品');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 商品分类
  const categories = [
    { id: 'all', name: '全部商品', icon: `${basePath}/logo/icon-all.png`, activeIcon: `${basePath}/logo/icon-all1.png` },
    { id: 'new', name: '新品上市', icon: `${basePath}/logo/icon-new.png`, activeIcon: `${basePath}/logo/icon-new1.png` },
    { id: 'hot', name: '热销商品', icon: `${basePath}/logo/icon-hot.png`, activeIcon: `${basePath}/logo/icon-hot1.png` },
    { id: 'furniture', name: '家具', icon: '', activeIcon: '' },
    { id: 'lighting', name: '灯具', icon: '', activeIcon: '' },
    { id: 'decoration', name: '装饰品', icon: '', activeIcon: '' },
    { id: 'tableware', name: '餐具', icon: '', activeIcon: '' },
    { id: 'textile', name: '纺织品', icon: '', activeIcon: '' },
  ];

  // 商品数据
  const products: Product[] = [
    { 
      id: 1, 
      name: '极简风格座椅', 
      price: 1299, 
      image: `${basePath}/images/store-2.png`, 
      category: 'furniture', 
      isNew: true, 
      isHot: false,
      description: '采用优质实木和高弹性海绵制作，符合人体工学设计，给您带来舒适的坐感体验。简约的北欧风格设计，适合各种家居环境。'
    },
    { 
      id: 2, 
      name: '原木餐桌', 
      price: 2499, 
      image: `${basePath}/images/store-3.png`, 
      category: 'furniture', 
      isNew: false, 
      isHot: true,
      description: '选用天然原木材质，经过精细打磨和防腐处理，质感细腻，纹理自然。宽敞的桌面设计，满足4-6人同时用餐的需求。'
    },
    { 
      id: 3, 
      name: '北欧风格吊灯', 
      price: 899, 
      image: `${basePath}/images/store-4.png`, 
      category: 'lighting', 
      isNew: true, 
      isHot: true,
      description: '简约现代的北欧设计风格，金属材质灯架配合优质亚克力灯罩，光线柔和不刺眼。适合客厅、餐厅等多种场景使用。'
    },
    { 
      id: 4, 
      name: '日式陶瓷花瓶', 
      price: 399, 
      image: `${basePath}/images/store-5.png`, 
      category: 'decoration', 
      isNew: false, 
      isHot: false,
      description: '传统日式工艺制作，每一件都是独特的手工艺术品。釉面光滑细腻，色彩典雅，是点缀家居空间的理想选择。'
    },
    { 
      id: 5, 
      name: '手工编织抱枕', 
      price: 199, 
      image: `${basePath}/images/store-6.png`, 
      category: 'textile', 
      isNew: false, 
      isHot: true,
      description: '采用优质棉麻材质，手工编织而成，触感柔软舒适。几何图案设计，为您的沙发、床铺增添温馨感。'
    },
    { 
      id: 6, 
      name: '简约餐盘套装', 
      price: 599, 
      image: `${basePath}/images/store-7.png`, 
      category: 'tableware', 
      isNew: true, 
      isHot: false,
      description: '高品质陶瓷材质，健康环保。简约的设计风格，白色为主调，适合各种餐桌风格。套装包含6个餐盘、6个汤碗和6个小碟。'
    },
    { 
      id: 7, 
      name: '实木边几', 
      price: 899, 
      image: `${basePath}/images/store-8.png`, 
      category: 'furniture', 
      isNew: false, 
      isHot: false,
      description: '采用优质白橡木制作，结构稳固，承重能力强。简洁的线条设计，彰显现代感，是客厅、卧室的实用家具。'
    },
    { 
      id: 8, 
      name: '日式茶杯套装', 
      price: 299, 
      image: `${basePath}/images/store-2.png`, 
      category: 'tableware', 
      isNew: true, 
      isHot: true,
      description: '传统日式风格设计，精选优质陶瓷材质，手感细腻。套装包含4个茶杯和1个茶壶，适合家庭或小型聚会使用。'
    },
  ];

  // 根据分类和搜索过滤商品
  const filteredProducts = products.filter(product => {
    // 分类过滤
    const categoryMatch = 
      activeCategory === '全部商品' ||
      (activeCategory === '新品上市' && product.isNew) ||
      (activeCategory === '热销商品' && product.isHot) ||
      product.category === categories.find(cat => cat.name === activeCategory)?.id;
    
    // 搜索过滤
    const searchMatch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 搜索逻辑已经在filteredProducts中实现
  };

  return (
    <div>
      {/* Hero区域 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                设计商店
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              精选设计产品，为您的生活空间注入艺术气息
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-16"></div>
            
            {/* 统计数据 */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">200+</div>
                <div className="text-gray-600 text-sm sm:text-base">精选商品</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-gray-600 text-sm sm:text-base">设计师品牌</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">1000+</div>
                <div className="text-gray-600 text-sm sm:text-base">满意客户</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">24h</div>
                <div className="text-gray-600 text-sm sm:text-base">快速发货</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 向下滚动指示器 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* 分类导航 - 现代化设计 */}
          <div className={`mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-light mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  商品分类
                </span>
              </h2>
              <p className="text-gray-600 text-lg">探索我们精心挑选的设计产品</p>
            </div>
            
            {/* 桌面端分类导航 */}
            <div className="hidden md:flex justify-center flex-wrap gap-4 mb-8">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category.name
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:text-gray-800 shadow-md hover:shadow-lg border border-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category.name)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* 移动端分类选择器 */}
            <div className="block md:hidden mb-8">
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                <select 
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all duration-300"
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* 搜索栏 */}
          <div className={`mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="搜索您心仪的设计产品..."
                  className="w-full px-6 py-4 pl-12 pr-16 border border-gray-200 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-lg transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl hover:shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
                >
                  搜索
                </button>
              </form>
            </div>
          </div>

          {/* 商品网格 */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                    onClick={() => {
                      setSelectedProduct(product);
                      setShowModal(true);
                    }}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                      <div className="relative overflow-hidden">
                        <div 
                          className="w-full h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                          style={{
                            backgroundImage: `url(${product.image})`,
                          }}
                        ></div>
                        
                        {/* 标签 */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          {product.isNew && (
                            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                              新品
                            </div>
                          )}
                          {product.isHot && (
                            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                              热销
                            </div>
                          )}
                        </div>
                        
                        {/* 悬浮按钮 */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <button 
                            className="bg-white text-gray-800 px-6 py-3 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-50"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProduct(product);
                              setShowModal(true);
                            }}
                          >
                            查看详情
                          </button>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                          {product.name}
                        </h3>
                        <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          ¥{product.price}
                        </p>
                        <div className="mt-3 text-sm text-gray-500">
                          {categories.find(cat => cat.id === product.category)?.name || product.category}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">没有找到相关商品</h3>
                <p className="text-gray-500">试试调整搜索条件或浏览其他分类</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 商品详情弹窗 */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20">
            {/* 背景遮罩 */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity" 
              aria-hidden="true"
              onClick={() => setShowModal(false)}
            ></div>

            {/* 弹窗内容 */}
            <div className="relative bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all max-w-4xl w-full mx-4 border border-gray-100">
              {/* 关闭按钮 */}
              <div className="absolute top-6 right-6 z-10">
                <button
                  type="button"
                  className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 text-gray-400 hover:text-gray-600 hover:bg-opacity-100 focus:outline-none transition-all duration-300 shadow-lg"
                  onClick={() => setShowModal(false)}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* 左侧图片 */}
                <div className="relative">
                  <div 
                    className="w-full h-96 lg:h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${selectedProduct.image})`,
                    }}
                  ></div>
                  
                  {/* 标签 */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    {selectedProduct.isNew && (
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm px-4 py-2 rounded-full font-medium shadow-lg">
                        新品上市
                      </div>
                    )}
                    {selectedProduct.isHot && (
                      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm px-4 py-2 rounded-full font-medium shadow-lg">
                        热销商品
                      </div>
                    )}
                  </div>
                </div>
                
                {/* 右侧信息 */}
                <div className="p-8 lg:p-12">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedProduct.name}</h3>
                    <div className="flex items-center mb-6">
                      <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        ¥{selectedProduct.price}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">商品分类</h4>
                      <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                        {categories.find(cat => cat.id === selectedProduct.category)?.name || selectedProduct.category}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">商品描述</h4>
                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl border border-gray-100">
                      <p className="text-gray-700 leading-relaxed">{selectedProduct.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">配送服务</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">全国顺丰快递，预计3-5天送达</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">满1000元免运费</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">7天无理由退换</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="tel:+86 180 9898 6553" 
                      className="flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      电话咨询
                    </a>
                    <a 
                      href={`mailto:sales@thanstudio.com?subject=咨询：${selectedProduct.name}&body=您好，我对${selectedProduct.name}（价格：¥${selectedProduct.price}）有兴趣，请提供更多信息。`} 
                      className="flex items-center justify-center px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-emerald-600 hover:to-teal-700 transform hover:-translate-y-1"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      邮件咨询
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}