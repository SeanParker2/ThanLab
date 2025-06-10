# Than Studio Max 网站

## 项目简介
Than Studio Max是一个展示设计工作室作品集的响应式网站，使用Next.js和Tailwind CSS构建。

## 本地开发

### 安装依赖
```bash
npm install
# 或
yarn install
```

### 运行开发服务器
```bash
npm run dev
# 或
yarn dev
```
开发服务器将在 [http://localhost:3000](http://localhost:3000) 启动。

### 构建生产版本
```bash
npm run build
# 或
yarn build
```

## 部署流程

### 推送代码到GitHub
1. 初始化Git仓库（如果尚未初始化）
```bash
git init
```

2. 添加所有文件到Git
```bash
git add .
```

3. 提交更改
```bash
git commit -m "你的提交信息"
```

4. 添加远程仓库（如果尚未添加）
```bash
git remote add origin https://github.com/seanparker2/ThanStudioMax.git
```

5. 推送到GitHub主分支
```bash
git push -u origin main
```

### 部署到GitHub Pages

#### 方法一：使用gh-pages包（推荐）
1. 构建项目
```bash
npm run build
```

2. 创建.nojekyll文件（防止GitHub Pages忽略下划线开头的文件）
```bash
touch out/.nojekyll
```

3. 使用gh-pages包部署
```bash
npx gh-pages -d out --dotfiles
```

#### 方法二：手动部署
1. 构建项目
```bash
npm run build
```

2. 切换到gh-pages分支（如果不存在则创建）
```bash
git checkout -b gh-pages
```

3. 复制构建文件到根目录
```bash
cp -R out/* .
cp out/.nojekyll .
```

4. 添加并提交文件
```bash
git add .
git commit -m "部署网站到GitHub Pages"
```

5. 推送到gh-pages分支
```bash
git push -u origin gh-pages
```

6. 在GitHub仓库设置中，配置GitHub Pages使用gh-pages分支

## 常见问题

### 部署后网站样式或图片丢失
- 确保.nojekyll文件已创建并推送
- 检查package.json中的homepage字段是否正确设置为`https://seanparker2.github.io/ThanStudioMax`

### GitHub连接问题
如果推送时遇到网络问题，可以尝试以下方法：
- 使用SSH代替HTTPS：`git remote set-url origin git@github.com:seanparker2/ThanStudioMax.git`
- 清理gh-pages缓存：`npx gh-pages-clean`

## 项目结构
- `/src/pages` - 网站的页面组件
- `/public` - 静态资源（图片、图标等）
- `/src/components` - 可复用组件
- `/src/styles` - 全局样式文件
# Than
