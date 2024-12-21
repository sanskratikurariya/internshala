import React from "react";
import { motion } from "framer-motion";
import homeImage from "/public/assets/home.avif";
import Navbar from "./Navbar";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative bg-black min-h-[660px]">
 
      <Navbar />

    
      <motion.div
        className="flex justify-center items-center flex-col absolute inset-0 px-4 md:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-extrabold w-3/2 font-title text-red-600 md:4/5 text-5xl md:text-6xl lg:text-7xl max-w-4xl p-3 z-30"
          variants={textVariants}
        >
          Track Your Fitness Journey
        </motion.h1>

        <motion.p
          className="text-white z-30 font-semibold mx-2 text-sm md:text-lg lg:text-sm p-3 max-w-2xl md:p-2 w-4/6 md:1/2"
          variants={textVariants}
        >
          Discover the ultimate fitness companion with GymFluencer. Effortlessly
          log your workouts, count reps, and track calories burned. Stay
          motivated and achieve your goals with ease.
        </motion.p>
      </motion.div>

     
      <div className="absolute inset-0">
        <img
          src={homeImage}
          className="w-full h-full object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
    </div>
  );
};

export default Home;
