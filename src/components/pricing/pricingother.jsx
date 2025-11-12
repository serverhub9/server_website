
import VpsCard from './vpscard';
import { useState } from 'react';
import pricing from "../../assests/pricing.png"
const PricingOther = () => {
  const cardData = [
    {
      id: 1,
      image:pricing,
      title: "Dedicated Server",
      description: "The High performance cloud platform ever",
      amount: "29.99",
     
      original: "$29.99",
    },
    {
      id: 2,
      image:pricing,
      title: "Reseller Hosting",
      description: "The ideal solution for corporate websites and larger blogs",
      amount: "39",
    
      original: "$29.99",
    },
    {
      id: 3,
      image:pricing,
      title: "Shared Hosting",
      description: "The High performance cloud platform ever",
      amount: "17",
      
      original: "$29.99",
    },
  ];

  return (
    <div
      className="pricing_card w-full px-4 py-0 sm:px-6 lg:px-[0px] lg:py-14 mx-auto"
      style={{ paddingTop: "0px", paddingBottom: "100px" }}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        {cardData.map((card, index) => (
       
          index === 1 ? (
            <VpsCard key={card.id} card={card} />
          ) : (
            <div
              key={card.id}
              className="group flex flex-col py-5 px-7 items-center justify-center h-full text-center mt-10 bg-white"
            >
                <img src={pricing} className='pricing_image'/>
              <h1 className="pricing_head">{card.title}</h1>
              <p className="pricing_description">{card.description}</p>
              <p className="pricing_description2">Starting at </p>

              <p className="pricing_amount relative pl-4">
                <span
                  style={{
                    fontSize: "25px",
                    position: "absolute",
                    top: "15px",
                    left: "0",
                    marginRight: "5px",
                  }}
                >
                  $
                </span>{" "}
                {card.amount}
              </p>
              <div className="flex flex-row items-center gap-2">
                <p className="pricing_discount">25% Discount</p>
                <p className="pricing_original">{card.original}</p>
              </div>
              <button className="pricing_button mt-10 bg-blue-600 text-white">
                Buy Now
              </button>
            </div>
          )
        ))}
      </div>
    </div>


  );
};

export default PricingOther;
