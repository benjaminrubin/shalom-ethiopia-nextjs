import Link from "next/link";
import React from "react";

const RequestBooking = () => {
  return (
    <Link href='/request-booking'>
      <div className='uppercase text-amber-400 hover:text-slate-900 hover:bg-amber-400 cursor-pointer transition duration-200 font-bold py-2 px-3 border-4 border-amber-400 h-max'>
        Request Booking
      </div>
    </Link>
  );
};

export default RequestBooking;
