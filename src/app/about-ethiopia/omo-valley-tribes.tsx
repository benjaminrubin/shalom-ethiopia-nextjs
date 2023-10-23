import React from "react";

const tribes = [
  {
    tribeName: "Hamer Tribe",
    imageUrl: "/images/about-ethiopia/hamer.jpg",
    description: `Known for their fashionable adornments and colorful beads, the Hamer tribe is a strongly bonded pastoralist cohort. Hamer boys must go through the “Bull Jumping Ceremony” which commences their transition into manhood, requiring them to leap multiple times over a long line of cattle. All female relatives of the boy are whipped during the event as a sign of support for their kinsmen, earning them the right to demand his help in time of need.`,
  },
  {
    tribeName: "Dorze Tribe",
    imageUrl: "/images/about-ethiopia/dorze.jpg",
    description: `The people of the Dorze tribe are settled in the Gamo highlands above the city Arba Minch. They are known for their huge bamboo huts that resemble the shape of an elephant’s head, as well as their expertise in fine cotton weaving.`,
  },
  {
    tribeName: "Mursi Tribe",
    imageUrl: "/images/about-ethiopia/mursi.jpg",
    description: `This tribe is most known for their women’s custom of wearing circular clay/wooden plates in the lower lip and earlobes. The girl’s lip is pierced from around age 15, and the size of her plate is often correlated with the size of her bridewealth. It is also among the more aggressive tribes, where single men participate in ceremonial dueling called “Donga” – fighting each other with wooden poles until defeat to prove their worth as husbands to unmarried women.`,
  },
  {
    tribeName: "Karo Tribe",
    imageUrl: "/images/about-ethiopia/karo.jpg",
    description: `The Karo are a small tribe that distinguishes themselves from the neighboring tribes with their ornate body art. They incorporate rich, cultural symbolism into their rituals through body and face painting, intricate headdresses, and body scarification that signify status, beauty and bravery.`,
  },
];

interface TribeProps {
  tribeName: string;
  imageUrl: string;
  description: string;
}

const Tribe: React.FC<TribeProps> = ({ tribeName, imageUrl, description }) => {
  return (
    <div className='relative w-full bg-gradient-to-b from-yellow-500 to-amber-900 p-4 my-4'>
      <div className='absolute inset-2 border border-[#F9D25B] z-10'></div>
      <div className='absolute left-6 top-6 z-20'>
        <div className='text-[#F9D25B]'>
          <div className='bg-[#913916] font-semibold text-xl uppercase font-secondary mb-1 px-2 py-1'>
            {tribeName}
          </div>
          <div className='border-b border-4 border-[#F9D25B] w-full'></div>
        </div>
      </div>
      <div className='relative'>
        <div
          className='bg-cover bg-no-repeat w-full min-h-[250px] md:h-[500px]'
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className='text-white p-6'>{description}</div>
      </div>
    </div>
  );
};

const OmoValleyTribes: React.FC = () => {
  return (
    <section className='bg-[#F9D25C]'>
      <div className='container mx-auto px-4 py-12 md:px-12 lg:px-48 xl:px-80 '>
        <h2 className='uppercase text-2xl font-bold text-black mb-5'>
          Omo Valley Tribes
        </h2>
        <p className='text-slate-800 mb-2'>
          The lower Omo Valley is quite different from any other region in
          Ethiopia, even Africa as a whole. It is home to a remarkable mix of
          small, unique ethnic groups that have developed their own cultures
          over decades while being isolated from the outside world. Among them
          are the Hamer, Mursi, Dorze and Karo - all tribes that can be visited
          with our guides as part of an unforgettable adventure to their remote
          lands.
        </p>
        {tribes.map((tribe) => (
          <Tribe
            key={tribe.tribeName}
            tribeName={tribe.tribeName}
            imageUrl={tribe.imageUrl}
            description={tribe.description}
          />
        ))}
      </div>
    </section>
  );
};

export default OmoValleyTribes;
