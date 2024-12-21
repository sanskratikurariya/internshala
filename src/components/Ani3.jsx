import React from "react";
import { motion } from "framer-motion";


const Ani3 = () => {
  return (
    <>
    <div className="overflow-hidden bg-black flex flex-col gap-4 items-center pb-6 ">
     
      <div className="relative w-full h-9  overflow-hidden bg-[#ff3636] ">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-90%"] }}
          transition={{
            duration: 10, 
            repeat: Infinity, 
            ease: "linear", 
          }}
        >
        
          <ul className="text-sm text-white flex gap-7 p-1 font-bold">
          <li>.</li>
            <li>PROGRESS TRACKING</li>
            <li> . </li>
            <li>WORKOUT ROUTINES</li>
            <li> . </li>
            <li>FITNESS PLANS</li>
            <li> . </li>
           
          </ul>
          <ul className="text-sm text-white flex gap-7 p-1 font-bold">
            <li>PROGRESS TRACKING</li>
            <li> . </li>
            <li>WORKOUT ROUTINES</li>
            <li> . </li>
            <li>FITNESS PLANS</li>
            <li> . </li>
          </ul>
          <ul className="text-sm text-white flex gap-7 p-1 font-bold">
            <li>PROGRESS TRACKING</li>
            <li> . </li>
            <li>WORKOUT ROUTINES</li>
            <li> . </li>
            <li>FITNESS PLANS</li>
            <li> . </li>
          </ul>
          <ul className="text-sm text-white flex gap-7 p-1 font-bold">
            <li>PROGRESS TRACKING</li>
            <li> . </li>
            <li>WORKOUT ROUTINES</li>
            <li> . </li>
            <li>FITNESS PLANS</li>
            <li> . </li>
          </ul>
          <ul className="text-sm text-white flex gap-7 p-1 font-bold">
            <li>PROGRESS TRACKING</li>
            <li> . </li>
            <li>WORKOUT ROUTINES</li>
            <li> . </li>
            <li>FITNESS PLANS</li>
            <li> . </li>
          </ul>
          <ul className="text-sm text-white flex gap-7 p-1 font-bold">
            <li>PROGRESS TRACKING</li>
            <li> . </li>
            <li>WORKOUT ROUTINES</li>
            <li> . </li>
            <li>FITNESS PLANS</li>
            <li> . </li>
          </ul>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Ani3;
