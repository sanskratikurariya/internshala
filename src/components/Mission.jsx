import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import image2 from "/public/assets/image2.avif";

const Mission = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // Counter animation function
  const startCounting = (value, setState) => {
    let start = 0;
    const end = value;
    const duration = 2000; // Duration in milliseconds
    const stepTime = Math.abs(Math.floor(duration / end));

    const counter = setInterval(() => {
      start += 1;
      setState(start);
      if (start === end) clearInterval(counter);
    }, stepTime);
  };

  useEffect(() => {
    startCounting(463000, setCount1);
    startCounting(163000, setCount2);
    startCounting(13, setCount3);
  }, []);

  return (
    <div className='flex flex-col justify-center items-center p-5 pb-2 mb-24'>
      <div className="p-5 px-2 py-5 mt-28 flex flex-col justify-center items-center mb-11 pb-5">
      
        <motion.h1 
          className="text-red-600 font-extrabold font-title text-3xl md:text-6xl lg:text-8xl md:w-[75%] lg:w-1/2 text-center"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          viewport={{ once: true, amount: 0.5 }} 
        >
          Your Fitness. Our Mission.
        </motion.h1>
      
        <motion.p 
          className="text-white p-3 mx-4 text-base md:text-lg lg:text-xl md:w-[85%] lg:w-1/2 text-center"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }} 
        >
          At GymFluencer, our mission is simple: to provide the tools and support you need to reach your fitness goals. We combine innovative technology with personalized guidance to make fitness easier, more accessible, and more motivating. Join us as we help you transform your fitness journey, one workout at a time.
        </motion.p>
      </div>

      
      <motion.div
        className="flex flex-col justify-center items-center md:flex-row md:justify-around w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }} 
      >
        <div className="flex flex-col gap-4 items-center text-center md:items-center md:text-center p-4">
          <motion.h1 
            className="font-bold text-4xl md:text-5xl text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {isInView ? `${count1}k+` : "463k+"}
          </motion.h1>
          <motion.p 
            className="text-gray-500 text-sm md:text-base w-4/5 md:w-[250px]"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Workouts logged and progress tracked every month
          </motion.p>
        </div>

        <motion.div
          className="md:w-[1px] bg-gray-800 h-[1px] md:h-[140px] rounded-full md:block w-[300px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        ></motion.div>

        <div className="flex flex-col gap-4 items-center text-center md:items-center md:text-center p-4">
          <motion.h1 
            className="font-bold text-4xl md:text-5xl text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {isInView ? `${count2}k+` : "163k+"}
          </motion.h1>
          <motion.p 
            className="text-gray-500 text-sm md:text-base w-4/5 md:w-[250px]"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Fitness enthusiasts connected through our platform
          </motion.p>
        </div>

        <motion.div
          className="md:w-[1px] bg-gray-800 h-[1px] md:h-[140px] rounded-full md:block w-[300px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        ></motion.div>

        <div className="flex flex-col gap-4 items-center text-center md:items-center md:text-center p-4">
          <motion.h1 
            className="font-bold text-4xl md:text-5xl text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {isInView ? `${count3}+` : "13+"}
          </motion.h1>
          <motion.p 
            className="text-gray-500 text-sm md:text-base w-4/5 md:w-[250px]"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Countries where GymFluencer is making an impact
          </motion.p>
        </div>
      </motion.div>

 
      <motion.div
        className='p-6 hover:cursor-pointer'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.img
          src={image2}
          className="rounded-xl mt-16 h-[400px] md:w-[850px] md:h-[500px] hover:opacity-45"
          alt="Image with Rounded Border"
          whileHover={{ scale: 1.05 }} 
        />
      </motion.div>

     
      <div className='flex flex-col gap-4 justify-center items-center mt-16 text-center'>
        <motion.h1
          className='text-5xl md:text-4xl font-bold text-red-600 font-title'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className='text-white w-1/2 text-lg leading-relaxed mx-5 p-3 md:text-2xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          GymFluencer offers 5 essential services to help you achieve your fitness goals with ease and flexibility.
        </motion.p>
      </div>
    </div>
  );
};

export default Mission;
