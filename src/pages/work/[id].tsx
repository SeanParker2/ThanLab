import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface WorkDetail {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  client: string;
  year: string;
  services: string[];
  challenge: string;
  solution: string;
  result: string;
  images: string[];
  color: string;
  tags: string[];
}

const workData: { [key: number]: WorkDetail } = {
  1: {
    id: 1,
    title: '品牌视觉系统',
    category: '品牌设计',
    description: '为互联网公司产品打造独特的品牌视觉识别系统',
    fullDescription: '这是一个为识区（今日头条高端版）设计的完整品牌视觉系统项目。我们从品牌核心价值出发，创造了一套现代、简洁且具有科技感的视觉语言，涵盖了从logo设计到应用系统的全方位品牌体验。',
    client: '字节跳动',
    year: '2024',
    services: ['品牌策略', 'Logo设计', '视觉识别系统', '应用设计', '品牌指南'],
    challenge: '识区作为一款新的资讯应用，需要建立专业且具有创新感的品牌形象，以在竞争激烈的市场中脱颖而出。原有的品牌形象缺乏统一性和专业度，无法有效传达公司的技术实力和创新精神。',
    solution: '我们采用了极简主义的设计理念，以几何图形为基础，创造了一个既现代又具有科技感的logo。整个视觉系统使用了蓝色和灰色的配色方案，传达专业性和可靠性。同时，我们设计了完整的应用规范，确保品牌在各种媒介上的一致性表现。',
    result: '新的品牌视觉系统成功提升了产品的品牌认知度。',
    images: ['work_1_1.jpeg', 'work_1_2.jpeg', 'work_1_3.jpeg', 'work_1_4.jpeg'],
    color: 'from-blue-500 to-purple-500',
    tags: ['品牌设计', 'Logo设计', '视觉系统', '科技']
  },
  2: {
    id: 2,
    title: '产品包装设计',
    category: '包装设计',
    description: '环保理念与美学设计的完美结合',
    fullDescription: '为有机护肤品牌设计的系列包装，强调环保可持续的理念。设计采用天然材料和极简的视觉语言，传达品牌对自然和环保的承诺，同时确保产品在货架上的视觉吸引力。',
    client: 'Pure Nature 有机护肤品牌',
    year: '2024',
    services: ['包装设计', '结构设计', '材料选择', '印刷工艺', '品牌应用'],
    challenge: '客户希望包装设计能够体现产品的有机天然特性，同时在竞争激烈的护肤品市场中脱颖而出。包装需要既环保又具有高端感，并且要考虑到生产成本和实用性。',
    solution: '我们选择了可回收的纸质材料作为主要包装材料，采用大豆油墨印刷工艺。设计上使用了大地色系和简洁的几何图案，结合手绘的植物元素，营造自然有机的感觉。包装结构设计考虑了产品保护和用户体验，确保开启方便且产品安全。',
    result: '新包装推出后，产品销量增长了30%，消费者对包装的环保理念和设计美感给予了高度评价。该包装设计还获得了包装设计协会的可持续设计奖项。',
    images: ['work_2_1.jpeg', 'work_2_2.jpeg', 'work_2_3.jpeg', 'work_2_4.jpeg'],
    color: 'from-orange-500 to-pink-500',
    tags: ['包装设计', '环保设计', '护肤品', '可持续']
  },
  3: {
    id: 3,
    title: '数字界面设计',
    category: 'UI/UX',
    description: '直观易用的移动应用界面设计',
    fullDescription: '为金融科技公司设计的移动银行应用界面，注重用户体验和信息安全的平衡。设计过程中进行了大量的用户研究和可用性测试，确保界面既美观又实用，为用户提供流畅的数字银行体验。',
    client: 'FinTech Pro 金融科技公司',
    year: '2024',
    services: ['用户研究', 'UI设计', 'UX设计', '原型制作', '可用性测试'],
    challenge: '金融应用需要在保证安全性的同时提供良好的用户体验。用户群体年龄跨度大，需要设计一个既符合年轻用户审美又易于中老年用户使用的界面。同时要处理复杂的金融信息展示和多层级的功能架构。',
    solution: '我们采用了卡片式设计和清晰的信息层级，使用直观的图标和颜色编码来帮助用户快速理解功能。设计了简化的操作流程，减少用户的认知负担。同时，我们特别注重无障碍设计，确保不同能力的用户都能顺利使用应用。',
    result: '应用上线后，用户满意度达到4.8分（满分5分），日活跃用户数量增长了50%。用户完成交易的成功率提升了25%，客服咨询量减少了40%，证明了界面设计的有效性。',
    images: ['work_3_1.jpeg', 'work_3_2.jpeg', 'work_3_3.jpeg', 'work_3_4.jpeg'],
    color: 'from-green-500 to-teal-500',
    tags: ['UI设计', 'UX设计', '移动应用', '金融科技']
  },
  4: {
    id: 4,
    title: '艺术装置设计',
    category: '艺术创作',
    description: '互动性艺术装置的创新设计',
    fullDescription: '为城市文化中心设计的大型互动艺术装置，结合了传统艺术表现形式和现代科技手段。装置通过感应技术与观众互动，创造独特的视觉和听觉体验，成为城市的新地标。',
    client: '市文化艺术中心',
    year: '2024',
    services: ['概念设计', '技术实现', '材料工程', '互动设计', '安装调试'],
    challenge: '需要设计一个既具有艺术价值又能吸引公众参与的大型装置。装置要能够承受户外环境的考验，同时技术系统要稳定可靠。设计还需要考虑不同年龄段观众的参与体验。',
    solution: '我们设计了一个由多个几何体组成的动态装置，使用LED灯光和声音系统创造沉浸式体验。装置配备了运动感应器，能够根据观众的动作变化灯光和音效。材料选择了耐候性强的不锈钢和特殊玻璃，确保长期户外使用的稳定性。',
    result: '装置成为了城市的新地标，每天吸引数千名观众参观互动。该项目获得了国际艺术装置设计大奖，并被多家媒体报道。装置的成功也为文化中心带来了更多的参观者和文化活动。',
    images: ['work_4_1.jpeg', 'work_4_2.jpeg', 'work_4_3.jpeg', 'work_4_4.jpeg'],
    color: 'from-pink-500 to-rose-500',
    tags: ['艺术装置', '互动设计', '公共艺术', '科技艺术']
  },
  5: {
    id: 5,
    title: '企业形象设计',
    category: '品牌设计',
    description: '传统与现代融合的企业品牌重塑',
    fullDescription: '为一家有着50年历史的制造企业进行品牌重塑设计。在保持企业传统价值的同时，注入现代设计元素，帮助企业在数字化转型中建立新的品牌形象，吸引年轻一代的客户和员工。',
    client: '恒业制造集团',
    year: '2024',
    services: ['品牌策略', '视觉重塑', '企业文化设计', '数字化应用', '品牌推广'],
    challenge: '企业面临品牌老化的问题，在年轻消费者中缺乏吸引力。同时，企业正在进行数字化转型，需要一个能够体现创新能力的新形象，但又不能完全脱离企业的历史传统和核心价值。',
    solution: '我们深入研究了企业的历史和文化，提取了代表传统工艺精神的设计元素，并用现代的设计语言重新诠释。新的视觉系统采用了经典与现代相结合的配色方案，logo设计融入了企业标志性的制造工艺符号，同时具有强烈的现代感。',
    result: '品牌重塑后，企业在年轻消费者中的认知度提升了60%，新客户获取率增长了35%。企业的数字化形象得到了显著提升，成功吸引了更多优秀的年轻人才加入团队。',
    images: ['work_5_1.jpeg', 'work_5_2.jpeg', 'work_5_3.jpeg', 'work_5_4.jpeg'],
    color: 'from-indigo-500 to-blue-500',
    tags: ['品牌重塑', '企业形象', '传统与现代', '制造业']
  },
  6: {
    id: 6,
    title: '现代空间美学',
    category: '空间设计',
    description: '融合功能与美学的现代建筑空间设计',
    fullDescription: '这是一个现代建筑的设计项目，我们致力于创造一个既实用又美观的休闲娱乐空间。设计理念强调自然光线的运用、开放式布局和可持续材料的选择，为游览者提供舒适且具有美感的环境。',
    client: '坪山大剧院',
    year: '2024',
    services: ['空间规划', '室内设计',  '指南设计', '材料选择'],
    challenge: '作为新建的大剧院，需要更具特色与区分度。希望在有限的空间内实现开放感，同时满足观众与游览者的需求，并体现现代简约的美学追求。',
    solution: '我们重新规划了空间布局，创造了开放式的空间。使用大面积的玻璃窗和天窗增加自然采光，选择浅色调的材料和家具来增强空间感。同时，设计了多功能储物解决方案，最大化利用每一寸空间。',
    result: '改造后的空间不仅满足了所有功能需求，还创造了一个充满现代美感的生活环境。业主对最终效果非常满意，该项目也成为了我们空间设计作品集中的代表作品。',
    images: ['work_6_1.jpeg', 'work_6_2.jpeg', 'work_6_3.jpeg', 'work_6_4.jpeg'],
    color: 'from-green-500 to-blue-500',
    tags: ['室内设计', '空间规划', '现代风格', '商业建筑']
  }
};

export default function WorkDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [work, setWork] = useState<WorkDetail | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const basePath = process.env.NODE_ENV === 'production' ? '/Than-main' : '';

  useEffect(() => {
    if (id) {
      const workId = parseInt(id as string);
      const workDetail = workData[workId];
      if (workDetail) {
        setWork(workDetail);
      }
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </>
    );
  }

  if (!work) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">作品未找到</h1>
            <p className="text-gray-600 mb-8">抱歉，您查找的作品不存在。</p>
            <Link href="/work" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              返回作品列表
            </Link>
          </div>
        </div>
      </>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % work.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + work.images.length) % work.images.length);
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="absolute inset-0">
            <div className={`absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l ${work.color} opacity-10 rounded-full transform translate-x-1/2`}></div>
            <div className={`absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r ${work.color} opacity-10 rounded-full transform -translate-x-1/2`}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* 面包屑导航 */}
            <nav className="mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-blue-600 transition-colors">首页</Link>
                <span>/</span>
                <Link href="/work" className="hover:text-blue-600 transition-colors">作品</Link>
                <span>/</span>
                <span className="text-gray-800">{work.title}</span>
              </div>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* 左侧内容 */}
              <div>
                <div className="mb-6">
                  <span className={`inline-block px-4 py-2 bg-gradient-to-r ${work.color} text-white text-sm font-medium rounded-full mb-4`}>
                    {work.category}
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                    {work.title}
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {work.description}
                  </p>
                </div>

                {/* 项目信息 */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">客户</h3>
                    <p className="text-gray-800 font-medium">{work.client}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">年份</h3>
                    <p className="text-gray-800 font-medium">{work.year}</p>
                  </div>
                </div>

                {/* 服务标签 */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">服务内容</h3>
                  <div className="flex flex-wrap gap-2">
                    {work.services.map((service, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 右侧图片轮播 */}
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={`${basePath}/images/${work.images[currentImageIndex]}`}
                    alt={`${work.title} - 图片 ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  
                  {/* 图片导航 */}
                  {work.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      
                      {/* 图片指示器 */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {work.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 项目详情 */}
        <section className="py-20 sm:py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* 项目概述 */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">项目概述</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {work.fullDescription}
                </p>
              </div>

              {/* 挑战、解决方案、结果 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">挑战</h3>
                  <p className="text-gray-600 leading-relaxed">{work.challenge}</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">解决方案</h3>
                  <p className="text-gray-600 leading-relaxed">{work.solution}</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">结果</h3>
                  <p className="text-gray-600 leading-relaxed">{work.result}</p>
                </div>
              </div>

              {/* 标签 */}
              <div className="mb-16">
                <h3 className="text-xl font-bold text-gray-800 mb-4">项目标签</h3>
                <div className="flex flex-wrap gap-3">
                  {work.tags.map((tag, index) => (
                    <span key={index} className={`px-4 py-2 bg-gradient-to-r ${work.color} text-white rounded-full text-sm font-medium`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 导航到其他作品 */}
              <div className="border-t border-gray-200 pt-16">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <Link href="/work" className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>返回作品列表</span>
                  </Link>
                  
                  <div className="flex gap-4">
                    {work.id > 1 && (
                      <Link href={`/work/${work.id - 1}`} className="group flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>上一个作品</span>
                      </Link>
                    )}
                    
                    {work.id < 6 && (
                      <Link href={`/work/${work.id + 1}`} className="group flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                        <span>下一个作品</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}