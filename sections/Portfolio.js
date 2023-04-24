"use client";

import React, { useState } from "react";
import { projets } from "../constants";
import { motion } from "framer-motion";
import { projetsVariants, projetsVariants2 } from "../utils/motion";

const Portfolio = () => {
  const [state, setState] = useState("all");

  const handleClick = (value) => {
    setState(value);
  };

  console.log(state);

  return (
    <div>
      <h1
        id="portfolio"
        className="text-5xl text-center mb-14 lg:mb-0 mt-28 relative before:absolute before:center before:bottom-[-10px] before:h-[5px] before:translate-x-[-6%] before:w-[60px] before:bg-[#ee7813] after:absolute after:bottom-[-8px] after:translate-x-[-98%] after:h-[1px] after:w-[255px] after:bg-[#ee7813]"
      >
        Portfolio
      </h1>
      <motion.div
        variants={projetsVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div>
          <ul className="flex lg:flex lg:flex-row justify-center lg:m-16 lg:text-center">
            <li
              onClick={(e) => handleClick("all")}
              className="m-5 cursor-pointer"
            >
              All
            </li>
            <li
              onClick={(e) => handleClick("react")}
              className="m-5 cursor-pointer"
            >
              React
            </li>
            <li
              onClick={(e) => handleClick("tailwind")}
              className="m-5 cursor-pointer"
            >
              Tailwind
            </li>
            <li
              onClick={(e) => handleClick("sanity")}
              className="m-5 cursor-pointer"
            >
              Sanity
            </li>
            <li
              onClick={(e) => handleClick("next")}
              className="m-5 cursor-pointer"
            >
              Next
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        variants={projetsVariants2}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="mt-5 mx-auto text-center m-auto lg:grid lg:grid-cols-3 lg:gap-12 w-[82%]">
          {projets.map((p) => (
            <div className={p.techno.includes(state) ? "mt-14" : "hidden"}>
              <div
                className="pb-[100px] lg:pb-[60px] mb-5 bg-black rounded-[12px]"
                style={{
                  backgroundImage: `url(${p.img})`,
                  backgroundSize: "100%",
                  backgroundSize: "cover",
                  height: "200px",
                }}
              ></div>
              <div>
                <a href={p.url} target="_blank">
                  {p.name}{" "}
                  <img
                    src="/right-arrow.png"
                    className="w-[5%] lg:w-[3%] lg:ml-5 inline text-[#ee7813]"
                  />
                </a>
                {p.image}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
