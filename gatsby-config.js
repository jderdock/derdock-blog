module.exports = {
 siteMetadata: {
  title: `James Derdock`,
  description: `James Derdock - Web Developer | Annapolis, MD`,
  author: `@derdock`,
 },
 plugins: [
  `gatsby-transformer-remark`,
  `gatsby-plugin-react-helmet`,
  {
   resolve: `gatsby-source-filesystem`,
   options: {
    name: `images`,
    path: `${__dirname}/src/images`,
   },
  },
  {
   resolve: `gatsby-source-filesystem`,
   options: {
    name: `src`,
    path: `${__dirname}/src/`,
   },
  },
  {
   resolve: `gatsby-source-filesystem`,
   options: {
    name: `posts`,
    path: `${__dirname}/content/`,
   },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
   resolve: `gatsby-plugin-manifest`,
   options: {
    name: `gatsby-starter-default`,
    short_name: `starter`,
    start_url: `/`,
    background_color: `#663399`,
    theme_color: `#663399`,
    display: `minimal-ui`,
    icon: `src/images/icon.png`, // This path is relative to the root of the site.
   },
   resolve: `gatsby-plugin-sass`,
   options: {
    postCssPlugins: [
     require('tailwindcss'),
     require('./tailwind.config.js'), // Optional: Load custom Tailwind CSS configuration
    ],
   },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  `gatsby-plugin-offline`,
 ],
}
