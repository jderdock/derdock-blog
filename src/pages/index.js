import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import './index.scss'

const IndexPage = ({ data }) => (
 <Layout>
  <SEO title="Home" />
  <div>
   <section class="px-2 sm:px-2 max-w-3xl mx-auto">
    <h1>About Me</h1>
    <p>
     I’m a web developer, husband and father of two. I’m using this blog as a
     place to try out languages, frameworks and platforms that I don’t use in my
     day job (namely the <a href="https://jamstack.org/">JAMstack</a>).
    </p>

    <p>
     I’m happily employed at{' '}
     <a href="https://www.prsguitars.com">PRS Guitars</a> in Stevensville, MD
     since early 2003. I'm probably one of the last people on earth with
     "Webmaster" in their job title.
    </p>

    <p>
     When I'm not picking up after children, I like to nerd out on{' '}
     <a href="https://www.discogs.com/user/_james/collection?header=1">music</a>
     , hi-fi gear and bicycles.
    </p>

    <p>
     This blog is powered by <a href="https://www.gatsbyjs.org/">Gatsby</a> and
     is running on <a href="https://www.netlify.com/">Netlify</a>. This
     incredible styling is being handled by{' '}
     <a href="https://tailwindcss.com">Tailwind CSS</a>, which I love. I’m
     currently trying out <a href="https://typora.io/">Typora</a> as a Markdown
     editor.
    </p>
   </section>
   <section class="px-2 sm:px-2 max-w-3xl mx-auto mt-12">
    <h1>Recent Blog Posts</h1>
    <div class="md:flex">
     {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
       <Link to={node.frontmatter.slug}>
        <article class="pb-8 pt-4 px-2 hover:bg-gray-300 hover:cursor-pointer">
         <h1 class="text-base m-0 font-semibold">{node.frontmatter.title}</h1>
         <time pubdate="pubdate" class="text-sm">
          {node.frontmatter.date}
         </time>
        </article>
       </Link>
      </div>
     ))}
    </div>
    <Link
     to="/blog"
     class="mt-6 block font-bold uppercase font-sans bg-black px-6 py-3 uppercase text-white"
    >
     Check out the full blog &rarr;
    </Link>
   </section>
  </div>
 </Layout>
)

export default IndexPage

export const query = graphql`
 query {
  allMarkdownRemark(
   filter: { frontmatter: { draft: { eq: false } } }
   sort: { fields: frontmatter___date, order: DESC }
   limit: 3
  ) {
   edges {
    node {
     id
     frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      slug
     }
    }
   }
  }
 }
`
