"use client";
import Link from "next/link";
import React from "react";

type PropTypes = {
  href: string;
  label: string;
  hideMobileMenu: () => void;
};

const MobileNavLink = ({ href, label, hideMobileMenu }: PropTypes) => {
  return (
    <div onClick={() => hideMobileMenu()}>
      <Link href={href}>
        <div className='uppercase border-b-4 border-transparent hover:border-white duration-200 text-white font-bold py-2 px-3'>
          {label}
        </div>
      </Link>
    </div>
  );
};

export default MobileNavLink;
