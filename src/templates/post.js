import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
 const post = data.markdownRemark
 return (
  <Layout>
   <div class="px-2 lg:px-0 max-w-3xl mx-auto">
    <p>
     <Link to="/">Blog</Link> /{' '}
     <span class="italic">{post.frontmatter.title}</span>
    </p>
   </div>
   <article class="px-2 lg:px-0 max-w-3xl mx-auto">
    <header>
     <h1 class="mb-2">{post.frontmatter.title}</h1>
     <p>
      <time pubdate="pubdate">{post.frontmatter.date}</time>
     </p>
    </header>
    <div dangerouslySetInnerHTML={{ __html: post.html }} class="py-6" />
   </article>
   <div class="px-2 lg:px-0 max-w-3xl mx-auto">
    <Link
     to="/blog"
     class="mt-6 block font-bold uppercase font-sans bg-black px-6 py-3 uppercase text-white hover:bg-red-600"
    >
     &larr; Back To Blog
    </Link>
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
