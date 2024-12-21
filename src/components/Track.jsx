import React from 'react';
import green from "/public/assets/greenrope.avif"
import yoga from "/public/assets/yoga.avif"
import boxing from "/public/assets/boxing.avif"
import zumba from "/public/assets/zumba.avif"
import swimming from "/public/assets/swimming.avif"
const Track = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row lg:flex-nowrap justify-center  mb-20 pb-5">
      
        <div className="relative h-32 sm:h-64 md:h-[400px] lg:h-[500px] xl:h-[600px] w-full sm:w-[100%] overflow-hidden group">
          <img
            src={green}
            className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            alt="Green Rope"
          />
          <h1 className="text-white font-title left-4 sm:left-10 md:left-16 top-8 sm:top-20 md:top-32 lg:top-40 xl:top-60 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl absolute text-center  inset-0 flex items-center justify-center">
            TRACK
          </h1>
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

      
        <div className="relative h-32 sm:h-64 md:h-[400px] lg:h-[500px] xl:h-[600px] w-full sm:w-[100%] overflow-hidden group">
          <img
            src={yoga}
            className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            alt="Yoga"
          />
          <h1 className="text-white font-title left-4 sm:left-10 md:left-16 top-8 sm:top-20 md:top-32 lg:top-40 xl:top-60 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl absolute text-center inset-0 flex items-center justify-center">
            ANALYZE
          </h1>
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

      
        <div className="relative h-32 sm:h-64 md:h-[400px] lg:h-[500px] xl:h-[600px] w-full sm:w-[100%] overflow-hidden group">
          <img
            src={boxing}
            className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            alt="Boxing"
          />
          <h1 className="text-white font-title left-4 sm:left-10 md:left-16 top-8 sm:top-20 md:top-32 lg:top-40 xl:top-60 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl absolute text-center inset-0 flex items-center justify-center">
            TRAIN
          </h1>
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

      
        <div className="relative h-32 sm:h-64 md:h-[400px] lg:h-[500px] xl:h-[600px] w-full sm:w-[100%] overflow-hidden group">
          <img
            src={zumba}
            className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            alt="Zumba"
          />
          <h1 className="text-white font-title left-4 sm:left-10 md:left-16 top-8 sm:top-20 md:top-32 lg:top-40 xl:top-60 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl absolute text-center inset-0 flex items-center justify-center">
            CONNECT
          </h1>
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

    
        <div className="relative h-32 sm:h-64 md:h-[400px] lg:h-[500px] xl:h-[600px] w-full sm:w-[100%] overflow-hidden group">
          <img
            src={swimming}
            className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            alt="Swimming"
          />
          <h1 className="text-white font-title left-4 sm:left-1 md:left-16 top-8 sm:top-20 md:top-32 lg:top-40 xl:top-60 font-extrabold text-xl sm:text-xl md:text-3xl lg:text-4xl text-center absolute inset-0 flex items-center justify-center">
            CHALLENGE
          </h1>
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      </div>
    </div>
  );
};

export default Track;
