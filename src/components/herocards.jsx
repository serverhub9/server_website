import herocard1 from '../assests/herocard1.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'; 
const HeroCards=()=>{
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // setMenuOpen(false);
    }
  };
    return(
        <>
       
<div class="w-full  mx-auto px-4 sm:px-6 lg:px-8 lg:pt-20 sm: pt-0">

  <div class="grid md:grid-cols-2 gap-4 md:gap-2 xl:gap-0 md:items-center lg:px-[80px] ">
  <div class="relative ms-4">
   <img src={herocard1} className='herocard_images'/>
  </div>

    <div className='sm: pl-3 '>
   <h2 className='herocard_head2 lg:pb-10 sm: pb-2  '>Get best plans for more Power</h2>
   <p className='herocard_text lg:pb-10 sm: pb-4'>Our best-in-class WordPress solution, with additional optimization to make running a WooCommerce online store easy. Our prices are clear and straight forward so you can</p>
   <div className="tick-list">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="tick-item flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="tick_icon" />
            <span className="tick_text pr-4 ">Our best-in-class WordPress solution with additional optimization.</span>
          </div>
        ))}
      </div>
      <button onClick={() => scrollToSection("plans")} className='herocard_button mt-7 '>Get stared</button>
    </div>
</div>
</div>
        </>
    )
}
export default HeroCards