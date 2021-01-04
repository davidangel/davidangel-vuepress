const autometaOptions = {
  site: {
    name: "David Angel",
    twitter: "davidius"
  },
  canonical_base: "https://davidangel.net"
}

module.exports = {
  title: "David Angel",
  description:
    "My name is David Angel. I’m a software engineer with a passion for finding efficient ways to solve problems.",
  permalink: "/:year/:month/:day/:slug",
  dest: "./dist",
  theme: "@vuepress/theme-blog",
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Resume",
        link: "/resume/"
      },
      {
        text: "Contact",
        link: "/contact/"
      }
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
      "@vuepress/blog",
      {
        feed: {
          canonical_base: "https://davidangel.net/"
        },
        directories: [
          {
            id: "post",
            dirname: "_posts",
            path: "/blog/"
          }
        ],
        frontmatters: [
          {
            // Unique ID of current classification
            id: "tag",
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ["tag"],
            // Path of the `entry page` (or `list page`)
            path: "/tag/",
            // Layout of the `entry page`
            layout: "Layout",
            // Layout of the `scope page`
            scopeLayout: "Tag"
          }
        ]
      }
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-5083765-21"
      }
    ],
    [
      "sitemap",
      {
        hostname: "https://davidangel.net"
      }
    ],
    ["autometa", autometaOptions]
  ]
}
