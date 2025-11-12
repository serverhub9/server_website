// import Header from './components/header';
import Header from "../components/header";
import HeroSection from "../components/herosection";
import ThreeCards from "../components/threecards";
import Pricing from "../components/pricing/pricing";
import TripleCards from "../components/triplecards";
import MainSection from "../components/mainsection";
import HeroCards from "../components/herocards";
import HerocardData from "../components/herocarddata";
import ImageCards from "../components/imagecards";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { baseURL } from "../baseurl";
import TermsData from "../components/termsdata";
const Terms = () => {
 
  return (
    <>
      {/* <div className="app-wrapper" > */}
      {/* {loaderFullScreen?<div style={{width:"400px",height:"400px",marginTop:"20px",display:"flex",justifyContent:"center"}}>
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full custom-spinner"></div>

        </div>:
        <> */}
         <Header />
         <TermsData/>
      
        {/* </>}   */}
       
      {/* </div> */}
      <Footer />
    </>
  );
};
export default Terms;
