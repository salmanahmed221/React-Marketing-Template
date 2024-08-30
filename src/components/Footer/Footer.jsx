import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import dice from "../../assets/Footer/dice.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";

function Footer() {
  return (
    <div className="md:flex bg-[#171717] text-white md:py-20 md:px-40 px-5 py-7">
      {/* Left part */}
      <div className="basis-[60%]">
        <div className="md:flex gap-x-4">
          {/* Heading */}
          <h1 className="md:text-7xl text-5xl font-bold">Get In Touch</h1>
          {/* Image */}
          <img
            src={dice}
            alt="dice"
            width={70}
            height={70}
            className="mt-4 md:mt-0 hover:animate-spin"
          />
        </div>
        {/* Text */}
        <p className="pt-4 text-justify md:w-[60%] text-[#878787]">
          Elevate your digital presence with Collectum Solutions. Our tailored
          strategies and innovative solutions drive impactful results for your
          business. Partner with us for success.
        </p>
        {/* Icons */}
        <div className="flex pt-9 gap-x-5">
          <RiFacebookCircleFill size={30} className="hover:text-[#dd1313]" />
          <FaInstagram size={30} className="hover:text-[#dd1313]" />
          <FaLinkedin size={30} className="hover:text-[#dd1313]" />
        </div>
        {/* Copyright */}
        <p className="pt-9 text-[#878787] ">
          © Copyright 2024 By Collectum Solutions
        </p>
      </div>

      {/* Right part */}
      <div className="basis-[40%]">
        <div className="md:flex gap-x-28">
          {/* Services */}
          <div className="pt-5 md:pt-0">
            <h3 className="text-3xl font-bold">Services</h3>
            <div className="pt-3 text-[#878787]">
              <Link className="hover:text-[#dd1313] hover:border-b border-[#dd1313]">
                Software Development
              </Link>
            </div>
            <div className="pt-3 text-[#878787]">
              <Link className="hover:text-[#dd1313] hover:border-b border-[#dd1313]">
                Salesforce Consulting
              </Link>
            </div>
            <div className="pt-3 text-[#878787]">
              <Link className="hover:text-[#dd1313] hover:border-b border-[#dd1313]">
                SAP-B1 Consulting
              </Link>
            </div>
            <div className="pt-3 text-[#878787]">
              <Link className="hover:text-[#dd1313] hover:border-b border-[#dd1313]">
                Cloud Solutions
              </Link>
            </div>
            <div className="pt-3 text-[#878787]">
              <Link className="hover:text-[#dd1313] hover:border-b border-[#dd1313]">
                Digital Marketing
              </Link>
            </div>
          </div>
          {/* Links */}
          <div className="pt-5 md:pt-0">
            <h3 className="text-3xl font-bold">Links</h3>
            <div className="pt-3 text-[#878787]">
              <Link className="hover:text-[#dd1313] hover:border-b border-[#dd1313]">
                About
              </Link>
            </div>
            <div className="pt-3 text-[#878787]">
              <Link className="hover:text-[#dd1313] hover:border-b border-[#dd1313]">
                Contact us
              </Link>
            </div>
            <div className="pt-3 text-[#878787]">
              <Link className="hover:text-[#dd1313] hover:border-b border-[#dd1313]">
                Client
              </Link>
            </div>
          </div>
        </div>
        {/* Line */}
        <div className="bg-[#5b5b5b] h-[1.5px] md:w-[500px] w-full mt-7"></div>
        {/* Visit us */}
        <div className="pt-4">
          <h3 className="flex items-center gap-x-2 text-3xl font-bold">
            <div>
              <FaLocationDot />
            </div>
            <div>Visit Us</div>
          </h3>
          <p className="text-[#878787] pt-4 text-xl">
            77-D, D-Block Commercial DHA EME Sector, Lahore,53710
          </p>
        </div>
        {/* Call us */}
        <div className="pt-4">
          <h3 className="flex items-center gap-x-2 text-3xl font-bold">
            <div>
              <IoCallSharp />
            </div>
            <div>Call Us</div>
          </h3>
          <p className="text-[#878787] pt-4 text-xl">+92 336 1077352</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
