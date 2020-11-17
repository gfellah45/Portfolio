import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, "jerry", "aaron", "fronted"]}
        title="Home"
      />

      <div className="w-full flex justify-center items-center py-2 md:py-16">
        <div className=" relative">
          <div className="pt-6 lg:pt-0 z-10">
            <motion.h1
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-portfoliohead text-white leading-12 tracking-widest text-4xl lg:text-4xl w-full lg:w-9/12 pb-5"
            >
              Jerry Aaron - <br /> <span>FrontEnd Developer</span>
            </motion.h1>
            <div className="text-gray-300 font-portfoliotext leading-12 text-center  lg:text-justify text-lg lg:text-lg tracking-normal lg:tracking-normal w-full lg:w-7/12">
              {"I am passionate about creating intuitive and engaging interfaces with emphasis on aesthetics, efficiency and security."
                .split(" ")
                .map((item, key) => (
                  <motion.p
                    whileHover={{ scale: 1.1 }}
                    key={key}
                    className="inline-block z-40 ml-2"
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 * key }}
                      className="inline-block  z-0"
                    >{` ${item}`}</motion.span>
                  </motion.p>
                ))}
            </div>
          </div>
          <motion.div
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            className=" absolute right-0  z-0 hidden lg:block "
            style={{ top: "55px" }}
          >
            <img
              src="https://res.cloudinary.com/gfellah45/image/upload/v1605211988/Portfolio/Rectangle_3_kwh9er.png"
              alt="jerry"
            />
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
