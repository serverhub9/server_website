import card1 from "../assests/card1.png";
import card2 from '../assests/card2.png';
import card3 from '../assests/card3.png'
const ThreeCards = () => {
 
  const cardData = [
    {
      id: 1,
      image: card1,
      title: "99.9% Uptime Guarantee",
      description: "Share processes and data secure lona need to know basis",
    },
    {
      id: 2,
      image: card2,
      title: "Safe and Securedt",
      description: "Our team assured your web site is always safe and secure",
    },
    {
      id: 3,
      image: card3,
      title: "Our Dedicated Support",
      description: "We finally found a host that truly understood the unique",
    },
  ];

  return (
    <div id='hosting'>
    <div className="w-full px-4 py-10 sm:px-6 lg:px-[150px]  lg:py-14 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <p className="card_tophead">Best Hosting</p>
        <p className="card_toptext">
          WHY <span style={{ color: "#103DBE" }}>CHOOSE US</span>
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-5  ">

        {cardData.map((card) => (
          <div key={card.id} className="group flex flex-col items-center justify-center h-full bg-white text-center lg:mt-10 sm: mt-2 ">
            <img src={card.image} alt={card.title} className="cards_images" />
            <h1 className='cards_head pt-3'>{card.title}</h1>
            <p className='cards_text'>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ThreeCards;
