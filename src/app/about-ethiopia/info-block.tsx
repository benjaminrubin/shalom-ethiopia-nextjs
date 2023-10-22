import React from "react";

type Props = {
  label: string;
  children: React.ReactNode;
};

const InfoBlock = ({ label, children }: Props) => {
  return (
    <div className='text-center'>
      <h3 className='text-white uppercase font-semibold text-sm mb-2'>
        {label}
      </h3>
      <div className='rounded bg-green-800 px-3 py-2 text-yellow-400 text-2xl font-bold'>
        {children}
      </div>
    </div>
  );
};

export default InfoBlock;
