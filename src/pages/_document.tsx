import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="zh">
      <Head>
        {/* 基础 Meta 标签 */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Than Design" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Than Design Studio" />
        <meta name="generator" content="Next.js" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Than Design" />
        
        {/* DNS 预取和预连接 */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        
        {/* Favicon 和图标 */}
        <link rel="icon" href={`${process.env.NODE_ENV === 'production' ? '/ThanLab' : ''}/favicon.ico`} sizes="any" />
        <link rel="icon" href={`${process.env.NODE_ENV === 'production' ? '/ThanLab' : ''}/favicon.svg`} type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href={`${process.env.NODE_ENV === 'production' ? '/ThanLab' : ''}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.NODE_ENV === 'production' ? '/ThanLab' : ''}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.NODE_ENV === 'production' ? '/ThanLab' : ''}/favicon-16x16.png`} />
        <link rel="manifest" href={`${process.env.NODE_ENV === 'production' ? '/ThanLab' : ''}/site.webmanifest`} />
        <link rel="mask-icon" href={`${process.env.NODE_ENV === 'production' ? '/ThanLab' : ''}/safari-pinned-tab.svg`} color="#000000" />
        
        {/* 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Than Studio",
              "description": "专业设计工作室，提供品牌设计、UI/UX设计、产品设计等服务",
              "url": "https://thanstudio.com",
              "logo": "https://thanstudio.com/logo/than-studio-logo.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+86-180-9898-6553",
                "contactType": "customer service",
                "email": "unsaturated2025@gmail.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "深圳市",
                "addressRegion": "广东省",
                "addressCountry": "CN"
              },
              "sameAs": [
                "https://thanstudio.com"
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}