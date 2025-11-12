
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footer1 from "../assests/footer1.png";
import footer2 from "../assests/footer2.png";
import footer3 from "../assests/footer3.png";
import footer4 from "../assests/footer4.png";
import {
  faPhoneAlt,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { baseURL } from "../baseurl";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [activeLink, setActiveLink] = useState(null); // Track the active link

  const footerData = [
   
    {
      heading: "ServerHub9",
      links: ["Home", "Hosting", "Plans"],
    }, {
      heading: "Useful links",
      links: ["Terms & Conditions", "Privacy Policy"],
    },
  ];



  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(sectionId); // Set active link on click
    }
  };
 
  const handleContactClick = (type) => {
    if (type === "address") {
      alert("You clicked on Address");
    } else if (type === "phone") {
      alert("You clicked on Phone");
    } else if (type === "email") {
      alert("You clicked on Email");
    }
  };
  const navigate=useNavigate()
  const navigateToSection = (sectionId) => {
    navigate('/', { state: { targetSection: sectionId } });
  };
  const [contactAddress,setContactAddress]=useState("")
  const [contactNo,setContactNo]=useState("")
  const [contactEmail,setContactEmail]=useState("")
 const [contactInfo,setContactInfo]=useState([])
  const initializeUser = async (userId) => {
    try {
      const response = await fetch(`${baseURL}contact/contact-get`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.error) {
        // toast.error(data.message || "Failed to retrieve user details.");
      } else {
        setContactAddress(data?.data?.address)
        setContactNo(data?.data.phone_number)
        setContactEmail(data?.data?.email)
        console.log("DTA",data)
       let contactInfo1 = [
            // { icon: faMapMarkerAlt, text: data?.data?.address },
            // { icon: faPhoneAlt, text: data?.data.phone_number },
            { icon: faEnvelope, text: data?.data?.email },
          ]
          setContactInfo(contactInfo1)
        // toast.success(data.message || "User retrieved successfully!");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
    }
  };
  // const contactInfo = [
  //   { icon: faMapMarkerAlt, text: "9/4c, 1010 Avenue, NY, USA" },
  //   { icon: faPhoneAlt, text: "009-215-5596 (toll free) 009-215-5596" },
  //   { icon: faEnvelope, text: "info@example.com" },
  // ];
  useEffect(() => {
    initializeUser();
  }, []);
  return (
    <>
      <div
        className="
    footer 
    w-full
     bg-gray-900
      text-white 
      px-4 sm:px-6 lg:px-[120px] pb-20 lg:pt-20 sm: pt-10 "
      >
        <div className="container_footer">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
            {footerData.map((section, index) => (
              <div key={index} className="footer-section lg:pt-8" onClick={() => scrollToSection("services")}>
                <h4 className="footer_heading">{section.heading}</h4>
                <div
                  className="footer_line mt-0 mb-[40px] h-[4px] w-10 sm: w-10  "
                  style={{ backgroundColor: "#1868DD" }}
                ></div>
                {/* <div
  className="footer_line mt-0 mb-[40px] h-[4px] sm: w-10 mx-auto"
  style={{ backgroundColor: "#1868DD" }}
></div> */}
                <ul className="space-y-2">
                  {section.links.map((link, idx) => (
                    <li
                      key={idx}
                      className={`footer_links cursor-pointer ${
                        activeLink === link ? "active" : ""
                      }`}
                      onClick={() => {
                        if (link === "Home") {
                          navigateToSection("home");
                        } else if (link === "Hosting") {
                          navigateToSection("hosting");
                        } else if (link === "Plans") {
                          navigateToSection("plans");
                        } else if (link === "Services") {
                          navigateToSection("services");
                        } else if (link === "Clients") {
                        }else if(link==="Terms & Conditions"){
                          window.location.href="/terms"
                          }else if(link==="Privacy Policy"){
                            window.location.href="/privacy"
                            }
                        }
                      }
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="footer-section lg:pt-8 sm: pt-5 ">
              <h4 className="footer_heading">Contact Info</h4>
              <div
                className="footer_line mt-0 mb-[40px] h-[4px] w-10 "
                style={{ backgroundColor: "#1868DD" }}
              ></div>
              <ul className="space-y-2">
                {contactInfo.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex flex-row items-center gap-5 cursor-pointer"
                    onClick={() => handleContactClick(item.icon.iconName)}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      style={{ fontSize: "20px" }}
                    />
                    <span className="footer_links">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Footer;
