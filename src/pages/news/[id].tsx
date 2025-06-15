import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NewsDetail {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string;
  tags: string[];
  relatedNews: number[];
  color: string;
  coverImage: string;
}

const newsData: { [key: number]: NewsDetail } = {
  1: {
    id: 1,
    title: '2024设计趋势发布',
    category: '趋势洞察',
    date: '2024年1月15日',
    author: '设计团队',
    readTime: '8分钟',
    excerpt: '探索未来设计的无限可能，从极简主义到沉浸式体验，我们为您解读2024年最前沿的设计趋势。',
    content: `
# 2024年设计趋势：重新定义视觉体验的未来

随着技术的不断进步和用户需求的演变，2024年的设计趋势呈现出前所未有的多样性和创新性。作为设计师，我们需要敏锐地捕捉这些变化，并将其融入到我们的创作中。

## 1. 极简主义的进化

极简主义不再仅仅是"少即是多"的简单理念。2024年的极简设计更加注重**功能性极简**和**情感化极简**的平衡。设计师们开始探索如何在保持简洁的同时，传达更丰富的情感和信息。

### 关键特征：
- **微妙的纹理和质感**：通过细腻的材质表现增加视觉层次
- **有意义的留白**：每一处空白都有其存在的理由
- **精准的色彩运用**：少量但精确的色彩选择

## 2. 沉浸式体验设计

随着AR/VR技术的成熟，沉浸式设计不再是科幻概念。2024年，我们看到更多品牌开始采用沉浸式设计来创造独特的用户体验。

### 应用领域：
- **虚拟展厅**：为品牌创造虚拟的展示空间
- **交互式产品演示**：让用户在虚拟环境中体验产品
- **沉浸式品牌故事**：通过多感官体验讲述品牌故事

## 3. 可持续设计理念

环保意识的提升推动了可持续设计的发展。设计师们开始考虑设计对环境的影响，从材料选择到生产工艺，每一个环节都体现着对地球的关爱。

### 实践方向：
- **生物降解材料**的广泛应用
- **循环设计**理念的深入实践
- **数字化优先**的设计策略

## 4. 人工智能辅助设计

AI技术的发展为设计师提供了强大的工具。2024年，AI不再是替代设计师的威胁，而是增强创造力的伙伴。

### AI在设计中的应用：
- **自动化重复性工作**：释放设计师的创造力
- **数据驱动的设计决策**：基于用户行为优化设计
- **个性化设计生成**：为不同用户群体定制设计方案

## 5. 情感化设计的回归

在技术高度发达的今天，人们更加渴望真实的情感连接。2024年的设计趋势强调通过设计传达情感，创造有温度的用户体验。

### 设计策略：
- **故事化设计**：每个设计元素都承载着故事
- **多感官体验**：不仅仅是视觉，还包括触觉、听觉等
- **个人化定制**：让每个用户都感受到独特的关怀

## 结语

2024年的设计趋势告诉我们，未来的设计将更加注重人文关怀、环境责任和技术创新的平衡。作为设计师，我们需要在追求美学的同时，思考设计的社会价值和环境影响。

让我们一起拥抱这些变化，用设计创造更美好的未来。
    `,
    tags: ['设计趋势', '2024', '极简主义', '沉浸式体验', 'AI设计', '可持续设计'],
    relatedNews: [2, 3],
    color: 'from-blue-500 to-cyan-500',
    coverImage: 'news_1.png'
  },
  2: {
    id: 2,
    title: '获得国际设计大奖',
    category: '荣誉奖项',
    date: '2024年1月8日',
    author: '公关部',
    readTime: '5分钟',
    excerpt: '我们的品牌视觉系统设计荣获Red Dot设计大奖，这是对我们创新能力和设计水准的认可。',
    content: `
# 荣获Red Dot设计大奖：创新设计的国际认可

我们怀着激动的心情宣布，我们为TechFlow科技公司设计的品牌视觉系统荣获了2024年Red Dot设计大奖。这一殊荣不仅是对我们设计团队专业能力的认可，更是对我们持续创新精神的肯定。

## 关于Red Dot设计大奖

Red Dot设计大奖是世界上最大和最有影响力的设计竞赛之一，被誉为设计界的"奥斯卡"。该奖项由德国设计协会创立于1955年，每年吸引来自全球60多个国家的数千件作品参赛。

### 奖项的重要性：
- **国际权威性**：被全球设计界广泛认可
- **严格的评审标准**：由国际知名设计专家组成的评审团
- **创新性要求**：注重设计的原创性和前瞻性

## 获奖项目：TechFlow品牌视觉系统

我们的获奖作品是为TechFlow科技公司设计的完整品牌视觉系统。这个项目从概念到实施历时6个月，体现了我们对现代科技企业品牌形象的深刻理解。

### 设计亮点：

#### 1. 创新的视觉语言
我们创造了一套独特的几何图形系统，通过简洁的线条和动态的组合，传达了科技的力量和创新的精神。

#### 2. 灵活的应用系统
设计的视觉系统具有高度的灵活性，能够适应从数字媒体到印刷品的各种应用场景，确保品牌形象的一致性。

#### 3. 前瞻性的设计理念
我们在设计中融入了对未来科技发展的思考，使品牌形象具有长久的生命力和适应性。

## 评审团的评价

Red Dot评审团对我们的作品给出了高度评价：

> "这是一个完美平衡了创新性和实用性的设计作品。设计团队成功地将复杂的科技概念转化为简洁而有力的视觉语言，创造了一个既现代又具有人文关怀的品牌形象。"

## 设计过程回顾

### 研究阶段
我们深入研究了科技行业的发展趋势，分析了目标受众的需求和偏好，为设计提供了坚实的理论基础。

### 创意阶段
团队进行了大量的头脑风暴和概念探索，最终确定了以"连接"和"创新"为核心的设计理念。

### 实施阶段
我们与客户密切合作，确保设计方案能够完美地体现品牌的核心价值和商业目标。

## 团队感言

**创意总监田中太郎**表示：
> "这个奖项是对整个团队努力的认可。我们始终相信，好的设计不仅要美观，更要有意义。这次获奖让我们更加坚定了继续创新的决心。"

**项目负责人佐藤花子**说：
> "与TechFlow的合作让我们学到了很多。客户的信任和支持是我们创作出优秀作品的重要因素。"

## 对未来的展望

这次获奖不是终点，而是新的起点。我们将继续：

- **提升设计水准**：不断学习和探索新的设计理念
- **拓展服务领域**：为更多行业的客户提供专业服务
- **培养人才**：建设更强大的设计团队
- **推动创新**：在设计实践中探索新的可能性

## 感谢

我们要感谢所有支持我们的客户、合作伙伴和团队成员。正是因为大家的信任和努力，我们才能取得今天的成就。

未来，我们将继续以专业的态度和创新的精神，为客户创造更多有价值的设计作品，为设计行业的发展贡献我们的力量。
    `,
    tags: ['Red Dot', '设计大奖', '品牌设计', '国际认可', '创新设计'],
    relatedNews: [1, 3],
    color: 'from-purple-500 to-pink-500',
    coverImage: 'news_2.png'
  },
  3: {
    id: 3,
    title: '新工作室正式启用',
    category: '公司动态',
    date: '2024年1月1日',
    author: '行政部',
    readTime: '6分钟',
    excerpt: '全新的创意空间正式投入使用，配备最先进的设计设备，为团队提供更好的创作环境。',
    content: `
# 新工作室启用：打造未来创意空间

新年伊始，我们怀着激动的心情迎来了一个重要的里程碑——全新的创意工作室正式启用！这个占地1200平方米的现代化空间，不仅是我们团队的新家，更是我们追求卓越设计的新起点。

## 设计理念：创意与功能的完美融合

新工作室的设计体现了我们对创意空间的深刻理解。我们相信，优秀的设计环境能够激发团队的创造力，提升工作效率。

### 核心设计原则：

#### 1. 开放与私密的平衡
- **开放式协作区域**：促进团队成员之间的交流与合作
- **私密思考空间**：为需要专注工作的时刻提供安静环境
- **灵活的空间配置**：可根据项目需求调整空间布局

#### 2. 自然光线的最大化利用
- **大面积落地窗**：确保充足的自然采光
- **天窗设计**：在顶层区域引入更多自然光
- **智能遮阳系统**：根据时间和天气自动调节光线

#### 3. 可持续发展理念
- **环保材料**：选用可回收和低碳排放的建筑材料
- **节能系统**：LED照明和智能温控系统
- **绿色植物**：在室内种植大量绿植，改善空气质量

## 功能区域介绍

### 创意工作区
这是工作室的核心区域，配备了最新的设计工作站和高端显示设备。每个工作位都经过精心设计，确保舒适性和功能性的完美结合。

**设备配置：**
- 27英寸4K专业显示器
- 高性能图形工作站
- 专业绘图板和手写笔
- 人体工学办公椅

### 会议与展示区
我们设置了多个不同规模的会议室，满足各种会议需求。主会议室配备了先进的视频会议系统和大屏幕显示设备。

**特色功能：**
- 360度全景视频会议系统
- 无线投屏技术
- 智能白板系统
- 专业音响设备

### 创意实验室
这是一个专门用于原型制作和实验的空间，配备了3D打印机、激光切割机等先进设备。

**设备清单：**
- 高精度3D打印机
- 激光切割机
- 专业摄影设备
- 材料样品库

### 休闲放松区
我们深知工作与休息的平衡对创意工作的重要性，因此设置了舒适的休闲区域。

**休闲设施：**
- 咖啡吧台
- 舒适的沙发区
- 游戏娱乐设施
- 户外露台

## 技术设施升级

### 网络基础设施
- **千兆光纤网络**：确保高速稳定的网络连接
- **全覆盖WiFi 6**：支持大量设备同时连接
- **专业级网络安全**：保护客户数据和知识产权

### 智能办公系统
- **智能门禁系统**：刷卡或人脸识别进入
- **智能照明控制**：根据使用情况自动调节
- **环境监测系统**：实时监控空气质量和温湿度

## 团队成员的反馈

**创意总监田中太郎**：
> "新工作室的环境让我感到非常兴奋。开放的空间设计促进了团队之间的交流，而充足的自然光线让我们的创作更有灵感。"

**设计师佐藤花子**：
> "我特别喜欢创意实验室，能够快速制作原型对我们的设计工作非常有帮助。新的设备让我们能够更好地验证设计想法。"

**项目经理山田次郎**：
> "新的会议室设施大大提升了我们与客户沟通的效率。高清的视频会议系统让远程协作变得更加顺畅。"

## 可持续发展承诺

新工作室的建设体现了我们对可持续发展的承诺：

### 环保措施：
- **LEED金级认证**：符合国际绿色建筑标准
- **雨水收集系统**：用于植物浇灌
- **太阳能板**：部分电力来源于可再生能源
- **垃圾分类回收**：完善的废物管理系统

### 社会责任：
- **无障碍设计**：确保所有人都能方便使用
- **本地采购**：优先选择本地供应商
- **社区参与**：定期举办设计分享活动

## 未来规划

新工作室的启用只是我们发展计划的第一步。未来，我们计划：

### 短期目标（6个月内）：
- 完善工作流程和管理制度
- 举办工作室开放日活动
- 邀请行业专家进行交流分享

### 中期目标（1-2年）：
- 扩大团队规模
- 增设专业培训中心
- 建立设计资源库

### 长期愿景（3-5年）：
- 成为地区设计创新中心
- 建立国际合作网络
- 推动设计教育发展

## 开放日邀请

我们计划在2月举办工作室开放日活动，邀请客户、合作伙伴和设计爱好者参观我们的新空间。活动将包括：

- **工作室参观**：了解我们的工作环境和设备
- **设计分享**：团队成员分享最新项目和设计心得
- **互动体验**：体验我们的创意实验室设备
- **交流座谈**：与设计师面对面交流

## 结语

新工作室的启用标志着我们进入了发展的新阶段。我们相信，在这个充满创意和活力的空间里，我们的团队将创造出更多优秀的设计作品，为客户提供更好的服务。

感谢所有支持我们的客户和合作伙伴，让我们一起在这个新的创意空间里，创造设计的无限可能！
    `,
    tags: ['新工作室', '创意空间', '设备升级', '可持续发展', '团队发展'],
    relatedNews: [1, 2],
    color: 'from-orange-500 to-red-500',
    coverImage: 'news_3.png'
  }
};

export default function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [news, setNews] = useState<NewsDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const basePath = process.env.NODE_ENV === 'production' ? '/ThanLab' : '';

  useEffect(() => {
    if (id) {
      const newsId = parseInt(id as string);
      const newsDetail = newsData[newsId];
      if (newsDetail) {
        setNews(newsDetail);
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

  if (!news) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">动态未找到</h1>
            <p className="text-gray-600 mb-8">抱歉，您查找的动态不存在。</p>
            <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              返回首页
            </Link>
          </div>
        </div>
      </>
    );
  }

  // 渲染Markdown内容
  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold text-gray-800 mb-6 mt-8">{line.substring(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-gray-800 mb-4 mt-6">{line.substring(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold text-gray-800 mb-3 mt-4">{line.substring(4)}</h3>;
      } else if (line.startsWith('#### ')) {
        return <h4 key={index} className="text-lg font-semibold text-gray-800 mb-2 mt-3">{line.substring(5)}</h4>;
      } else if (line.startsWith('- ')) {
        return <li key={index} className="text-gray-600 mb-1 ml-4">{line.substring(2)}</li>;
      } else if (line.startsWith('> ')) {
        return <blockquote key={index} className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4">{line.substring(2)}</blockquote>;
      } else if (line.includes('**') && line.includes('**')) {
        const parts = line.split('**');
        return (
          <p key={index} className="text-gray-600 leading-relaxed mb-4">
            {parts.map((part, i) => 
              i % 2 === 1 ? <strong key={i} className="font-semibold text-gray-800">{part}</strong> : part
            )}
          </p>
        );
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index} className="text-gray-600 leading-relaxed mb-4">{line}</p>;
      }
    });
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="absolute inset-0">
            <div className={`absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l ${news.color} opacity-10 rounded-full transform translate-x-1/2`}></div>
            <div className={`absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r ${news.color} opacity-10 rounded-full transform -translate-x-1/2`}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* 面包屑导航 */}
            <nav className="mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-blue-600 transition-colors">首页</Link>
                <span>/</span>
                <span className="text-gray-800">最新动态</span>
                <span>/</span>
                <span className="text-gray-800">{news.title}</span>
              </div>
            </nav>

            <div className="max-w-4xl mx-auto">
              {/* 文章头部 */}
              <div className="text-center mb-12">
                <div className="mb-6">
                  <span className={`inline-block px-4 py-2 bg-gradient-to-r ${news.color} text-white text-sm font-medium rounded-full mb-4`}>
                    {news.category}
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                  {news.title}
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                  {news.excerpt}
                </p>
                
                {/* 文章元信息 */}
                <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{news.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{news.author}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>阅读时间 {news.readTime}</span>
                  </div>
                </div>
              </div>
              
              {/* 封面图片 */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl mb-12">
                <img
                  src={`${basePath}/images/${news.coverImage}`}
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${news.color} opacity-20`}></div>
              </div>
            </div>
          </div>
        </section>

        {/* 文章内容 */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {renderContent(news.content)}
              </div>
              
              {/* 标签 */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">相关标签</h3>
                <div className="flex flex-wrap gap-2">
                  {news.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* 相关动态 */}
              {news.relatedNews.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-6">相关动态</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {news.relatedNews.map((relatedId) => {
                      const relatedNews = newsData[relatedId];
                      if (!relatedNews) return null;
                      
                      return (
                        <Link key={relatedId} href={`/news/${relatedId}`} className="group">
                          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-start gap-4">
                              <div className={`w-12 h-12 bg-gradient-to-r ${relatedNews.color} rounded-lg flex-shrink-0`}></div>
                              <div>
                                <span className="text-xs text-gray-500 uppercase tracking-wide">{relatedNews.category}</span>
                                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
                                  {relatedNews.title}
                                </h4>
                                <p className="text-gray-600 text-sm line-clamp-2">{relatedNews.excerpt}</p>
                                <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                                  <span>{relatedNews.date}</span>
                                  <span>{relatedNews.readTime}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {/* 返回按钮 */}
              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <Link href="/" className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-black text-white font-medium rounded-full hover:from-black hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>返回首页</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}