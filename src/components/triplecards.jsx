import cardone from "../assests/cardone.png"
import cardtwo from "../assests/cardtwo.png"
import cardthree from "../assests/cardthree.png"
const TripleCards = () => {
 
  const cardData = [
    {
      id: 1,
      image: cardone,
      title: "Shared Hosting",
      description: "Share processes and data secure lona need to know basis",
    },
    {
      id: 2,
      image: cardtwo,
      title: "VPS Hosting",
      description: "Share processes and data secure lona need to know basis",
    },
    {
      id: 3,
      image: cardthree,
      title: "Cloud Hosting",
      description: "Share processes and data secure lona need to know basis",
    },
  ];

  return (
    <div id="services">
    <div className="w-full px-4 py-10 sm:px-6 lg:px-[150px]  lg:py-14 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <p className="card_tophead">Best Service</p>
        <p className="card_toptext">
        OUR <span style={{ color: "#103DBE" }}>BEST SERVICE</span>
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-20  md:gap-10 sm:gap-4 mt-5 mt-10">

        {cardData.map((card) => (
          <div key={card.id} className="triplecards lg:pt-10 lg:pb-10 sm: pt-4 sm: pb-4  group flex flex-col px-10  items-center justify-center h-full bg-white text-center  ">
            <img src={card.image} alt={card.title} className="triplecards_images" />
            <h1 className='triplecards_head pt-5'>{card.title}</h1>
            <p className='triplecards_text'>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TripleCards;