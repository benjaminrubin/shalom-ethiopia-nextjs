import React from "react";

const dishes = [
  {
    dishName: "Injera",
    imageUrl: "/images/about-ethiopia/injera.jpg",
    description: `A nutrient rich sourdough flatbread (with twenty times more protein than wheat) with a spongy texture. Injera is made from teff flour and is used as either a utensil or plate for many Ethiopian dishes (it's gluten-free!). `,
  },
  {
    dishName: "Bayonet",
    imageUrl: "/images/about-ethiopia/bayonet.jpg",
    description: `Bayonet is a popular fasting food comprised of a variety of vegetarian stews or salads served on a large piece of injera (such as lentils, cabbage, beets, and potatoes). The Injera’s porous texture makes it ideal for soaking the stew’s juices. `,
  },
  {
    dishName: "Buna",
    imageUrl: "/images/about-ethiopia/buna.jpg",
    description: `Ethiopia is the birthplace of coffee, which is referred to as “Buna” in Amharic. The word coffee is derived from “Keffa”, a former Ethiopian province where the bean was originally discovered. The preparation and consumption of Buna is done through a traditional ceremony involving the burning of the beans, grounding them and preparing them for drink while a fragrant incense is being burned. `,
  },
  {
    dishName: "Tibs",
    imageUrl: "/images/about-ethiopia/tibs.jpg",
    description: `A dish made of finely cut and fried meat. Tibs can be made of beef, veal lamb or goat meat and is typically served with injera. It is worth noting that Ethiopians enjoy their meat only lightly fried and on the rare side. `,
  },
  {
    dishName: "Tej",
    imageUrl: "/images/about-ethiopia/tej.jpg",
    description: `Tej means “honey wine” in Amharic, and is a fermented alcoholic beverage very similar to mead with a slightly bitter taste. `,
  },
];

interface DishProps {
  dishName: string;
  imageUrl: string;
  description: string;
}

const Dish: React.FC<DishProps> = ({ dishName, imageUrl, description }) => {
  return (
    <div
      className='relative mb-5 bg-cover bg-no-repeat min-h-[400px] group/dish cursor-pointer'
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className='absolute top-0 left-0 right-0 bottom-0 opacity-0 bg-black group-hover/dish:opacity-50 transition duration-300'></div>
      <div className='absolute border border-green-300 inset-2.5 z-10'></div>
      <div className='absolute left-6 top-6 z-20 text-green-300'>
        <div className='bg-green-600 uppercase font-bold mb-1 px-2 py-1 text-xl'>
          {dishName}
        </div>
        <div className='border-b border-4 border-green-300 w-full'></div>
      </div>
      <div className='relative mt-16 transition duration-300 p-6 text-white opacity-0 group-hover/dish:opacity-100'>
        {description}
      </div>
    </div>
  );
};

const Cuisine = () => {
  return (
    <section className='container mx-auto px-4 py-12 md:px-12 lg:px-48 xl:px-80 text-slate-800'>
      <h2 className='uppercase text-2xl font-bold text-emerald-700 mb-5'>
        Cuisine
      </h2>
      <p className='mb-6'>
        Ethiopian cuisine is primarily made up of spicily conditioned vegetables
        and meat dishes. Lamb, beef, and poultry are common while pork is
        nonexistent as it is forbidden by the religious beliefs of Ethiopian
        Christians and Muslims. Christian Ethiopians fast on Wednesdays and
        Fridays, eating only vegetarian menu items. This is, in part, why there
        is an abundance of vegetarian and vegan dishes across the country.
        Ethiopians eat almost exclusively with their right hand, collecting
        ingredients with a torn-off piece of Injera (see below). It is also
        common for groups to eat together from the same large plate, often
        feeding one another.
      </p>
      <p className='mb-6'>
        Western food is available in several destinations, with Italian dishes
        (such as pasta and pizza) being the most prevalent. Fresh fruit is
        easily accessible by the many vendors selling recently picked produce
        along the main roads. In most cases, all food-preferences and allergies
        are accommodated. Please reach out to us with any special cases.
      </p>
      {/* Dishes */}
      <p className='mb-6'>
        Below are a few signature items on the Ethiopian menu. Click or tap on
        an image to learn more:
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {dishes.map((dish) => (
          <Dish
            key={dish.dishName}
            dishName={dish.dishName}
            imageUrl={dish.imageUrl}
            description={dish.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Cuisine;
