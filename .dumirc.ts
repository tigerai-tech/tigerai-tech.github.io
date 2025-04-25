import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'tiger',
    logo: "/tiger.webp",
    socialLinks: {
      github: 'https://github.com/tigerai-tech',
    },
    prefersColor: { default: 'auto' },
    nav: {
      // mode可选值有：override、append、prepend
      // - override: 直接覆盖约定导航，与 nav: [{ title: 'Blog', link: '/blog' }] 配置相同
      // - append: 将 value 中的导航追加到约定路由后面
      // - prepend: 将 value 中的导航添加到约定路由前面
      mode: "append",
      value: [{ title: 'Document', link: 'https://jimmy-pink.github.io/' }]
    },
    footer:"Copyright © 2025 | Powered by <a href=\"https://github.com/jimmy-pink\" target=\"_blank\" rel=\"noreferrer\">Jimmy</a>",
  },
});
