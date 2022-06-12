module.exports = {
    title: 'VuePressNotes', // 设置网站标题
    dest: './dist',  // 设置输出目录
    base: '/vuepressNotes/',// 设置站点根路径
    repo:
        'https://github.com/changhengheng/vuepressNotes.git', // 添加 github 链接
    themeConfig:{
        lastUpdated: '上次更新',
        smoothScroll: true,
        nav: [
            {
              text: 'VuePressNotes',
              link: 'https://github.com/changhengheng/vuepressNotes',
            },
          ],
        sidebar: [
            ['/getting-started/1.初始化一个vuePress项目','初始化一个vuePress项目'],
            ['/getting-started/2.添加配置文件','添加配置文件'],
            ['/getting-started/3.页面','页面'],
            ['/getting-started/4.MarkDown扩展','MarkDown扩展'],
            ['/getting-started/5.静态资源','静态资源'],
            ['/getting-started/6.部署','部署'],
            ['/getting-started/7.主题','主题'],
            ['/using-a-plugin/','插件介绍'],
            ['/using-a-plugin/1.使用插件','使用插件'],
            ['/using-vue/','使用组件'],
            ['/themeConfig/侧边栏链接重命名','侧边栏链接重命名'],
            ['/themeConfig/跳转至指定的侧边栏','跳转至指定的侧边栏'],
        ],
    },
}