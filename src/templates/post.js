import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
 const post = data.markdownRemark
 return (
  <Layout>
   <div class="max-w-3xl mx-auto">
    <p>
     <Link to="/">Blog</Link> / {post.frontmatter.title}
    </p>
   </div>
   <article class="px-2 sm:px-2 max-w-3xl mx-auto">
    <header>
     <h1>{post.frontmatter.title}</h1>
     <p>
      Published: <time pubdate="pubdate">{post.frontmatter.date}</time>
     </p>
    </header>
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
   </article>
   <div class="px-2 sm:px-2 max-w-3xl mx-auto">
    <Link to="/">&#x2190; Back To Home</Link>
   </div>
  </Layout>
 )
}
export const query = graphql`
 query($slug: String!) {
  markdownRemark(frontmatter: { slug: { eq: $slug } }) {
   html
   frontmatter {
    title
    slug
    date(formatString: "MMMM DD, YYYY")
   }
  }
 }
`
