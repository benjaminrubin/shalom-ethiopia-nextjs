"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const destinations = [
  {
    id: 1,
    location: "Addis Ababa",
    description: `Addis Ababa means "New Flower" in Amharic, and is Ethiopia's capital with a population of 3.5M people. The city is viewed as Africa's diplomatic capital, serving as the headquarters of the international African Union and United Nations Economic Commission for Africa.`,
  },
  {
    id: 2,
    location: "Awassa",
    description: `Awassa is the capital of southern region, and a popular honeymoon destination for Ethiopians.`,
  },
  {
    id: 3,
    location: "Axum",
    description: `Axum contains a rich collection of historical and sacred religious monuments. Among them are the Ruins of Queen Sheba’s palace, a collection of Ethiopian churches claiming to house the Ark of the Covenant (which can only be seen by the monk who guards it), and the “Stele” – obelisks that stand as markers for the underground tombs of ancient Ethiopian royalty.`,
  },
  {
    id: 4,
    location: "Bahir Dar",
    description: `The capital city of the Amhara region, sitting on the south shore of Lake Tana – the source for the Blue Niles Falls. The islands and peninsulas of Lake Tana house over 20 monastic churches, some of which can be visited through guided tours.`,
  },
  {
    id: 5,
    location: "Erta Ale",
    description: `"Erta Ale" translates to "smoking mountain" in the Afar language. The volcano is arguably the most alluring and physically challenging attractions in Ethiopia. At its summit exists the world’s longest existing lava lake, present since the early years of the twentieth century.`,
  },
  {
    id: 6,
    location: "Danakil Depression",
    description: `The Danakil Depression has some of the most fascinating landscapes in the world with eye-catching colors and Sulphur springs formed by volcanic activity. The region is also home to the mythical Lake Giulietti (aka Lake Afrera), a salt water lake located 100 meters below sea level. Salt mines can be found all around the lake, where the Afar people break the salt from the ground into rectangular blocks, later selling it as an appetite inducer for cattle.`,
  },
  {
    id: 7,
    location: "Lalibela Rock Churches",
    description: `One of the holiest places of Ethiopian Christianity and a UNESCO World Heritage Site, the rock hewn churches of the Lalibela attract thousands of tourists every year and are a must-see when visiting the country.`,
  },
  {
    id: 8,
    location: "Gondar",
    description: `Best known for its 17th century castles and palaces, Gondar was founded in 1635 by Emperor Fasilidas and served as the imperial capital for 250 years.`,
  },
  {
    id: 9,
    location: "Key Afer",
    description: `This village contains the most beautiful market in Omo Valley, where tribes (such as the Hamer and Benna) sell their goods and commodities. The colorful market shows the diverse culture and social dynamics between the people in this part of Ethiopia.`,
  },
  {
    id: 10,
    location: "Omo National Park / Omo Valley",
    description: `The Southern region of Ethiopia is home to several indigenous tribes whose cultures have been cultivated over years, far away from civilization and almost completely isolated from the outside world (see the “Tribes” section below). The National Park is one of Ethiopia’s prolific nature sanctuaries, though not easily reached.`,
  },
  {
    id: 11,
    location: "Semien Mountains National Park",
    description: `The jagged panorama and deep valleys lend spectacular views to these mountains, home to many of the endemic animal species of Ethiopia including the Gelada Baboon, the rare Walia Ibex and Ethiopian Wolf.`,
  },
];

interface DestinationProps {
  id: number;
  location: string;
  description: string;
}

const Destination: React.FC<DestinationProps> = ({
  id,
  location,
  description,
}) => {
  const [displayDescription, setDisplayDescription] = useState(false);

  return (
    <div className='flex flex-col mb-4'>
      <div
        className='flex flex-row gap-3 items-center mb-1 cursor-pointer'
        onClick={() => setDisplayDescription(!displayDescription)}
      >
        <div className='relative'>
          <Image src='/pin.svg' alt='Pin' height={25} width={25} className='' />
          <div className='absolute flex w-full justify-center top-1 text-white font-bold select-none'>
            {id}
          </div>
        </div>

        <h2 className='text-xl text-blue-500 hover:text-blue-700 font-bold uppercase'>
          {location}
        </h2>
      </div>
      <div
        className='ml-9 text-blue-800'
        style={{ display: displayDescription ? "" : "none" }}
      >
        {description}
      </div>
    </div>
  );
};

interface MapProps {
  mapHeight: number;
  mapWidth: number;
}

const Map: React.FC<MapProps> = ({ mapHeight, mapWidth }) => {
  console.log("height of map is", mapHeight);

  return (
    <div className='mx-auto'>
      <iframe
        src='https://www.google.com/maps/d/u/0/embed?mid=1jLlbCJX69u5PX6eLRHv-UomRaVKEzEA&ehbc=2E312F&noprof=1'
        width={mapWidth - 10}
        height={mapHeight - 10}
        title='Map of Ethiopia'
      ></iframe>
    </div>
  );
};

interface Dimensions {
  height: number;
  width: number;
}

const Destinations: React.FC = () => {
  const destinationRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({
    height: 0,
    width: 0,
  });

  const updateDimensions = () => {
    if (destinationRef.current) {
      setDimensions({
        height: destinationRef.current.offsetHeight,
        width: destinationRef.current.offsetWidth,
      });
    }
  };

  useEffect(() => {
    updateDimensions(); // Update dimensions initially
    window.addEventListener("resize", updateDimensions); // Update dimensions on window resize

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <section className='container mx-auto px-4 py-12 md:px-12 lg:px-48 xl:px-80'>
      <div className='col-span-2'>
        <h2 className='uppercase text-2xl font-bold text-emerald-800 mb-5'>
          Destinations
        </h2>
        <p className='text-slate-800 mb-2'>
          Below are some of the most popular destinations visitors see when
          coming to Ethiopia.
        </p>
        <p className='mb-6'>
          Click on a name for a brief description and use the map to explore
          further:
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10'>
        <div ref={destinationRef}>
          {destinations.map((destination) => (
            <Destination
              key={destination.id}
              id={destination.id}
              location={destination.location}
              description={destination.description}
            />
          ))}
        </div>
        <Map mapHeight={dimensions.height} mapWidth={dimensions.width} />
      </div>
    </section>
  );
};

export default Destinations;
