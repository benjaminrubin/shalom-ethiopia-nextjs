"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useDisplayOnScroll from "../hooks/useDisplayOnScroll";
import { usePathname } from "next/navigation";

const RequestBooking = () => {
  const [displayElement] = useDisplayOnScroll(240);
  const [isInMobileView, setIsInMobileView] = useState(false);
  const pathname = usePathname();
  const onBookingRequestPage = pathname === "/request-booking";

  // Define a function to handle the resize event
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsInMobileView(true);
    } else {
      setIsInMobileView(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    // Return a cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const displayBookingRequestButton =
    isInMobileView || (displayElement && !onBookingRequestPage);

  return (
    <Link href='/request-booking'>
      <div
        className={`uppercase text-amber-400 hover:text-slate-900 hover:bg-amber-400 cursor-pointer transition duration-200 font-bold py-2 px-3 border-4 border-amber-400 h-max `}
        style={{ opacity: displayBookingRequestButton ? 1 : 0 }}
      >
        Request Booking
      </div>
    </Link>
  );
};

export default RequestBooking;
