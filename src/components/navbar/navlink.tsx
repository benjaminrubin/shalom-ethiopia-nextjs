import Link from "next/link";
import React from "react";

type PropTypes = {
  href: string;
  label: string;
};

const NavLink = ({ href, label }: PropTypes) => {
  return (
    <div className='uppercase text-white font-bold py-2 px-3'>
      <Link href={href}>{label}</Link>
    </div>
  );
};

export default NavLink;
