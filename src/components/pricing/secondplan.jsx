// import React from "react";
// import pricing from "../../assests/pricing.png"
// const SecondPlanCard = ({ plan, isMonthly }) => {
//   return (
//     <div
//       className="group flex flex-col py-5 px-7 items-center justify-center h-full text-center mt-10"
//       style={{
//         background: 
//            "linear-gradient(-45deg, #1045db 0%, #15095e 60%, #15095e 99%)"
   
     
//       }}
//     >
//          <img src={pricing} className='pricing_image'/>
//          <p className="pricing_head" style={{color:'white'}}>
//                   {plan.plan_name}
//                 </p>
//       <p className="pricing_description"  style={{color:'white'}}>{plan.plan_description}</p>
//       <p className="pricing_description2"  style={{color:'white'}}>Starting at</p>

//       <p className="pricing_amount relative pl-4"  style={{color:'white'}}>
//         <span
//           style={{
//             fontSize: "25px",
//             position: "absolute",
//             top: "15px",
//             left: "0",
//             marginRight: "5px",
//           }}
//         >
//           $
//         </span>{" "}
//         {plan.plan_price}
//       </p>
//       <div className="flex flex-row items-center gap-2">
//         <p className="pricing_discount"  style={{color:'white'}}>25% Discount</p>
//         <p className="pricing_original"  style={{color:'white'}}>{plan.original}</p>
//       </div>
//       <button className="pricing_button2 mt-10 bg-blue-600 text-white">
//         Buy Now
//       </button>
//     </div>
//   );
// };

// export default SecondPlanCard;
import React from "react";
import pricing from "../../assests/pricing.png";

const SecondPlanCard = ({ plan, isMonthly }) => {
  return (
    <div
      className="group flex flex-col py-5 px-7 items-center justify-center h-full text-center mt-10"
      style={{
        background: "linear-gradient(-45deg, #1045db 0%, #15095e 60%, #15095e 99%)",
      }}
    >
      {!isMonthly && (
        <img src={pricing} className="pricing_image" alt="Pricing" />
      )}
      <p className="pricing_head" style={{ color: "white" }}>
        {plan.plan_name}
      </p>
      <p className="pricing_description" style={{ color: "white" }}>
        {plan.plan_description}
      </p>
      <p className="pricing_description2" style={{ color: "white" }}>
        Starting at
      </p>

      <p className="pricing_amount relative pl-4" style={{ color: "white" }}>
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
        {plan.plan_price}
      </p>
      <div className="flex flex-row items-center gap-2">
        <p className="pricing_discount" style={{ color: "white" }}>
          25% Discount
        </p>
        <p className="pricing_original" style={{ color: "white" }}>
          {plan.original}
        </p>
      </div>
      <button className="pricing_button2 mt-10 bg-blue-600 text-white">
        Buy Now
      </button>
    </div>
  );
};

export default SecondPlanCard;
