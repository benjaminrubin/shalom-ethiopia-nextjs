import Header from "@/components/header/header";
import Ribbon from "@/components/ribbons/ribbon";
import Image from "next/image";
import React from "react";
import InfoBlock from "./info-block";
import EthiopiaTime from "./ethiopia-time";

const AboutEthiopiaPage: React.FunctionComponent = () => {
  return (
    <>
      <Header
        headerText='About Ethiopia'
        headerImageUrl='/images/about-ethiopia/savana.jpg'
      />
      <div className='bg-[#479c53]'>
        <main className=' container mx-auto px-4 py-12 md:px-12 lg:px-48 xl:px-80'>
          <h2 className='uppercase text-2xl font-bold text-white mb-5'>
            General Information
          </h2>
          <p className='text-white mb-6'>
            One of the oldest nations of the world, Ethiopia is an extraordinary
            country situated in the East of Africa (so-called the “Horn of
            Africa”). Its history spans across hundreds of years with
            archaeological findings dating back to more than 3 million years
            (such as Lucy, the oldest human ancestor ever discovered – put a
            link). Never fully colonized (though Italy made an attempt), the
            country has kept many of its cultural traditions, including its
            ceremonial ritual for making and drinking coffee (which was first
            discovered in an Ethiopian province).
          </p>
          <p className='text-white mb-6'>
            As of 2018, the population is approximately 102.4M and the country’s
            official language is “Amharic”. Orthodox Christianity is the
            dominant religion, with Islam coming at a close second. Ethiopia’s
            capital Addis Ababa means “New Flower” in Amharic, and inhabits only
            around 4.6M people. The majority of Ethiopians (some 80%) live in
            rural areas relying either on subsistence farming or on income from
            agricultural work.
          </p>
          <div className='flex justify-center'>
            <div className='max-w-[300px] shadow-lg'>
              <Image
                src='/images/about-ethiopia/ethiopian-flag.jpg'
                alt='Description of Image'
                width={300}
                height={100}
                layout='responsive'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-6'>
            <InfoBlock label='Official Language'>Amharic</InfoBlock>
            <InfoBlock label='Population'>112.2M</InfoBlock>
            <InfoBlock label='currency'>Birr</InfoBlock>
            <div className='flex flex-col gap-2'>
              <EthiopiaTime />
              <div className='text-xs text-white text-center'>GMT+3</div>
            </div>
          </div>
        </main>
      </div>
      <Ribbon ribbonStyle='ribbon-v4' />
      <section className=' container mx-auto px-4 py-12 md:px-12 lg:px-48 xl:px-80'>
        <div className='col-span-2'>
          <h2 className='uppercase text-2xl font-bold text-emerald-800 mb-5'>
            Destinations
          </h2>
          <p className='text-slate-800 mb-6'>
            One of the oldest nations of the world, Ethiopia is an extraordinary
            country situated in the East of Africa (so-called the “Horn of
            Africa”). Its history spans across hundreds of years with
            archaeological findings dating back to more than 3 million years
            (such as Lucy, the oldest human ancestor ever discovered – put a
            link). Never fully colonized (though Italy made an attempt), the
            country has kept many of its cultural traditions, including its
            ceremonial ritual for making and drinking coffee (which was first
            discovered in an Ethiopian province).
          </p>
        </div>
      </section>
      <Ribbon ribbonStyle='ribbon-v5' />
    </>
  );
};

export default AboutEthiopiaPage;
