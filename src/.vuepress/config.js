module.exports = {
    title: 'David Angel',
    description: 'Software Engineer',
    permalink: '/:year/:month/:day/:slug',
    dest: './public',
    themeConfig: {
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Resume',
                link: '/resume/'
            },
            {
                text: 'Contact',
                link: '/contact/'
            },
        ]
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                ga: '' // UA-00000000-0
            }
        ],
        [
            'vuepress-plugin-rss',
            {
                base_url: '/',
                site_url: '',
                filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
                count: 20
            }
        ],
        'vuepress-plugin-janitor'
    ],
}