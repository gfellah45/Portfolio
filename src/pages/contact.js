import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section>
        <motion.form
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          className="mx-auto md:w-1/2"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <p className="mb-8 leading-loose text-white text-2xl font-semibold font-portfoliohead">
            Want to work with me or hire me?
          </p>

          <label
            className="block mb-2 text-xs font-bold uppercase text-white"
            htmlFor="first-name"
          >
            First Name
          </label>

          <input
            className="w-full mb-6 form-input px-4"
            id="first-name"
            placeholder="Bill"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase text-white"
            htmlFor="last-name"
          >
            Last Name
          </label>

          <input
            className="w-full mb-6 form-input px-4"
            id="last-name"
            placeholder="Murray"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase text-white"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            className="w-full mb-6 form-textarea px-4"
            id="message"
            placeholder="Say something..."
            rows="8"
          />

          <button className="px-4 py-2 text-sm font-bold text-gray-800 bg-white border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
            Submit
          </button>
        </motion.form>
      </section>
    </Layout>
  );
}

export default ContactPage;
