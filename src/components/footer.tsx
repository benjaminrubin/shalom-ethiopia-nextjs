import React from "react";
import Logo from "./logo/logo";

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-[#DC9C2B] to-yellow-800 flex flex-col py-10 gap-10 text-white'>
      <div className='flex gap-5 container mx-auto'>
        <div className='hidden md:inline'>
          <Logo />
        </div>
        <div className='flex flex-col gap-3 mt-3 mx-5 font-semibold'>
          <h3 className='uppercase font-bold text-xl'>Contact Information</h3>
          <div>
            EMAIL:{" "}
            <a href='mailto:andualem40minch@gmail.com'>
              andualem40minch@gmail.com
            </a>{" "}
          </div>
          <div>
            PHONE/WHATSAPP: <a href='tel:+251920647675'> +251 92 064 7675</a>{" "}
          </div>
        </div>
      </div>
      <div className='text-center text-sm'>
        © Shalom Ethiopia | Designed by Benjamin Floyd Rubin
      </div>
    </div>
  );
};

export default Footer;
