import React from "react";
import RequestBookingForm from "./request-booking-form";
import Ribbon from "@/components/ribbons/ribbon";
import { Fraunces } from "next/font/google";
const fraunces = Fraunces({ subsets: ["latin"], weight: "400" });

const RequestBookingPage = () => {
  return (
    <>
      <div>
        <main className='container mx-auto mt-28 md:mt-32 px-4 md:px-12 lg:px-48 xl:px-80'>
          <h1
            className={`${fraunces.className} text-4xl text-slate-700 text-center font-bold md:text-6xl mb-10`}
          >
            Request Booking
          </h1>
          <p>
            Thank you for your interest in touring with Shalom Ethiopia! Please
            fill out the form below, and we will be in touch with you as soon as
            possible to set up your next adventure.
          </p>
        </main>
        <div className='container mx-auto py-6 md:px-12 lg:px-48 xl:px-80'>
          <RequestBookingForm />
        </div>
      </div>
      <Ribbon ribbonStyle='ribbon-v5' />
    </>
  );
};

export default RequestBookingPage;
