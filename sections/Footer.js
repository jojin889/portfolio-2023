"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";

import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className=""
  >
    <div className="m-auto">
      <div className="mb-[50px] h-[1px] bg-white opacity-10 w-[70%] mx-auto" />
      <p className="font-normal text-[14px] text-white text-center opacity-50 justify-self-center mb-6">
        Copyright © 2023 All rights reserved.
      </p>
    </div>
  </motion.footer>
);

export default Footer;
