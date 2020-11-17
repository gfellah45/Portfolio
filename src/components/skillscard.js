import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
const Skillscard = ({ name, image, time }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 + time }}
      className="flex justify-center items-center flex-col"
    >
      <img src={image} alt="html" />
      <p className="text-2xl text-white font-portfoliohead font-semibold my-12">
        {name}
      </p>
    </motion.div>
  );
};

Skillscard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.number,
};

export default Skillscard;
