import React from "react";
import { motion } from "framer-motion";
import Ani3 from "./Ani3";

const Premium = () => {
  const images = [
    "assets/graph.avif",
    "assets/gymphone.avif",
    "assets/planweak.avif",
  ];

  return (
    <div className="pt-7">

      <div className="w-full md:flex md:justify-between p-3 gap-6">
       
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="bg-black relative">
            <img
              src="/assets/dumble.avif"
              className="h-[300px] sm:h-[400px] md:h-[500px] w-full object-cover opacity-20"
              alt="Dumbbell"
            />
            <div className="flex flex-col gap-8 z-10 absolute sm:items-center sm:text-center sm:justify-center md:left-0 top-12 px-4">
              <h1 className="font-title text-red-600 text-3xl sm:text-4xl md:text-5xl font-semibold md:w-3/4">
                Your Personalized Fitness Hub
              </h1>
              <p className="text-white text-sm sm:text-base md:text-lg md:w-3/4 sm:w-full">
                Personalized workout routines tailored to your goals and preferences.
              </p>
              <p className="text-white text-sm sm:text-base md:text-lg md:w-3/4 sm:w-full">
                Get expert guidance with virtual coaching sessions, available anytime, anywhere.
              </p>
              <p className="text-white text-sm sm:text-base md:text-lg md:w-3/4 sm:w-full">
                Track your fitness journey with detailed analytics, goal setting, and achievements.
              </p>
            </div>
          </div>
        </div>

     
        <div className="w-full md:w-1/2 relative h-[400px] overflow-hidden flex items-center justify-center">
          <motion.div
            className="absolute flex flex-col gap-6"
            initial={{ y: 0 }}
            animate={{ y: ["-100%", "0%"] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ height: "calc(100% * 3)" }} 
          >
            {[...images, ...images].map((src, index) => (
              <motion.div
                key={index}
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] flex-shrink-0 flex items-center justify-center"
                initial={{ y: -100, opacity: 0.5 }}
                animate={{ y: 0, opacity: 6 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 20,
                  delay: index * 0.5, 
                }}
                whileHover={{
                  scale: 1.1,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="h-[300px] sm:h-[350px] md:h-[400px] w-full sm:w-[600px] md:w-[700px] object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

     
      <Ani3 />
    </div>
  );
};

export default Premium;
