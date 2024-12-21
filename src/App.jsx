import React from 'react';
import { motion } from 'framer-motion'; 
import Home from './components/Home';
import Mission from './components/Mission';
import Track from './components/Track';
import Benifits from './components/Benifits';
import Ani from './components/Ani';
import Premum from './components/Premum';

const App = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <div className="flex flex-col gap-6 px-4 sm:px-6 lg:px-8">
        
        {/* Home Component */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.3 }} 
          transition={{ duration: 0.3 }} // Faster animation
        >
          <Home />
        </motion.div>

        {/* Ani Component */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.3, delay: 0.2 }} // Faster animation
        >
          <Ani />
        </motion.div>

        {/* Mission Component */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.3, delay: 0.4 }} // Faster animation
        >
          <Mission />
        </motion.div>

        {/* Track Component */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.3, delay: 0.6 }} // Faster animation
        >
          <Track />
        </motion.div>

        {/* Benifits Component */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.3, delay: 0.8 }} // Faster animation
        >
          <Benifits />
        </motion.div>

        {/* Ani Component */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.3, delay: 1 }} // Faster animation
        >
          <Ani />
        </motion.div>

        {/* Premum Component */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.3, delay: 1.2 }} // Faster animation
        >
          <Premum />
        </motion.div>
      </div>
    </div>
  );
};

export default App;
