module.exports = {
    title: 'David Angel',
    description: 'Software Engineer',
    permalink: '/:year/:month/:day/:slug',
    dest: './dist',
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
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.config.js"),
            require("autoprefixer")
        ]
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                ga: '' // UA-00000000-0
            }
        ]
    ],
}