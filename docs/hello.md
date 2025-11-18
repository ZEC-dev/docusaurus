```ts
// docusaurus.config.ts

// 导入必要的类型定义
import { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// 使用 defineConfig 包装配置，提供更好的类型提示
const config: Config = {
  // ======================
  // 站点基本信息配置
  // ======================
  title: '我的技术文档站',           // 网站标题，显示在浏览器标签页和首页
  tagline: '记录、学习、分享',       // 网站标语，显示在首页和元数据中
  favicon: 'img/favicon.ico',       // 网站图标路径，相对于 static 目录

  // ======================
  // 部署相关配置
  // ======================
  url: 'https://your-domain.com',   // 网站的完整URL，用于生成sitemap和RSS
  baseUrl: '/',                     // 网站的基础路径，如果部署在子路径需要修改
  
  // ======================
  // 国际化配置
  // ======================
  i18n: {
    defaultLocale: 'zh-Hans',       // 默认语言：简体中文
    locales: ['zh-Hans'],           // 支持的语言列表
  },

  // ======================
  // 链接检查行为
  // ======================
  onBrokenLinks: 'throw',           // 遇到损坏链接时的行为：throw(抛出错误) | warn(警告) | ignore(忽略)
  onBrokenMarkdownLinks: 'warn',    // 损坏的markdown链接处理

  // ======================
  // 组织信息（主要用于GitHub Pages部署）
  // ======================
  organizationName: 'your-github-username',    // GitHub组织或用户名
  projectName: 'your-repo-name',               // GitHub仓库名

  // ======================
  // 主题配置 - 控制网站外观和交互
  // ======================
  themeConfig: {
    // ------------------
    // 颜色模式配置
    // ------------------
    colorMode: {
      defaultMode: 'light',         // 默认颜色模式：'light' | 'dark'
      disableSwitch: false,         // 是否禁用模式切换按钮
      respectPrefersColorScheme: true, // 是否尊重操作系统颜色偏好
    },

    // ------------------
    // 导航栏配置
    // ------------------
    navbar: {
      title: '技术文档站',          // 导航栏左侧显示的标题
      logo: {
        alt: '网站Logo',           // Logo的alt文本
        src: 'img/logo.svg',       // 浅色模式Logo路径
        srcDark: 'img/logo-dark.svg', // 深色模式Logo路径（可选）
      },
      // 导航栏菜单项配置
      items: [
        // 文档链接
        {
          type: 'doc',              // 类型：文档
          docId: 'intro',           // 文档ID，对应docs目录下的文件名（不含扩展名）
          position: 'left',         // 位置：left | right
          label: '文档',            // 显示文本
        },
        // 博客链接
        {
          to: '/blog',              // 目标路径
          label: '博客', 
          position: 'left',
        },
        // 自定义页面链接
        {
          to: '/about',             
          label: '关于我们', 
          position: 'left',
        },
        // GitHub链接（右侧）
        {
          href: 'https://github.com/your-username/your-repo',
          label: 'GitHub',
          position: 'right',
        },
      ],
      hideOnScroll: true,           // 滚动时是否隐藏导航栏
    },

    // ------------------
    // 页脚配置
    // ------------------
    footer: {
      style: 'dark',                // 页脚样式：'dark' | 'light'
      // 页脚链接分组
      links: [
        {
          title: '文档',            // 分组标题
          items: [
            {
              label: '快速开始',
              to: '/docs/intro',    // 链接目标
            },
            {
              label: 'API参考',
              to: '/docs/api',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/your-repo',
            },
            {
              label: '讨论区',
              href: 'https://github.com/your-repo/discussions',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: '关于',
              to: '/about',
            },
          ],
        },
      ],
      // 页脚版权信息
      copyright: `版权所有 © ${new Date().getFullYear()} 我的项目. 使用 Docusaurus 构建。`,
    },

    // ------------------
    // 公告栏配置
    // ------------------
    announcementBar: {
      id: 'support_us',             // 公告栏ID，用于区分不同公告
      content: '⭐️ 如果这个项目对你有帮助，欢迎给个Star！', // 公告内容，支持HTML
      backgroundColor: '#fafbfc',   // 背景颜色
      textColor: '#091E42',         // 文字颜色
      isCloseable: true,            // 是否可关闭
    },

    // ------------------
    // 文档侧边栏配置
    // ------------------
    docs: {
      sidebar: {
        hideable: true,             // 是否允许隐藏侧边栏
        autoCollapseCategories: true, // 是否自动折叠其他分类
      },
    },

    // ------------------
    // 元数据配置（用于SEO）
    // ------------------
    metadata: [
      {name: 'keywords', content: '技术文档, 博客, Docusaurus, React'},
      {name: 'description', content: '基于Docusaurus构建的技术文档网站'},
    ],

    // ------------------
    // Google Analytics配置（可选）
    // ------------------
    gtag: {
      trackingID: 'G-XXXXXXXXXX',   // 你的GA跟踪ID
      anonymizeIP: true,            // 是否匿名化IP
    },
  },

  // ======================
  // 预设配置 - 主要功能集成
  // ======================
  presets: [
    [
      'classic',                    // 使用经典预设
      {
        // 文档配置
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'), // 侧边栏配置文件路径
          // 在文档页面显示编辑此页链接
          editUrl: 'https://github.com/your-username/your-repo/edit/main/',
          // 显示最后更新时间
          showLastUpdateTime: true,
          // 显示最后更新作者
          showLastUpdateAuthor: true,
        },
        // 博客配置
        blog: {
          showReadingTime: true,    // 显示阅读时间
          editUrl: 'https://github.com/your-username/your-repo/edit/main/',
          // 博客列表页每页显示的文章数量
          postsPerPage: 10,
          // 博客存档配置
          blogSidebarTitle: '所有文章',
          blogSidebarCount: 'ALL',
        },
        // 主题配置
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // 自定义CSS文件路径
        },
      } satisfies Preset.Options,
    ],
  ],

  // ======================
  // 插件配置 - 功能扩展
  // ======================
  plugins: [
    // 自定义插件示例
    // [
    //   '@docusaurus/plugin-ideal-image',
    //   {
    //     quality: 70,
    //     max: 1030,
    //     min: 640,
    //   },
    // ],
  ],

  // ======================
  // 自定义字段 - 可在组件中访问
  // ======================
  customFields: {
    // 在这里添加自定义配置，可以通过 useDocusaurusContext() 在组件中访问
    admin: {
      name: '你的名字',
      email: 'your-email@example.com',
    },
    // 项目信息
    project: {
      version: '1.0.0',
      repository: 'https://github.com/your-username/your-repo',
    },
  },

  // ======================
  // 脚本和样式表注入
  // ======================
  scripts: [
    // 自定义脚本
    // {
    //   src: '/js/custom.js',
    //   async: true,
    // },
  ],
  stylesheets: [
    // 自定义样式表
    // {
    //   href: 'https://cdn.jsdelivr.net/npm/custom-font@2.0.0/css/custom-font.css',
    // },
  ],

  // ======================
  // 头部标签配置
  // ======================
  headTags: [
    // 自定义head标签
    // {
    //   tagName: 'link',
    //   attributes: {
    //     rel: 'preconnect',
    //     href: 'https://example.com',
    //   },
    // },
  ],

  // ======================
  // 标记配置（可选）
  // ======================
  markdown: {
    mermaid: true,                  // 是否启用Mermaid图表支持
    // 语法高亮配置
    prism: {
      theme: require('prism-react-renderer/themes/github'),   // 浅色主题
      darkTheme: require('prism-react-renderer/themes/dracula'), // 深色主题
      additionalLanguages: ['java', 'php', 'rust', 'bash'], // 额外支持的语言
    },
  },

  // ======================
  // 尾部斜杠配置（影响URL生成）
  // ======================
  trailingSlash: undefined,         // undefined | true | false - 通常保持undefined让Docusaurus自动处理
};

// 导出配置
export default config;
```