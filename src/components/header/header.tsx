import Image from "next/image";
import React from "react";
import RequestBooking from "../navbar/request-booking";
import Link from "next/link";
import { Fraunces } from "next/font/google";
const fraunces = Fraunces({ subsets: ["latin"], weight: "400" });

interface HeaderProps {
  headerImageUrl: string;
  headerText: string;
}

/**
 * Props that are dynamic:
 * 1. The image of the header
 * 2. The label of the h1
 *
 */

const Header: React.FC<HeaderProps> = ({ headerText, headerImageUrl }) => {
  return (
    <div className='relative'>
      <header className='bg-slate-400 w-full h-80 md:h-[500px] xl:h-[750px] top-0 left-0 right-0 z-[-2] '>
        <div className='absolute w-100 h-80 md:h-[500px] xl:h-[750px] top-0 left-0 right-0 bg-stone-800 opacity-50 z-20' />
        <Image
          src={headerImageUrl}
          alt='Hamer Tribe - Header Image'
          fill={true}
          className='object-top md:object-center lg:object-top'
          style={{ objectFit: "cover", objectPosition: "60% 0%" }}
          priority
        />
      </header>
      <div className='z-30 top-[40%] md:top-[50%] left-[50%] translate-x-[-50%] text-white text-center  absolute w-full h-full font-bold'>
        <h1
          className={`${fraunces.className} text-3xl md:text-5xl lg:text-6xl`}
        >
          {headerText}
        </h1>
        <Link href='/request-booking'>
          <div
            className={` uppercase w-max mx-auto mt-8 md:mt-10 text-amber-400 hover:text-slate-900 hover:bg-amber-400 cursor-pointer transition duration-200 text-xs md:text-2xl font-bold py-2 px-3 border-4 border-amber-400 h-max opacity`}
          >
            Request Booking
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
