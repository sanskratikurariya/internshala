import React from "react";
import { motion } from "framer-motion";
import Ani2 from "./Ani2";

const Ani = () => {
  return (
    <>
    <div className="hidden md:flex">
    <div className="overflow-hidden bg-black flex flex-col gap-4 items-center ">
    
      <div className="relative w-full overflow-hidden ">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }} 
          transition={{
            duration: 10, 
            repeat: Infinity, 
            ease: "linear", 
          }}
        >
         
          <ul className="text-6xl font-title text-white flex gap-7">
            <li>/</li>
            <li>Fitness</li>
            <li>/</li>
            <li>Transformation</li>
            <li>/</li>
            <li>Motivation</li>
            <li>/</li>
            <li>Progress</li>
            <li>/</li>
          </ul>
          <ul className="text-6xl font-title text-white flex gap-7">
          
            <li>Fitness</li>
            <li>/</li>
            <li>Transformation</li>
            <li>/</li>
            <li>Motivation</li>
            <li>/</li>
            <li>Progress</li>
            <li>/</li>
          </ul>
        </motion.div>
      </div>

      <Ani2/>
    </div>
    </div>
    </>
  );
};

export default Ani;
