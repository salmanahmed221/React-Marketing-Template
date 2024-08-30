import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { ChevronUpIcon } from "lucide-react";

const MobileView = () => {
  return (
    <div
      className=" z-50 absolute flex flex-col w-full  top-20 left-0 h-auto text-2xl font-bold justify-start
     bg-black text-white px-3 py-12 space-y-4"
    >
      <FlyoutLink href="#">Home</FlyoutLink>

      <FlyoutLink href="#" FlyoutContent={About}>
        About
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={Services}>
        Services
      </FlyoutLink>

      <div className="flex items-center justify-center pt-10  space-x-4">
        <p>
          <FaFacebook className="w-10 h-10" />
        </p>
        <p>
          <AiFillInstagram className="w-10 h-10" />
        </p>
        <p>
          <FaLinkedin className="w-10 h-10" />
        </p>
      </div>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-full h-fit overflow-hidden  "
    >
      <div className="flex items-center justify-between">
        <a href={href} className="relative text-white">
          {children}
        </a>

        {children !== "Home" && (
          <div>
            <ChevronUpIcon
              className={`text-white w-6 h-6 transform transition-transform duration-1000 ${
                open ? "rotate-180 text-red-700" : "rotate-90 "
              }`}
            />
          </div>
        )}
      </div>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            // style={{ translateX: "-50%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="  top-12 bg-white text-white"
          >
            <div className="absolute  left-0 right-0 h-10 bg-transparent" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const About = () => {
  return (
    <div className="text-xl bg-black text-white font-medium p-3 space-y-2">
      <p>Our Client</p>
      <p>Our Process</p>
      <p>Our Team</p>
      <p>Faqs</p>
      <p>Testimonails</p>
    </div>
  );
};
const Services = () => {
  return (
    <div className="text-xl bg-black text-white font-medium p-3  space-y-4">
      <FlyoutLink href="#" FlyoutContent={Software}>
        Software Development
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={Salesforce}>
        Salesforce Cons
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={SAPs}>
        SAP-B1 Consulting
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={Cloud}>
        Cloud Solutions
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={Marketing}>
        Digital Marketing
      </FlyoutLink>
    </div>
  );
};

const Software = () => {
  return (
    <div className="text-xl bg-black  text-white font-medium p-3 space-y-4">
      <p>Web Development</p>
      <p>Mobile App Development</p>
      <p>CRM</p>
      <p>CMS</p>
    </div>
  );
};
const Salesforce = () => {
  return (
    <div className="text-xl bg-black text-white font-medium p-3 space-y-4">
      <p>Consulting And Advisor</p>
      <p>Industry-Specific Soultion</p>
      <p>Customization And Development</p>
    </div>
  );
};
const Cloud = () => {
  return (
    <div className="text-xl bg-black text-white font-medium p-3 space-y-4">
      <p>ERP</p>
      <p>CloudOps</p>
      <p>AWS, Azure & GCP</p>
      <p>Cloud Migration</p>
      <p>Business Process Automation</p>
    </div>
  );
};
const Marketing = () => {
  return (
    <div className="text-xl bg-black text-white font-medium p-3 space-y-4">
      <p>Marketing Strategy</p>
      <p>Social Media Management</p>
      <p>Branding & Creative Services</p>
      <p>Content Production</p>
      <p>Goggle & Meta Ads</p>
      <p>SEO</p>
    </div>
  );
};
const SAPs = () => {
  return (
    <div className="text-xl bg-black text-white font-medium p-3 space-y-4">
      <p>Consulting And Advisor</p>
      <p>Implementation</p>
      <p>Bespoke Add-on Development</p>
      <p>Traning</p>
    </div>
  );
};
export default MobileView;
