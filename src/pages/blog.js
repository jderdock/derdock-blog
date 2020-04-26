import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import './blog.scss'

const IndexPage = ({ data }) => (
 <Layout>
  <SEO title="Blog" />
  <section class="px-2 sm:px-2 max-w-3xl mx-auto">
   <h1 class="mb-12">Blog Posts</h1>
   {data.allMarkdownRemark.edges.map(({ node }) => (
    <article key={node.id} class="mb-8">
     <h1 class="text-xl m-0 font-extrabold">
      <Link to={node.frontmatter.slug}>{node.frontmatter.title} </Link>
     </h1>
     <time pubdate="pubdate" class="text-xs font-sans">
      {node.frontmatter.date}
     </time>
     <p class="mt-2">{node.frontmatter.description}</p>
    </article>
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
