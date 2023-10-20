import Link from "next/link";
import React from "react";

type PropTypes = {
  href: string;
  label: string;
};

const NavLink = ({ href, label }: PropTypes) => {
  return (
    <Link href={href}>
      <div className='uppercase border-b-4 border-transparent hover:border-white duration-200 text-white font-bold py-2 px-3'>
        {label}
      </div>
    </Link>
  );
};

export default NavLink;
