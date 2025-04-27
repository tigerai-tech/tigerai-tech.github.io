import {defineConfig} from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'TigerAI',
    logo: "/tiger.webp",
    socialLinks: {
      github: 'https://github.com/tigerai-tech',
    },
    prefersColor: { default: 'auto' },
    mode: 'site',
    hash: true,
    locales: [['en-US', 'English'], ['zh-CN', '中文']],
    nav: {
      // mode可选值有：override、append、prepend
      // - override: 直接覆盖约定导航，与 nav: [{ title: 'Blog', link: '/blog' }] 配置相同
      // - append: 将 value 中的导航追加到约定路由后面
      // - prepend: 将 value 中的导航添加到约定路由前面
      mode: "override",
      value: [
        {
          title: 'SME Solutions',
          // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套
          // ：
          children: [
            { title: '🗃️ MES', link: '/Sme-solutions/mes' },
            { title: '📹 Computer Vision ', link: '/Sme-solutions/computer-vision' },
          ],
        },
        {
          title: 'OSS',
          // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套
          // ：
          children: [

            { title: '⬇️ Download', link: '/products/download' },
            { title: '🔷 Folder Icon', link: '/products/folder-icon' },
            { title: '🪪 WordCard ', link: '/products/dict-card' },
          ],
        },
        // { title: 'Document', link: 'https://jimmy-pink.github.io/' }
      ]
    },

    footer:"Copyright © 2025 | Powered by <a href=\"https://github.com/jimmy-pink\" target=\"_blank\" rel=\"noreferrer\">Jimmy</a>",
  },
});
