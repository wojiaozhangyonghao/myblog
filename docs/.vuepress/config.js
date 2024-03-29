const slidebar = require('./config.sidebar')
const update = require('./config.update')
module.exports = {
    title: '前端进阶',
    base: '/myblog/',
    dest: './web',
    // description: '公众号',
    description: '欢迎来到前端进阶博客',

    head: [
        [
            'link',
            {
                rel: 'shortcut icon',
                href: '/favicon.ico',
                type: 'iamge/x-icon',
            },
        ],
        [
            'meta',
            {
                name: 'keywords',
                content: '前端进阶 前端文章',
            },
        ],
    ],

    shouldPreload: (file, type) => {
        // 基于文件扩展名的类型推断
        // if(type == 'script')
        return false
    },

    // serviceWorker: true, // 是否开启 PWA
    // repo: 'https://github.com/wojiaozhangyonghao/myblog',
    themeConfig: {
        logo: '',
        repoLabel:'gitHub',
        // repo: 'https://www.baidu.com/',
        repo: 'https://github.com/',
        sidebarDepth: 1,
        update: null,
        nav: [
            {
                text: '主页',
                link: '/',
            },
            {
                text: '前端',
                link: '/webframe/',
            },
            // {
            //     text: '数据库',
            //     link: '/database/',
            // },
            // {
            //     text: '面试问题',
            //     link: '/interview/',
            // },
            //  {
            //     text: '工作总结',
            //     link: '/node/',
            // },
            // {
            //     text: 'koala-node',
            //     link: '/node/',
            // },
            // {
            //     text: '招聘●内推',
            //     link: 'https://github.com/koala-coding/FE-Infer',
            // },
            // {
            //     text: '关于我',
            //     link: '/about/2019_year_end.md',
            // },
        ],
        sidebar: slidebar,
    },

    // 插件
    plugins: [
        ['@vuepress/back-to-top'], // 返回顶部
        [
            '@vuepress/active-header-links',
            {
                // 页面滚动时自定激活侧边栏链接
                sidebarLinkSelector: '.sidebar-link',
                headerAnchorSelector: '.header-anchor',
            },
        ],
        ['@vuepress/nprogress'],
        require('./common-plugin.js'),
    ],

    chainWebpack: (config, isServer) => {
        // 去除打包后文件的预加载
        config.plugins.delete('html')
        config.plugins.delete('preload') // TODO: need test
        config.plugins.delete('prefetch') // TODO: need test
    },
}
