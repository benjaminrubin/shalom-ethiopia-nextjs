import AboutAccordion from "@/components/accordion/about-accordion";
import Header from "@/components/header/header";
import Ribbon from "@/components/ribbons/ribbon";
import StackLink from "@/components/stack-link/stack-link";
import Image from "next/image";
import React from "react";

const OurToursPage = () => {
  return (
    <>
      <Header
        headerText='Our Tours'
        headerImageUrl='/images/our-tours/offroad-jeep.jpg'
      />
      <div className=''>
        <main className='container mx-auto px-4 py-12 md:px-12 lg:px-48 xl:px-80'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div className='col-span-2'>
              <h2 className='uppercase text-2xl font-bold text-lime-600 mb-5'>
                Message from the founder
              </h2>
              <p className='text-slate-900 mb-6'>
                My name is Andualem, and I created Shalom Ethiopia Tours to
                build a community centered around love and family. I hope to
                welcome guests into my home country and connect them with
                Ethiopia’s rich and diverse culture while building long lasting
                friendships. Shalom is the Hebrew word for peace and welfare,
                qualities I wish to cultivate between the locals and visitors
                that join me on my adventures throughout the land.
              </p>
              <p>I look forward to welcoming you to Ethiopia!</p>
              <p>Shalom and love, Andy</p>
            </div>
            <div className='w-[300px] mt-6 md:w-full mx-auto col-span-1'>
              <Image
                height={600}
                width={600}
                // fill={true}
                // style={{ objectFit: "cover" }}
                src='/images/our-tours/andy.jpg'
                alt='Painting of Africa'
                priority
                unoptimized={true}
                className='rounded-full shadow shadow-2xl max-[300px]'
              />
            </div>
          </div>
        </main>
        <section className='container mx-auto px-4 pb-12 md:px-12 lg:px-48 xl:px-80'>
          <h2 className='uppercase text-2xl font-bold text-amber-600 mb-5'>
            Overview of our trips
          </h2>
          <p className='mb-6'>
            All tours are tailor-made, planned based on the duration of your
            trip and desired destinations. Most scheduled trips are between 5
            and 30 days, and span across one to multiple regions of Ethiopia.
            For example, you may book a 7 day trip only to Omo Valley to see the
            tribes. Alternatively, you can book a 2 week trip covering the
            North, South and Omo Valley. High season is during the Western
            holidays, between mid-December to end of February. The rest of the
            year is considerably less busier and allows for flexibility in
            lodging.
          </p>
          <p className='mb-5 underline'>
            {" "}
            The cost of the trip covers the following expenses:
          </p>
          <ul className='list-disc ml-14 mb-6'>
            <li>Transportation and fuel</li>
            <li>Domestic flights (when needed)</li>
            <li>Hotel / Lodging</li>
            <li>3 fresh meals per day</li>
            <li>Unlimited supply of bottled mineral water</li>
            <li>Entry fees for every village and site</li>
            <li>Local guide fees (required at each village)</li>
            <li>
              Picture fees in special areas (such as the Omo Valley tribes)
            </li>
          </ul>
          <p className='mb-6'>
            *Costs do not include tips for main guides and site guides.
          </p>
          <p className='mb-6'>
            **Tour costs vary with duration, number of destinations, number of
            guests etc. To receive a quote, please fill out our request form and
            we will be in touch shortly.
          </p>
          <AboutAccordion />
        </section>
      </div>
      <Ribbon ribbonStyle='ribbon-v5' />
    </>
  );
};

export default OurToursPage;
