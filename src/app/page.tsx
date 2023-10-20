import Header from "@/components/header/header";
import Ribbon from "@/components/ribbons/ribbon";
import StackLink from "@/components/stack-link/stack-link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header
        headerText='Discover the Wonders of Ethiopia'
        headerImageUrl='/images/homepage/hamer_tribe.jpg'
      />
      <main className='container mx-auto px-4 my-12 md:px-12 lg:px-48 xl:px-80'>
        <h2 className='uppercase text-2xl font-bold text-lime-600 mb-5'>
          About Shalom Ethiopia
        </h2>
        <p className='text-slate-700 mb-6'>
          Shalom Ethiopia is a tour operator offering private, group, and other
          customized guided tours around Ethiopia. Visitors from all around the
          world have experienced the country’s beautiful landscapes and ancient
          culture with our guides and drivers - we hope to be a part of your
          journey too. Here you can learn more about our offerings, explore some
          of Ethiopia’s highlights and get a glimpse of what you can expect to
          see once you book your tour with us!
        </p>
        <StackLink
          href='/our-tours'
          label='Explore Our Tours'
          foregroundColor='bg-red-600'
          backgroundColor='bg-amber-400'
        />
      </main>
      <Ribbon ribbonStyle={"ribbon-v4"} />
      <section className='bg-[#210915] mt-[-2px] mb-[-2px] -z-10'>
        <div className='container grid grid-cols-1 gap-10 md:gap-2 md:grid-cols-2 mx-auto py-10 px-4 md:px-12 lg:px-48 xl:px-80'>
          <div className=''>
            <h2 className='uppercase text-2xl font-bold text-yellow-500 mb-5'>
              The Ethiopian Country
            </h2>
            <p className='mb-6 text-white'>
              {`One of the oldest nations of the world, Ethiopia is an extraordinary country situated in the East of Africa (so-called the “Horn of Africa”). Ethiopia’s history spans across hundreds of years with archaeological findings dating back to more than 3 million years (such as Lucy, the oldest human ancestor ever discovered). Never fully colonized, the country has kept many of its cultural traditions, including its ceremonial ritual for making and drinking coffee (known as “Buna”).`}
              <br />
              <br />
              Click below to learn more about Ethiopia
            </p>
            <StackLink
              href='/about-ethiopia'
              label='Learn More'
              foregroundColor='bg-green-700'
              backgroundColor='bg-red-600'
            />
          </div>
          <div className='w-400 md:w-full'>
            <Image
              height={1200}
              width={1200}
              // fill={true}
              // style={{ objectFit: "cover" }}
              src='/images/africa_painting.png'
              alt='Painting of Africa'
              priority
              unoptimized={true}
            />
          </div>
        </div>
      </section>
      <Ribbon ribbonStyle='ribbon-v5' />
    </>
  );
}
