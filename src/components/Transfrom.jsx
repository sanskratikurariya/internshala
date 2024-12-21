import React from 'react';

const Transfrom = () => {
  return (
    <div className=' flex flex-col mt-6 gap-5 w-full p-3'>

      <div className="w-full max-w-fit p-4 bg-black relative">
   
        <img
          src="public/assets/logo.svg"
          className="absolute w-full max-w-[600px] mx-auto opacity-10 top-0 left-1/2 transform -translate-x-1/2"
          alt="Background Logo"
        />
     
        <div className="relative flex justify-center items-center bottom-20 h-64">
          <h1 className="text-red-600 text-2xl md:text-4xl lg:text-5xl font-bold font-title text-center z-10 px-4">
            TRANSFORMATION MADE POSSIBLE WITH GYMFLUENCER
          </h1>
          <p>Name : <span>Kamal</span></p>
          <p>Age : <span>25</span></p>
          <div className='flex justify-between p-3 '>
<button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfrom;
