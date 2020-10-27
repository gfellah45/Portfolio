import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="">
      <div className="flex flex-wrap items-center justify-between w-11/12 p-4 mx-auto md:p-8">
        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            
            <span className="text-xl font-bold tracking-tight">
              <img src="https://res.cloudinary.com/gfellah45/image/upload/v1603720282/Portfolio/Group_2_1_ekqgzx.png" alt={site.title} />
            </span>
          </h1>
        </Link>

        <button
          className="items-center block px-3 py-2 text-white rounded "
          onClick={() => toggleExpansion(!isExpanded)}
        >
         <svg width="46" height="18" viewBox="0 0 46 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2H44" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <path d="M16 16H44" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        </svg>


        </button>

        <nav
          className="hidden md:items-center w-full md:w-auto"
             
        >
          {[
            {
              route: `/about`,
              title: `Projects`,
            },
            {
              route: `/skills`,
              title: `Skills`,
            },
            {
              route: `/blog`,
              title: `Blog`,
            },
            {
              route: `/contact`,
              title: `Contact Me`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
