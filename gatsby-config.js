module.exports = {
  siteMetadata: {
    title: 'SSD\'s Blog',
    description: '',
    author: 'seosd97',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-slug',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-8WG06YM3WX',
        head: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/blog-posts-md/posts/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/blog-posts-md/posts`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1100,
              linkImagesToOriginal: false,
              tracedSVG: true,
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              elements: ['h2', 'h3'],
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ssd-blog',
        short_name: 'ssd-blog',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
