import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ContactPage = () => (
 <Layout>
  <Seo title="Contact" description="How to get in touch with James Derdock" />
  <section class="px-2 lg:px-0 max-w-3xl mx-auto">
   <h1>Contact</h1>
   <form name="contact" method="POST" data-netlify="true" action="/thank-you">
    <p>
     <label class="text-base m-0 font-semibold font-sans">
      Your Name:{' '}
      <input type="text" name="name" class="border border-solid border-black" />
     </label>
    </p>
    <p>
     <label class="text-base m-0 font-semibold font-sans">
      Your Email:{' '}
      <input
       type="email"
       name="email"
       class="border border-solid border-black"
      />
     </label>
    </p>
    <p>
     <label class="text-base m-0 font-semibold font-sans">
      Message:{' '}
      <textarea
       name="message"
       class="border border-solid border-black w-1/2"
      ></textarea>
     </label>
    </p>
    <p>
     <button
      type="submit"
      class="mt-6 block font-bold font-sans bg-black px-6 py-3 uppercase text-white hover:bg-red-600"
     >
      Send
     </button>
    </p>
   </form>
  </section>
 </Layout>
)

export default ContactPage
