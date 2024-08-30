import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Header/logo.png";
import logowhite from "../../assets/Header/logowhite.png";
import MobileView from "./mobileview/MobileView";

function Header() {
  const [nav, setNav] = useState(true);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isMainMenuOpen2, setIsMainMenuOpen2] = useState(false);
  return (
    <div className="flex justify-between md:py-1 py-3 px-2 md:px-3 w-full mx-auto md:bg-white bg-black">
      <div className="font-semibold block text-[25px] z-20">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="md:h-[90px] md:w-[270px] md:inline-flex w-[200px] hidden"
          />
        </Link>
        <Link to={"/"}>
          <img
            src={logowhite}
            alt="logo"
            className="md:h-[90px] md:w-[270px] w-[200px] md:hidden"
          />
        </Link>
      </div>
      {/* Links */}
      <div className="md:flex hidden items-center gap-x-16">
        <div className="font-bold text-xl">Home</div>
        <div
          className="relative items-center"
          onMouseEnter={() => setIsMainMenuOpen(true)}
          onMouseLeave={() => setIsMainMenuOpen(false)}
        >
          {/* Main Dropdown Trigger */}
          <Link className="font-bold text-xl">
            About
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              className="ml-1 inline-block"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16"
                data-original="#000000"
              />
            </svg>
          </Link>

          {/* Main Dropdown Content */}
          {isMainMenuOpen && (
            <div className="absolute left-0 font-bold text-xl z-10 w-72 bg-white border border-gray-200 rounded-md shadow-lg ">
              <Link
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Our Client
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Our Process
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Our Team
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Faqs
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Testimonial
              </Link>
            </div>
          )}
        </div>
        <div
          className="relative items-center"
          onMouseEnter={() => setIsMainMenuOpen2(true)}
          onMouseLeave={() => setIsMainMenuOpen2(false)}
        >
          {/* Main Dropdown Trigger */}
          <Link className="font-bold text-xl">
            Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              className="ml-1 inline-block"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16"
                data-original="#000000"
              />
            </svg>
          </Link>

          {/* Main Dropdown Content */}
          {isMainMenuOpen2 && (
            <div className="absolute left-0 z-10 font-bold text-xl  w-72 bg-white border border-gray-200 rounded-md shadow-lg">
              {/* Nested Dropdown Parent */}
              <div className="relative group">
                <Link
                  href="#"
                  className="px-4 py-2 flex items-center justify-between text-gray-800 hover:bg-gray-100"
                >
                  <p>Software Development</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </Link>

                {/* Nested Dropdown Content */}
                <div className="absolute left-full top-0 mt-0 w-72 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Mobile App Development
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    CRM
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    CMS
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <Link
                  href="#"
                  className="flex justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  <p>Salesforce Consulting</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </Link>

                {/* Nested Dropdown Content */}
                <div className="absolute left-full top-0 mt-0 w-72 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Consulting and Advistor
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Industry-Specific Solutions
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Customization And Development
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <Link
                  href="#"
                  className="flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  <p>SAP-B1 Consulting</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </Link>

                {/* Nested Dropdown Content */}
                <div className="absolute left-full top-0 mt-0 w-72 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Consulting And Advisory
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Implementation
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Bespoke Add-On Development
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Training
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <Link
                  href="#"
                  className="flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  <p>Cloud Solution</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </Link>

                {/* Nested Dropdown Content */}
                <div className="absolute left-full top-0 mt-0 w-72 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    ERP
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    CloudOps
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    AWS, AZURE & GCP
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Cloud Migration
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Bussiness Process Automation
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <Link
                  href="#"
                  className="flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  <p>Digital Marketing</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </Link>

                {/* Nested Dropdown Content */}
                <div className="absolute left-full top-0 mt-0 w-72 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Digital Strategy
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Social Media Management
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Branding & Creative Services
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Content Production
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Google & Meta Ads
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    SEO
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Button */}
      <div className="md:flex items-center text-2xl gap-x-2 hidden">
        <button className="bg-[#dd1313] text-white px-11 py-4 rounded-full hover:bg-black">
          Contact us
        </button>
      </div>

      <div className=" flex items-center md:hidden   ">
        <div
          className=""
          onClick={() => {
            setNav(!nav);
          }}
        >
          {nav ? (
            <GiHamburgerMenu className="w-10 h-10 text-white" />
          ) : (
            <ImCross className="w-10 h-10 text-white" />
          )}
        </div>
        {!nav ? <MobileView /> : null}
      </div>
    </div>
  );
}

export default Header;
