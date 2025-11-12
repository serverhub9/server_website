import hero from "../assests/hero.png";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // setMenuOpen(false);
    }
  };
  return (
    <>
      <div id="home">
        <div class="herosection w-full mx-auto px-4 sm:px-6 lg:pl-[120px] lg:pb-20 sm: pb-10 ">
          <div class="grid md:grid-cols-2 gap-4 md:gap-2 xl:gap-0  md:items-center">
            <div className="pt-5 ">
              <p className="hero_head">we provide</p>
              <h1 className="hero_heading pt-1 ">Premium Hosting</h1>
              <p className="hero_text pt-3 ">
                share process and data securely on a need to know basis{" "}
                <br></br>without the need for reconciliation it combines a
                permission
              </p>
              <div className="herobuttons mt-8  gap-0">
                <button
                  className="knowmore_button"
                  onClick={() => scrollToSection("plans")}
                >
                  Get Started
                </button>
              </div>
            </div>
            <div class="relative ms-4">
              <img src={hero} className="hero_image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
