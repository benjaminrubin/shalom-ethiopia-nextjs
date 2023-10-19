import Image from "next/image";
import React from "react";

type PropTypes = {
  imageUrl: string;
  headerText: string;
};

const Header = () => {
  return (
    <>
      <div className='absolute w-100 h-80 md:h-[500px] top-0 left-0 right-0 bg-stone-800 opacity-50 z-[-1]' />
      <header className='bg-slate-400 w-full h-80 md:h-[500px] absolute top-0 left-0 right-0 z-[-2]'>
        <Image
          src='/images/homepage/hamer_tribe.jpg'
          alt='Hamer Tribe - Header Image'
          fill={true}
          objectFit='cover'
          className='object-top md:object-center lg:object-top xl:bg-[top_calc(10%)]'
          // style={{ objectFit: "cover", objectPosition: "60% 0%" }}
        />
      </header>
      <h1 className='z-10 text-white text-center w-100 text-3xl md:text-5xl lg:text-6xl relative top-20 font-bold'>
        Discover the Wonders of Ethiopia
      </h1>
    </>
  );
};

export default Header;
