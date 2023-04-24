"use client";

import React from "react";
import { motion } from "framer-motion";
import { navVariants1 } from "../utils/motion";


const Navbar = () => {
  return (
    <div>
      <motion.div
        variants={navVariants1}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* <nav className="grid grid-cols-5 mt-18">
          <img
            src="test.svg"
            className="w-[50%] col-start-2 cursor-pointer mt-[27px]"
          /> */}

          <nav className="mt-[50px] lg:grid lg:mt-16">
          <img
            src="test.svg"
            className="hidden lg:flex lg:w-[20%] lg:col-start-2 lg:cursor-pointer lg:mt-[27px]"
          />

          <ul className="flex lg:ml-20 items-center col-start-4 justify-center">
            <li className="mx-5 text-2xl cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="mx-5 text-2xl cursor-pointer">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="mx-5 text-2xl cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </motion.div>
    </div>
  );
};

export default Navbar;
