import herocard2 from "../assests/herocard2.png"
import icon1 from "../assests/icon1.png"
import icon2 from "../assests/icon2.png"
import icon3 from "../assests/icon3.png"
const HerocardData=()=>{
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // setMenuOpen(false);
    }
  };
    return(
        <>   
<div class="w-full  mx-auto px-4 sm:px-6 lg:px-8 lg:pt-20  sm: pt-5">
<div class="grid md:grid-cols-2 gap-4 md:gap-2 xl:gap-10 md:items-center lg:px-[80px] ">
  <div className='sm: pl-3 '>
 <h2 className='herocard_head2 pb-10 '>Powerful Server and Platform</h2>
   <div>
    <div className='flex flex-row items-center gap-2'>
    <img src={icon1} className='carddata_image mt-2  '/>
    <p className='carddata_head'> Better Security and faster Server</p>
    </div>
 <p className="carddata_text pl-10 ml-2 ">Our best-in-class WordPress solution, with additio nal optiz ation to make running a WooCommerce</p>
   </div>
   <div>
    <div className='flex flex-row items-center mt-5 gap-2  '>
    <img src={icon2} className='carddata_image mt-2  '/>
    <p className='carddata_head'> Better Security and faster Server</p>
    </div>
 <p className="carddata_text pl-10 ml-2">Our best-in-class WordPress solution, with additio nal optiz ation to make running a WooCommerce</p>
   </div>


   <div>
    <div className='flex flex-row items-center mt-5 gap-2 '>
    <img src={icon3} className='carddata_image mt-2 '/>
    <p className='carddata_head'> Better Security and faster Server</p>
    </div>
 <p className="carddata_text pl-10 ml-2">Our best-in-class WordPress solution, with additio nal optiz ation to make running a WooCommerce</p>
   </div>
   
   
    <button className='herocard_button mt-7 ' onClick={() => scrollToSection("plans")}>Get stared</button>
  </div>
  <div class="relative ms-4">
 <img src={herocard2} className='herocard_images2'/>
</div>  
</div>
</div>
        </>
    )
}
export default HerocardData
