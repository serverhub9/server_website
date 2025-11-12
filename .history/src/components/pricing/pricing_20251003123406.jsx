import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { toast, Toaster } from "react-hot-toast";
import { baseURL, portal_url } from "../../baseurl";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [plans, setPlans] = useState([]);
  const [loadingPlan, setLoadingPlan] = useState(null); // Tracks which plan is loading
  const navigate = useNavigate();
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(`${baseURL}plan/plans`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.error) {
          console.error(data.message);
        } else {
          setPlans(Array.isArray(data.data) ? data.data : []);
        }
      } catch (error) {
        console.error("Error fetching the plans:", error);
      }finally{
        setLoader(false)
      }
    };

    fetchPlans();
  }, []);
  useEffect(() => {
    // Filter plans based on billing type whenever `plans` or `isMonthly` changes
    if (Array.isArray(plans)) {
      const filtered = plans.filter(
        (plan) => plan.billing_type === (isMonthly ? "monthly" : "yearly")
      );
      setFilteredPlans(filtered);
    } else {
      setFilteredPlans([]);
    }
  }, [plans, isMonthly]);

  const handleBuyNow = async (planId) => {
    setLoadingPlan(planId); // Set the loading state to the current plan ID
    const userData = JSON.parse(localStorage.getItem("user_id"));
    if (userData) {

try{

console.log("User id exist ")
      const userResponse = await fetch(`${baseURL}user/get_user_by_user_id`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: userData }),
      });

      if (!userResponse.ok) {
        throw new Error(`HTTP error! status: ${userResponse.status}`);
      }

      const userData1 = await userResponse.json();
      console.log("userData",userData1)
      if (userData1.error) {
        toast.error("Failed to fetch user email");
        return;
      }

      const email = userData1?.data?.email;
      if (!email) {
        toast.error("Email not found");
        return;
      }
      // subscribe user 
      const subscriptionResponse = await fetch(
            `${baseURL}user/subscribe_user`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                user_id: userData,
                plan_id: planId,
                email,
              }),
            }
          );
    
          if (!subscriptionResponse.ok) {
            const errorData = await subscriptionResponse.json();
            console.error("API error response:", errorData);
            throw new Error(`HTTP error! status: ${subscriptionResponse.status}`);
          }
    
          const subscriptionData = await subscriptionResponse.json();
          console.log("subscriptionData",subscriptionData)
          if (!subscriptionData.error) {
            window.location.href = subscriptionData.payment_link;
            // navigate("/success");
          } else {
            toast.error("Something went wrong");
          }
    }catch(error){
      console.log(error)
      toast.error("Something went wrong");

    }
      // setUser(userData); // Set user state if data is found
    } else {
console.log("User id exist no ")

      window.location.href=`${portal_url}login?return_route=website&id=${planId}`

    }

  };

  return (
    <div id="plans">
      <div className="pricing_card">
        <Toaster />
        <div className="pricing_data w-full px-4 sm:px-6 lg:px-[70px] mx-auto">
          <div className="flex flex-col justify-center items-center">
            <p className="card_tophead">Pricing Plans</p>
            <p className="card_toptext pb-4">
              OUR <span style={{ color: "#103DBE" }}>BEST PRICING</span>
            </p>
            <div
              className="toogle_div mt-10 bg-white rounded-full flex items-center justify-between cursor-pointer shadow-md transition-all duration-300 ease-in-out"
              onClick={() => setIsMonthly(!isMonthly)}
            >
              <div
                className={`pricing_buttons flex justify-center items-center rounded-full transition-all duration-300 ease-in-out ${
                  isMonthly
                    ? "bg-blue-600 text-white"
                    : "bg-white text-[#5F5F5F]"
                }`}
              >
                Monthly
              </div>
              <div
                className={`pricing_buttons flex justify-center items-center rounded-full transition-all duration-300 ease-in-out ${
                  !isMonthly
                    ? "bg-blue-600 text-white"
                    : "bg-white text-[#5F5F5F]"
                }`}
              >
                Yearly
              </div>
            </div>
          </div>
          {loader?
         <>
         <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>

       
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full custom-spinner"></div> 
  </div>
         </> :
          <>
          {filteredPlans.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
              {Array.isArray(filteredPlans) && filteredPlans.map((plan) => (
                <div
                  key={plan.plan_id}
                  className="group flex flex-col py-5 px-7 items-center justify-center h-full text-center mt-10 bg-white text-black"
                >
                  <p className="pricing_head">{plan.plan_name || 'Unnamed Plan'}</p>
                  <p className="pricing_description">{plan.plan_description || ''}</p>
                  <p className="pricing_description2">Starting at</p>
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
                    {plan.plan_price || '0'}
                  </p>
                  <div className="flex flex-row items-center gap-2">
                    <p className="pricing_discount">25% Discount</p>
                    <p className="pricing_original">{plan.original || ''}</p>
                  </div>
                  <div className="features_list mt-5 text-left">
                    <p className="features_title pb-1 ">Features:</p>
                    <ul>
                      {plan.features && Array.isArray(plan.features) && plan.features.map((feature, index) => (
                        <li
                          key={index}
                          className="feature_item flex flex-row items-center gap-2 pb-2"
                        >
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-blue-500"
                          />
                          <span className="text-sm">{feature?.details || 'Feature'}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className="pricing_button mt-10 bg-blue-600 text-white flex items-center justify-center gap-2"
                    onClick={() => handleBuyNow(plan.plan_id)}
                    disabled={loadingPlan === plan.plan_id} // Disable button when loading
                  >
                    {loadingPlan === plan.plan_id ? (
                      <>
                        {" "}
                        <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full custom-spinner"></div>{" "}
                        Buy Now
                      </>
                     ) : (
                       "Buy Now"
                     )}
                  </button>
                </div>
              ))}
            </div>
          )}
           </>}
         
        </div>
      </div>
    </div>
  );
};

export default Pricing;
