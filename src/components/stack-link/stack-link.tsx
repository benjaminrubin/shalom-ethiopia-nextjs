import Link from "next/link";
import React from "react";
import styles from "./stack-link.module.css";

type Props = {
  label: string;
  href: string;
  foregroundColor: string;
  backgroundColor: string;
};

const StackLink = ({
  label,
  href,
  foregroundColor,
  backgroundColor,
}: Props) => {
  const discoverEthiopiaClasses =
    "w-full flex items-left justify-center md:justify-start";
  const otherClasses = "w-full flex items-center justify-center";

  const linkClass =
    label === "Discover Ethiopia" ? discoverEthiopiaClasses : otherClasses;

  return (
    <div className={linkClass}>
      <Link href={href}>
        <div className='w-max relative'>
          <div
            className={` ${foregroundColor} text-white uppercase font-bold py-3 px-8 border-4 border-black hover:-translate-x-0.5 hover:-translate-y-0.5 cursor-pointer transition duration-100 z-30 relative`}
          >
            {label}
          </div>
          <div
            className={`${backgroundColor} absolute top-0 left-0 w-full h-full text-white uppercase font-bold py-3 px-8 border-4 border-black z-0 translate-x-2 translate-y-2`}
          ></div>
        </div>
      </Link>
    </div>
  );
};

export default StackLink;
