import imagecard1 from "../assests/imagecard1.png";
import imagecard2 from "../assests/imagecard2.png";
import imagecard3 from "../assests/imagecard3.png";
const ImageCards = () => {
  const cardData = [
    {
      id: 1,
      image: imagecard3,
      title: "Emma C Johnson",
      description:
        "Transform your online presence with our cutting-edge eCommerce solutions, tailored to elevate your brand.",
      description2: "Founder, Digital Dreams Co.",
    },
    {
      id: 2,
      image: imagecard2,
      title: "Michael T Brown",
      description:
        "Empowering businesses with seamless website designs that captivate and convert.",
      description2: "Creative Director, Innovate Studios",
    },
    {
      id: 3,
      image: imagecard1,
      title: "Sophia R Carter",
      description:
        "Unlock the potential of your business with our custom software solutions built to scale.",
      description2: "CEO, TechWave Solutions",
    },
  ];

  return (
    <div className="imagecards w-full px-4 py-10 sm:px-6 lg:px-[130px]  lg:py-14 mx-auto lg:mt-[150px]   ">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-5  mb-20 ">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="group flex flex-col items-center  pt-8 pl-8 pr-8 pb-7 rounded-lg justify-center h-full bg-white text-center mt-10 "
            style={{ border: "1px solid lightGrey" }}
          >
            <p className="imagecards_text">{card.description}</p>
            <div className="flex flex-row lg:gap-7 sm: gap-2 items-center">
              <img src={card.image} alt={card.title} className="imagescards" />
              <div>
                <h1 className="imagecards_head pt-3">{card.title}</h1>
                <p className="imagecards_text">{card.description2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCards;
