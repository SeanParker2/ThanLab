import { useEffect } from 'react';
import { useRouter } from 'next/router';

const PerformanceOptimizer = () => {
  const router = useRouter();

  useEffect(() => {
    // 预加载关键路由
    const criticalRoutes = ['/work', '/story', '/contact', '/store'];
    
    criticalRoutes.forEach(route => {
      router.prefetch(route);
    });

    // 优化图片懒加载
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px'
    });

    images.forEach(img => imageObserver.observe(img));

    // 预连接到外部资源
    const preconnectLinks = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = href;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // 清理函数
    return () => {
      imageObserver.disconnect();
    };
  }, [router]);

  useEffect(() => {
    // 监控页面性能
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          
          // 只在开发环境下输出性能信息
          if (process.env.NODE_ENV === 'development') {
            console.log('页面加载性能:', {
              '页面加载时间': `${loadTime.toFixed(2)}ms`,
              'DOM内容加载时间': `${domContentLoaded.toFixed(2)}ms`,
              '首次内容绘制': navigation.responseStart - navigation.fetchStart,
            });
          }
        }
      }
    };

    // 延迟测量以确保页面完全加载
    const timer = setTimeout(measurePerformance, 1000);
    
    return () => clearTimeout(timer);
  }, [router.pathname]);

  return null;
};

export default PerformanceOptimizer;