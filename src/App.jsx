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
        
      
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.3 }}  
          transition={{ duration: 1 }}
        >
          <Home />
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }} 
        >
          <Ani />
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4 }} 
        >
          <Mission />
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.6 }} 
        >
          <Track />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.8 }} 
        >
          <Benifits />
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 1 }} 
        >
          <Ani />
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 1.2 }} 
        >
          <Premum />
        </motion.div>
      </div>
    </div>
  );
};

export default App;
