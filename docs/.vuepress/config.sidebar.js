module.exports = {
    // {
    //   title: "css",
    //   path: '/webframe/css/',
    // },
    // {
    //   title: "vue",
    //   collapsable: false, // 让一个组展开
    //   children: [
    //     ['/webframe/vue/messageWays', "vue组件中的8种通信方式"]
    //   ]
    // },
    // {

    // },
    '/webframe/': [
        ['', '目录'],
        // {
        //     title: 'css',
        //     name: 'css',
        //     collabsable: false,
        //     sidebarDepth: 0,
        //     children: [
        //         ['css/', '目录'],
        //         ['css/1', 'css高频面试题'],
        //         ['css/render', '渲染树的形成原理你真的很懂吗?'],
        //     ],
        // },
        // {
        //     title: 'javascript',
        //     name: 'javascript',
        //     collabsable: false,
        //     sidebarDepth: 0,
        //     children: [
        //         ['javascript/', '目录'],
        //         ['javascript/datatype', '[数据类型]面试常问javascript数据类型'],
        //         ['javascript/scoped', '[作用域]作用域于作用域链'],
        //         ['javascript/closure', 'javascript中的闭包这一篇就够了'],
        //         ['javascript/higherFunc', '[高阶函数]高阶函数详解与实战训练'],
        //         ['javascript/copy', '[赋值拷贝]js中赋值•浅拷贝•深拷贝'],
        //         ['javascript/prototype', 'javascript中原型链'],
        //         ['javascript/this', 'this关键字'],
        //         ['javascript/unique', '如何答一道惊艳面试官的数组去重问题？'],
        //         ['javascript/exports', 'exports和module.exports的区别'],
        //         ['javascript/recircleFun', '聊聊面试必考-递归思想与实战'],
        //         ['javascript/unique', 'js中数组去重(面试如何回答)'],
        //     ],
        // },
        // {
        //     title: 'es6',
        //     name: 'es6',
        //     collabsable: false,
        //     sidebarDepth: 0,
        //     children: [
        //         ['es6/', '目录'],
        //         ['es6/classInherit', '类与继承'],
        //         ['es6/promise', 'ES6 promise'],
        //         ['es6/async-await', 'async和await讲解'],
        //     ],
        // },
        // {
        //     title: 'vue',
        //     name: 'vue',
        //     collabsable: false,
        //     sidebarDepth: 0,
        //     children: [
        //     ['vue/messageWays', 'vue中使用的8种通信方式'],
        //     // ['vue/storeEncapsulation', 'vue中store模块化封装']
        // ],
        // },
        // {
        //     title: '工具',
        //     name: 'tool',
        //     collabsable: false,
        //     sidebarDepth: 0,
        //     children: [
        //         // ['tool/picGo', 'github 图床'],
        //         // ['tool/', '软件资源'],
        //         ['tool/vuepressBlog', 'vuepress搭建个人博客'],
        //         // ['tool/chrome', 'chrome常用插件及日常问题'],
        //         // ['tool/node-versions', 'node以前版本'],
        //     ],
        // },
        {
            title: 'web-ant-ui',
            name: 'tool',
            collabsable: false,
            sidebarDepth: 0,
            children: [
                ['tool/web-ui', '文档'],
                ['tool/web-ui-demo', 'demo代码'],
            ],
        },
    ],
    '/interview/': [
        ['css', '面试题-CSS篇'],
        ['CSS1', 'CSS 常考面试题资料'],
        ['EventLoop', 'EventLoop篇'],
        ['DevTools', 'DevTools Tips'],
        ['js10', '面试题-JS篇'],
        ['JS0', 'JS 思考题'],
        ['JS1', 'JS 基础知识点及常考面试题（一）'],
        ['JS2', 'JS 基础知识点及常考面试题（二）'],
        ['JS', 'JS 进阶知识点及常考面试题'],
        ['JS3', 'JS 异步编程及常考面试题'],
        ['algorithm', '常考算法题解析'],
        ['ES6', 'ES6知识点及常考面试题'],
        ['unique', '如何答一道惊艳面试官的数组去重问题？'],
        ['rewriteJs', '手写代码[`编程`]'],
        ['React', 'React 常考基础知识点'],
        ['React1', 'React 常考进阶知识点'],
        ['ReactAndVue', 'React和vue区别'],
        ['vue', 'vue篇'],
        ['Vue1', 'Vue 常考基础知识点'],
        ['Vue2', 'Vue 常考进阶知识点'],
        ['HTTP', 'HTTP 及 TLS'],
        ['HTTP2', 'HTTP 2 及 HTTP 3'],
        ['browser', '浏览器缓存机制'],
        ['browser1', '浏览器基础知识点及常考面试题'],
        ['browser2', '浏览器浏览器渲染原理缓存机制'],
        // ['InterviewSkills', '面试常用技巧'],
        ['performanceOptimization', '性能优化'],
    ],
    '/node/': [
        ['what', 'node.js究竟是什么'],
        ['event_loop', 'node事件循环'],
        ['path', 'node核心模块-path'],
        ['module_fs', 'node核心模块-fs'],
        ['stream', 'node核心模块-stream'],
        ['buffer', 'node核心模块-buffer'],
        ['processAndThread', '深入理解进程与线程'],
        ['queue', 'Node.js中的消息队列'],
        ['overflow', 'Node.js 内存溢出时如何处理？'],
        ['events', '[源码解读]一文彻底搞懂Events模块'],
        ['errors', 'nodejs十个常见误区'],
        ['APIGateway', 'Node.js 搭建一个 API 网关'],
    ],
    '/database/': [
        ['choice', 'SQL 和 NoSQL 的区别与选择'],
        ['mysql/baseFrame', 'MySQL 基础架构你不知道的那些事'],
        ['mysql/logSystem', '删库跑路后真的没有办法弥补了吗'],
        ['mysql/optimize', '常用的数据库语句'],
        ['mysql/writeSql', '如何写优雅的SQL原生语句'],
        ['detail-redis1', '详细学习redis_入门篇'],
        ['detail-redis2', '详细学习redis_进阶篇'],
        ['detail-redis3', '详细学习redis_项目实战篇'],
    ],
    '/about/': [['2019_year_end', '2019年年终总结']],
}
