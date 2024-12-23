import React from 'react';
import star from "/public/assets/start2.svg"
import icon from "/public/assets/icon.svg"
import earth from "/public/assets/earth.svg"
import phone from "/public/assets/phone.avif"
import gymphone from "/public/assets/gymphone.avif"
import smile from "/public/assets/smile.svg"
const Benifits = () => {
  return (
    <div className="mt-9 p-6 md:p-12 flex justify-center items-center pb-20 flex-col gap-16 lg:gap-32">
      <div className="flex justify-center items-center flex-col gap-6 sm:gap-8 md:gap-10">
      
        <div className="border-gray-600 bg-[#202020] w-32 sm:w-36 lg:w-44 p-3 sm:p-4 rounded-full flex justify-around items-center">
          <img src={star} className="w-5 sm:w-6 lg:w-7" alt="Start Icon" />
          <p className="text-white text-xs sm:text-sm lg:text-lg">Our Benefits</p>
        </div>

     
        <div className="flex flex-col gap-4 sm:gap-6">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-red-600 font-extrabold font-title text-center leading-tight">
            <span className="block md:inline">Discover</span>{" "}
            <span className="block md:inline">GymFluencer Benefits</span>
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg text-center lg:w-1/2 sm:w-4/5 mx-auto">
            GymFluencer offers 5 essential services to help you achieve your fitness goals with ease and flexibility.
          </p>
        </div>
      </div>

     
      <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8 lg:gap-12 w-full px-3">
    
        <div className="flex flex-col gap-6 lg:w-1/3 w-full">
    
          <div className="border h-auto p-5 rounded-xl w-full max-w-[600px] border-gray-900 bg-[#090909] flex flex-col gap-4 sm:gap-6">
            <div className="h-12 w-12 sm:h-14 sm:w-14 p-3 border rounded-xl flex items-center justify-center border-gray-900 bg-[#1b1b1b]">
              <img src={icon} className="h-8 w-8 sm:h-9 sm:w-9" alt="Icon" />
            </div>
            <div>
              <h1 className="font-title text-red-600 text-lg sm:text-xl md:text-2xl font-bold">
                Effortless Workout Logging
              </h1>
              <p className="text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base">
                Easily log your workouts and monitor your progress over time with our intuitive logging feature.
              </p>
            </div>
          </div>

        
          <div className="border h-auto p-5 rounded-xl w-full max-w-[600px] border-gray-900 bg-[#090909] flex flex-col gap-4 sm:gap-6">
            <div className="h-12 w-12 sm:h-14 sm:w-14 p-3 border rounded-xl flex items-center justify-center border-gray-900 bg-[#1b1b1b]">
              <img src={earth} className="h-8 w-8 sm:h-9 sm:w-9" alt="Icon" />
            </div>
            <div>
              <h1 className="font-title text-red-600 text-lg sm:text-xl md:text-2xl font-bold">
                Accurate Rep Counting
              </h1>
              <p className="text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base">
                Count your reps accurately with our app, ensuring consistency and improved performance.
              </p>
            </div>
          </div>
        </div>

      
        <div className="relative lg:w-1/3 w-full flex justify-center lg:order-none order-first">
          <img
            src={phone}
            className="h-[300px] w-[150px] sm:h-[350px] sm:w-[200px] lg:h-[450px] lg:w-[250px] mx-auto"
            alt=""
          />
          <img
            src={gymphone}
            className="h-[200px] w-[130px] sm:h-[300px] sm:w-[180px] lg:h-[400px] lg:w-[220px] absolute top-6 left-1/2 transform -translate-x-1/2 rounded-2xl"
            alt=""
          />
        </div>

     
        <div className="flex flex-col gap-6 lg:w-1/3 w-full">
          
          <div className="border h-auto p-5 rounded-xl w-full max-w-[600px] border-gray-900 bg-[#090909] flex flex-col gap-4 sm:gap-6">
            <div className="h-12 w-12 sm:h-14 sm:w-14 p-3 border rounded-xl flex items-center justify-center border-gray-900 bg-[#1b1b1b]">
              <img src="public/assets/star.svg" className="h-8 w-8 sm:h-9 sm:w-9" alt="Icon" />
            </div>
            <div>
              <h1 className="font-title text-red-600 text-lg sm:text-xl md:text-2xl font-bold">
                Effortless Workout Logging
              </h1>
              <p className="text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base">
                Easily log your workouts and monitor your progress over time with our intuitive logging feature.
              </p>
            </div>
          </div>

          
          <div className="border h-auto p-5 rounded-xl w-full max-w-[600px] border-gray-900 bg-[#090909] flex flex-col gap-4 sm:gap-6">
            <div className="h-12 w-12 sm:h-14 sm:w-14 p-3 border rounded-xl flex items-center justify-center border-gray-900 bg-[#1b1b1b]">
            <img src={smile} className="h-8 w-8 sm:h-9 sm:w-9" alt="Icon" />
            
            </div>
            <div>
              <h1 className="font-title text-red-600 text-lg sm:text-xl md:text-2xl font-bold">
                Accurate Rep Counting
              </h1>
              <p className="text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base">
                Count your reps accurately with our app, ensuring consistency and improved performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
