import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
 <Layout>
  <SEO title="Contact" description="How to get in touch with James Derdock" />
  <section class="px-2 lg:px-0 max-w-3xl mx-auto">
   <h1>Contact</h1>
   <p>
    You can <a href="mailto:james@derdock.com">email me</a> at
    james@derdock.com.
   </p>
   <p>
    I'm also on <a href="https://twitter.com/derdock">Twitter</a> and{' '}
    <a href="https://github.com/jderdock">GitHub</a>.
   </p>
  </section>
 </Layout>
)

export default ContactPage
