import Image from "next/image";
import React from "react";

type PropTypes = {
  imageUrl: string;
  headerText: string;
};

const Header = () => {
  return (
    <div className='relative'>
      <header className='bg-slate-400 w-full h-80 md:h-[500px] top-0 left-0 right-0 z-[-2] '>
        <div className='absolute w-100 h-80 md:h-[500px] top-0 left-0 right-0 bg-stone-800 opacity-50 z-20' />
        <Image
          src='/images/homepage/hamer_tribe.jpg'
          alt='Hamer Tribe - Header Image'
          fill={true}
          className='object-top md:object-center lg:object-top'
          style={{ objectFit: "cover", objectPosition: "60% 0%" }}
          priority
        />
      </header>
      <h1 className='z-30 top-[50%] left-[50%] translate-x-[-50%] text-white text-center text-3xl md:text-5xl lg:text-6xl absolute w-full h-full font-bold'>
        Discover the Wonders of Ethiopia
      </h1>
    </div>
  );
};

export default Header;
