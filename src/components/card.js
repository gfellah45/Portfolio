import React from "react";
import PropTypes from "prop-types";

import { motion } from "framer-motion";
import { Link } from "gatsby";

const Card = ({ image, company, project, url }) => {
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      className="  w-8/12  m-12"
      style={{ height: "60vh" }}
    >
      <div
        className="w-full relative border-2 h-full rounded-lg z-10 bg-gradient-to-tr from-red-300 to-green-500"
        style={{}}
      >
        <Link to={url} target="_blank">
          <motion.div
            initial={{ rotate: 5 }}
            whileHover={{ rotate: 0 }}
            className="border-2 absolute w-full h-full transform origin-bottom-center rounded-lg z-0 hover:rotate-0"
            style={{
              transform: "rotate(5deg)",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          ></motion.div>
        </Link>
      </div>
      <h2 className="text-portfolionavbar font-semibold text-2xl">{company}</h2>
      <p className="text-portfolionavbar  text-lg italic">{project}</p>
    </motion.div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default Card;
