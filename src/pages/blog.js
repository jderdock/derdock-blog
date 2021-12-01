import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import './blog.scss'

const IndexPage = ({ data }) => (
 <Layout>
  <SEO title="Blog" />
  <section class="px-2 lg:px-0 max-w-3xl mx-auto">
   <h1 class="mb-6 lg:mb-12">Blog Posts</h1>
   {data.allMarkdownRemark.edges.map(({ node }) => (
    <Link to={node.frontmatter.slug}>
     <article
      key={node.id}
      class="pb-4 pt-4 px-0 lg:px-6 hover:bg-gray-300 hover:cursor-pointer"
     >
      <h1 class="text-xl m-0 font-extrabold">{node.frontmatter.title}</h1>
      <time pubdate="pubdate" class="text-xs font-sans">
       {node.frontmatter.date}
      </time>
      <p class="mt-2">{node.frontmatter.description}</p>
     </article>
    </Link>
   ))}
  </section>
 </Layout>
)

export default IndexPage

export const query = graphql`
 query {
  allMarkdownRemark(
   filter: { frontmatter: { draft: { eq: false } } }
   sort: { fields: frontmatter___date, order: DESC }
  ) {
   edges {
    node {
     id
     frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      slug
      description
     }
    }
   }
  }
 }
`
