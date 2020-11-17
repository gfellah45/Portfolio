import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

import { motion } from "framer-motion";

function Header() {
  // const [isExpanded, toggleExpansion] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const iconVariant = {
    open: {
      scale: 3,
      rotate: 45,
    },
    close: {
      scale: 2,
      rotate: 0,
    },
  };

  const navVariant = {
    open: {
      top: 0,
    },
    close: {
      top: "-100vh",
    },
  };
  const navVariant2 = {
    open: {
      opacity: 1,
    },
    close: {
      opacity: 0,
    },
  };

  const listVariant = {
    open: {
      y: 0,
    },
    close: {
      y: 10000,
    },
  };
  // const listVariant = {
  //   open: {
  //     rotate: -45,
  //   },
  //   close: {
  //     rotate: 0,
  //   },
  // };

  return (
    <header className="">
      <div className="flex flex-wrap items-center justify-between w-11/12 p-4 mx-auto md:p-8">
        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <span className="text-xl font-bold tracking-tight">
              <img
                src="https://res.cloudinary.com/gfellah45/image/upload/v1603720282/Portfolio/Group_2_1_ekqgzx.png"
                alt={site.title}
              />
            </span>
          </h1>
        </Link>

        <motion.svg
          onClick={() => setIsOpen((a) => !a)}
          initial={false}
          variants={iconVariant}
          animate={isOpen ? "open" : "close"}
          className="z-30"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
            fill={isOpen ? "#000" : "#fff"}
          />
        </motion.svg>

        <motion.nav
          variants={navVariant}
          initial={false}
          animate={isOpen ? "open" : "close"}
          className="fixed top-0 left-0 right-0 bg-portfolionavbar z-20 w-screen h-screen md:items-center md:w-auto"
        >
          <motion.div className="w-full h-full flex flex-col justify-center items-center ">
            <div className="flex flex-col items-center lg:flex-row ">
              {[
                {
                  route: `/`,
                  title: `Home`,
                  time: 0.6,
                },
                {
                  route: `/projects`,
                  title: `Projects`,
                  time: 0.8,
                },
                {
                  route: `/skills`,
                  title: `Skills`,
                  time: 1,
                },

                {
                  route: `/contact`,
                  title: `Contact Me`,
                  time: 1.02,
                },
              ].map((link) => (
                <motion.p
                  initial={false}
                  variants={listVariant}
                  animate={isOpen ? "open" : "close"}
                  transition={{ delay: link.time }}
                  key={link.title}
                >
                  <Link
                    className="block mt-4 text-2xl lg:text-4xl font-bold p-4 text-portfolio font-portfoliotext no-underline md:inline-block md:mt-0 md:ml-6"
                    to={link.route}
                  >
                    {link.title}
                  </Link>
                </motion.p>
              ))}
            </div>

            <motion.div
              variants={navVariant2}
              initial={false}
              animate={isOpen ? "open" : "close"}
              transition={{ delay: 1, type: "tween" }}
              className="w-11/12 m-auto absolute flex flex-col text-center lg:flex-row lg:justify-between  bg-gray-900 "
              style={{ bottom: "120px", height: "1px" }}
            >
              <p className=" pt-5 lg:pt-12 font-portfoliotext text-lg lg:text-2xl  ">
                Jerry.aaron45@gmail.com
              </p>
              <div className="pt-6 lg:pt-12  flex justify-center items-center">
                <p className="mx-5">
                  <Link
                    to="https://www.linkedin.com/in/jerry-aaron-agbo/"
                    target="_blank"
                  >
                    <img
                      src="https://res.cloudinary.com/gfellah45/image/upload/v1605088752/Vector_11_amzqra.png"
                      alt="linkden"
                    />
                  </Link>
                </p>
                <p className="mx-5">
                  <Link
                    to="https://www.linkedin.com/in/jerry-aaron-agbo/"
                    target="_blank"
                  >
                    <img
                      src="https://res.cloudinary.com/gfellah45/image/upload/v1605088757/Vector_12_mv1was.png"
                      alt="linkden"
                    />
                  </Link>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.nav>
      </div>
    </header>
  );
}

export default Header;
