module.exports = {
    title: 'Beego',
    description: 'Beego Example',
    head: [
       ['meta', { name: 'keywords', content: 'Go,golang,beego' }]
    ],

    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      nav: [
        {
          text: '首页',
          link: '/'
        },
        {
              text: '加入我们',
              link: '/join/'
        },
        {
          text: '了解更多',
          items: [
              { text: 'Beego', link: 'https://github.com/astaxie/beego' },
          ]
        },

      ],
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/beego-dev/beego-example',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        // repoLabel: '查看源码',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '在github.com上编辑此页',
        sidebar: {
        },
        sidebarDepth : 2,
        lastUpdated: '上次更新',
        serviceWorker: {
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        },
    },
    plugins: [
        ['@vuepress/last-updated',
         {
             transformer: (timestamp, lang) => {
                 // 不要忘了安装 moment
                 const moment = require('moment')
                moment.locale("zh-cn")
                 return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
             },

             dateOptions:{
               hours12: true
             }
        }],
        '@vuepress/back-to-top',
        '@vuepress/active-header-links',
        '@vuepress/medium-zoom',
        '@vuepress/nprogress'
    ]
  }
