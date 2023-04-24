"use client";

import { Navbar } from "@/components";
import React from "react";
import { motion } from "framer-motion";
import { navVariants1, navVariants2, navVariants3 } from "../utils/motion";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <motion.div variants={navVariants2} initial="hidden" whileInView="show">
        <div className="mt-[9%] ml-[19%]">
          <h1 className="text-5xl md:text-5xl lg:text-7xl">Jonathan</h1>
          <h1 className="text-5xl md:text-5xl lg:text-7xl text-primary-orange">Web developer</h1>
        </div>
      </motion.div>
      <motion.div variants={navVariants3} initial="hidden" whileInView="show">
        <a href="#portfolio">
          <img
            src="arrow-down2.svg"
            className="bg-text-primary-orange lg:w-[6%] mx-auto mt-[15%]"
          />
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
