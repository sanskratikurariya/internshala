import React from "react";
import { motion } from "framer-motion";

const Ani2 = () => {
  return (
    <div className="relative w-full overflow-hidden text-red-600">
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["-100%", "0%"], 
        }}
        transition={{
          duration: 10, 
          repeat: Infinity,
          ease: "linear", 
        }}
      >
      
        <ul className="text-6xl font-title text-red-600 flex gap-7">
          <li>Strength</li>
          <li>/</li>
          <li>Progress</li>
          <li>/</li>
          <li>Work</li>
          <li>/</li>
          <li>Community</li>
          <li>/</li>
        </ul>

        
        <ul className="text-6xl font-title text-red-600 flex gap-7">
          <li>Strength</li>
          <li>/</li>
          <li>Progress</li>
          <li>/</li>
          <li>Work</li>
          <li>/</li>
          <li>Community</li>
          <li>/</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Ani2;
