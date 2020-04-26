/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions }) => {
 // **Note:** The graphql function call returns a Promise
 // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info

 const result = await graphql(`
  query {
   allMarkdownRemark {
    edges {
     node {
      frontmatter {
       slug
      }
     }
    }
   }
  }
 `)

 const path = require(`path`)
 const { createPage } = actions

 result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  createPage({
   path: node.frontmatter.slug,
   component: path.resolve(`./src/templates/post.js`),
   context: {
    // Data passed to context is available
    // in page queries as GraphQL variables.
    slug: node.frontmatter.slug,
   },
  })
 })
}
