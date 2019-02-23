module.exports = {
    title: 'David Angel',
    description: 'My name is David Angel. I’m a web developer with a passion for finding efficient ways to solve problems.',
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
                ga: 'UA-5083765-21'
            }
        ]
    ],
}