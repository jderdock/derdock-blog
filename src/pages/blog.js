import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
 <Layout>
  <SEO title="Blog" />
  <section class="px-2 sm:px-2 max-w-3xl mx-auto">
   <h1>Blog Posts</h1>
   {data.allMarkdownRemark.edges.map(({ node }) => (
    <div key={node.id}>
     <article>
      <h1>
       <Link to={node.frontmatter.slug}>{node.frontmatter.title} </Link>
      </h1>
      <time pubdate="pubdate">{node.frontmatter.date}</time>
      <p>{node.frontmatter.description}</p>
     </article>
    </div>
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
