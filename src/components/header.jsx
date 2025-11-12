import React, { useState, useEffect } from "react";
import logo from "../assests/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { toast, Toaster } from "react-hot-toast";
import { baseURL, portal_url, website_url } from "../baseurl";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUserName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // Toggle the menu state
  const handleOutsideClick = (event) => {
    if (!event.target.closest(".menu") && !event.target.closest(".menu_icon")) {
      setMenuOpen(false);
    }
  };
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };
  const handleLogout = () => {
    localStorage.removeItem("user_id");
    setUserName(null);
    toast.success("Logout successfully.");
    setTimeout(() => {
      window.location.href = website_url;
    }, 1000);
  };

  // Handle login button click
  const handleLogin = () => {
    window.location.href = `${portal_url}login?return_route=website`;
  };
  const location = useLocation();
const navigate=useNavigate()
  const navigateToSection = (sectionId) => {
    navigate('/', { state: { targetSection: sectionId } });
  };
  useEffect(() => {
    if (location.state?.targetSection) {
      scrollToSection(location.state.targetSection);
    }
  }, [location.state]);
  // Scroll to a specific section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);
  // Fetch user details from the API
  const fetchUserDetails = async (userId) => {
    setLoading(true); // Start the loader
    try {
      const response = await fetch(`${baseURL}user/get_user_by_user_id`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: userId }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("response", data);
      if (data.error) {
        // toast.error(data.message || "Failed to retrieve user details.");
        setUserName(null);
      } else {
        // toast.success(data.message || "User retrieved successfully!");
        setUserName(data?.data?.user_name || data?.data?.email);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false); // Stop the loader
    }
  };

  // Initialize user details
  const initializeUser = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userIdFromUrl = urlParams.get("user_id");

    // Fallback to localStorage if user ID is not in the URL
    const userId = userIdFromUrl || localStorage.getItem("user_id");

    if (userId) {
      // Store the user ID in localStorage for future use
      localStorage.setItem("user_id", userId);
      console.log("User ID used:", userId);

      // Fetch user details based on the resolved user ID
      fetchUserDetails(userId);
    } else {
      console.log("No user ID found in URL or localStorage.");
      // Handle cases where no user ID is found (e.g., redirect to login)
      // window.location.href = "/";
    }
  };

  // Load user details on component mount
  useEffect(() => {
    initializeUser();
  }, []);

  return (
    <header className="header">
      <div className="navbar_data lg:px-[100px]">
        <img
          src={logo}
          alt="Logo"
          className="header_logo"
          style={{ width: "150px", height: "auto", objectFit: "contain" }}
        />
        {menuOpen ? (
          <div className="menu_icon lg:hidden" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </div>
        ) : (
          <div className="menu_icon lg:hidden" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
        )}

        <ul
          className={`menu header_list ${
            menuOpen ? "block" : "hidden"
          } lg:flex`}
        >
          <li className="list_item" onClick={() => {
            // scrollToSection("home")
        navigateToSection("home")
            }}>
            Home
          </li>
          <li className="list_item" onClick={() => navigateToSection("hosting")}>
            Why Us
          </li>
          <li className="list_item" onClick={() => navigateToSection("plans")}>
            Plans
          </li>
          <li className="list_item" onClick={() => navigateToSection("services")}>
            Services
          </li>
          {window.innerWidth < 769 ? (
            <>
              {user ? (
                <li className="list_item" onClick={handleLogout}>
                  Logout
                </li>
              ) : null}{" "}
            </>
          ) : null}

          {/* <li className="list_item">
          <button
                className="login_button"
                onClick={handleLogin}
                style={{ backgroundColor: "#3482FF", color: "white" }}
              >
                Dashbaord
              </button>
            </li> */}
          {menuOpen && (
            <>
              <li className="list_item">
                {loading ? (
                  <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full custom-spinner"></div>
                ) : user ? (
                  <>
                    <button
                      className="dashboard_button"
                      onClick={() => {
                        window.location.href = portal_url;
                      }}
                      style={{ backgroundColor: "#3482FF", color: "white" }}
                    >
                      My Dashboard
                    </button>
                    <span
                      className="text-white cursor-pointer"
                      style={{ fontWeight: 700, marginLeft: "20px" }}
                      //  onClick={toggleDropdown}
                      onClick={handleLogout}
                    >
                      {/* {user} */}
                      Logout
                    </span>
                  </>
                ) : (
                  <button
                    className="login_button"
                    onClick={handleLogin}
                    style={{ backgroundColor: "#3482FF", color: "white" }}
                  >
                    Login
                  </button>
                )}

                {/* end  */}
              </li>
            </>
          )}
        </ul>

        {window.innerWidth < 769 ? null : (
          <>
            {" "}
            {loading ? (
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full custom-spinner"></div>
            ) : user ? (
              <div className="relative">
                <button
                  className="dashboard_button"
                  onClick={() => {
                    window.location.href = portal_url;
                  }}
                  style={{ backgroundColor: "#3482FF", color: "white" }}
                >
                  My Dashboard
                </button>
                <span
                  className="text-white cursor-pointer"
                  style={{ fontWeight: 700, marginLeft: "20px" }}
                  // onClick={toggleDropdown}
                  onClick={handleLogout}
                >
                  {/* {user} */}
                  Logout
                </span>
              </div>
            ) : (
              <>
                <button
                  className="login_button lg:block hidden"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </>
            )}
          </>
        )}
      </div>
      <Toaster />
    </header>
  );
};

export default Header;
