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
const Home = () => {
  // Initialize user details
  const [loaderFullScreen,setLoaderFullScreen]=useState(true)
  const fetchPlans = async (plan_id_d, userId) => {
    try {
      const userResponse = await fetch(`${baseURL}user/get_user_by_user_id`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: userId }),
      });

      if (!userResponse.ok) {
        throw new Error(`HTTP error! status: ${userResponse.status}`);
      }

      const userData1 = await userResponse.json();
      console.log("userData", userData1);
      if (userData1.error) {
        // toast.error("Failed to fetch user email");
        return;
      }

      let email = userData1?.data?.email;
      if (!email) {
        // toast.error("Email not found");
        return;
      }

      const response = await fetch(`${baseURL}user/subscribe_user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          plan_id: plan_id_d,
          email,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("sdfjsgdfjsgdf");
      if (!data.error) {
        window.location.href = data.payment_link;
        // navigate("/success");
      } else {
      }
    } catch (error) {
      console.error("Error fetching the plans:", error);

    } finally {
      //   setLoader(false)
      setLoaderFullScreen(false)

    }
  };
  const initializeUser = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userIdFromUrl = urlParams.get("user_id");
    const userPlan = urlParams.get("plan_id");

    // Fallback to localStorage if user ID is not in the URL
    const userId = userIdFromUrl || localStorage.getItem("user_id");

    if (userId) {
      // Store the user ID in localStorage for future use
      localStorage.setItem("user_id", userId);
      console.log("User ID used:", userId);
      if (userPlan) {
        console.log("PLAN ", userPlan);
        fetchPlans(userPlan, userId);
      }
      // Fetch user details based on the resolved user ID
      //   fetchUserDetails(userId);
    } else {
      setLoaderFullScreen(false)

      console.log("No user ID found in URL or localStorage.");
      // Handle cases where no user ID is found (e.g., redirect to login)
      // window.location.href = "/";
    }
  };
  useEffect(() => {
    initializeUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <div className="app-wrapper">
      {/* {loaderFullScreen?<div style={{width:"400px",height:"400px",marginTop:"20px",display:"flex",justifyContent:"center"}}>
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full custom-spinner"></div>

        </div>:
        <> */}
         <Header />
        <HeroSection />
        <ThreeCards />
        <Pricing />
        <TripleCards />
        <MainSection />
        <HeroCards />
        <HerocardData />
        <ImageCards />
        {/* </>}   */}
       
      </div>
      <Footer />
    </>
  );
};
export default Home;
