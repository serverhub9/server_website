import { useEffect, useRef, useState } from "react";
import { baseURL, portal_url } from "../baseurl";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import tickImage from "../assests/tick_image.png"

const SuccessPage = () => {
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();
  
    // Use useRef to track if the API has been called
    const apiCalledRef = useRef(false);
  
    const handlePaymentSuccess = async (paymentIntent, planId) => {
      try {
        const apiUrl = `${baseURL}user/handlePaymentSuccess`;
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            session_id: paymentIntent,
            plan_id: planId,
          }),
        });
  
        if (!response.ok) {
          toast.error("Something went wrong");
          setTimeout(() => {
            navigate("/");
          }, 5000);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log("Payment success response:", data);
        if (data.error) {
          toast.error(data.message);
          window.history.replaceState(null, null, window.location.pathname);
        } else {
          setTimeout(() => {
            // navigate("/");
                  window.location.href=portal_url
            
          }, 5000);
          setLoader(false);
          window.history.replaceState(null, null, window.location.pathname);
        }
      } catch (error) {
        console.error("Error fetching the plans:", error);
        setLoader(false);
        window.history.replaceState(null, null, window.location.pathname);
      }
    };
  
    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const paymentIntent = urlParams.get("payment_intent");
      const planId = urlParams.get("plan_id");
  
      if (paymentIntent && planId) {
        if (!apiCalledRef.current) {
          // Mark as called
          apiCalledRef.current = true;
  
          console.log("paymentIntent", paymentIntent);
          console.log("plan_id", planId);
  
          handlePaymentSuccess(paymentIntent, planId);
        }
      } else {
        console.error("Required parameters are missing in the URL.");
        navigate("/");
        // setLoader(false)
      }
    }, []); // Empty dependency array ensures this runs only once when the component mounts
  

  return (
    <>
      {loader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full custom-spinner"></div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="mb-6" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
             <img src={tickImage} style={{width:"100px",height:"100px",objectFit:"contain"}}/>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Payment Successful!
            </h1>
            <p className="text-gray-600 mb-6">
              Thank you for your payment. Your transaction was completed
              successfully.
            </p>
            <p className="text-gray-600 mb-6" style={{fontWeight:"bold",color:"green"}}>
              Redirecting to Dashboard ...
            </p>

            <button
              style={{ cursor: "pointer" }}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              onClick={() => (window.location.href = `${portal_url}dashboard`)}
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessPage;
