import div1 from "../assests/div1.png";
import div2 from "../assests/div2.png";
import div3 from "../assests/div3.png";
import div4 from "../assests/div4.png";
import div5 from "../assests/div5.png";
import div6 from "../assests/div6.png";
import div7 from "../assests/div7.png";
const MainSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // setMenuOpen(false);
    }
  };
  const cardData = [
    {
      image: div1,
      title: "Days money back guarantee",
      description:
        "Share processes and data secure lona need to know basis without the need.",
      buttonText: "Know More",
    },
    {
      image: div2,
      title: "24/7 Customer Support",
      description:
        "Our team is available 24/7 to ensure you receive the best support possible.",
      buttonText: "Know More",
    },
  ];

  return (
    <>
      <div className="mainsection w-full pt-[100px] pb-[160px] relative">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="main_heading">
            We don’t compromise with the best Hosting Solution
          </h2>
        </div>
        <div className="divcards grid sm:grid-cols-2 gap-6 mt-10 px-4 lg:px-[120px]">
          {cardData.map((card, index) => (
            <div key={index} className="div_cards px-4 py-7 bg-white  ">
              <div className="divcardsdata  gap-4">
                <img src={card.image} className="div-images" alt={card.title} />
                <div>
                  <h1 className="div_head ">{card.title}</h1>
                  <p className="div_text">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sliderimages flex flex-row justify-between lg:gap-20 sm: gap-10 items-center lg:px-[120px] lg:pt-[200px]  sm: pt-[40px] lg:pb-[80px] sm: pb-[30px]  ">
        <img src={div3} />
        <img src={div4} />
        <img src={div5} />
        <img src={div6} />
        <img src={div7} />
      </div>
      <p className="line  "></p>
    </>
  );
};

export default MainSection;
