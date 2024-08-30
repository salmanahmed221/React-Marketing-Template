import Company from "../../assets/Company/company.png";
import { BsTriangleFill } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import gurantee from "../../assets/Company/gurantee.png";
import people from "../../assets/Company/people.png";
import phone from "../../assets/Company/phone.png";

function OurCompany() {
  return (
    <div>
      <div className="md:flex items-center md:mx-40 mx-7 gap-x-16 py-20">
        {/* 1st */}
        <div className="basis-[50%]">
          <h5>
            <span className="flex items-center text-[17px] text-[#cb0808] font-bold gap-x-1">
              <BsTriangleFill />
              ABOUT OUR COMPANY
            </span>
          </h5>
          <h1 className="md:text-6xl text-3xl font-bold pt-3 md:pt-0 md:w-[110%]">
            We Want to Give You The Best Service
          </h1>
          <img src={Company} alt="" className="md:pt-8 pt-4" />
        </div>
        {/* 2nd */}
        <div className="basis-[50%] pt-6">
          <p className="md:w-[85%] text-justify">
            In today's dynamic digital world, a strong online presence is
            crucial for businesses of all sizes. At Collectum Solutions, we're
            passionate about helping you succeed online. We leverage our
            expertise to craft a customized digital strategy that propels your
            brand forward.
          </p>
          {/* Gurantee */}
          <div className="flex space-x-4 mt-6">
            <div className="">
              <img
                src={gurantee}
                alt=""
                className="md:w-[170px] md:h-[90px] w-[350px] h-[70px]"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">Building Success Together</h2>
              <p className="text-justify">
                We believe in collaboration. We take the time to understand your
                unique business goals and develop a strategy that aligns
                perfectly with your vision.
              </p>
            </div>
          </div>
          <div className="bg-[#ececed] h-[1.5px] md:w-[500px] w-full mt-7"></div>
          {/* People */}
          <div className="flex space-x-4 mt-6">
            <div>
              <img
                src={people}
                alt=""
                className="md:w-[110px] md:h-[90px] w-[240px] h-[75px]"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">
                Ready to Unlock Your Potential?
              </h2>
              <p className="text-justify">
                Contact Collectum Solutions today for a free consultation! Let's
                craft your digital success story
              </p>
            </div>
          </div>
          <div className="bg-[#ececed] h-[1.5px] md:w-[500px] w-full mt-7"></div>
          {/* Button and Phone */}
          <div className="md:flex items-center space-x-7 mt-5">
            {/* Button */}
            <div>
              <button className="flex items-center mt-7 space-x-3 font-bold bg-[#d10d16] hover:text-black hover:scale-x-105 text-white px-6 py-4 rounded-full mb-5">
                <p>LEARN MORE</p>
                <FaLongArrowAltRight />
              </button>
            </div>
            {/* Phone */}
            <div className="flex items-center">
              <div>
                <img src={phone} alt="" className="hover:animate-pulse"/>
              </div>
              <div>
                <p>Call Us Now</p>
                <p className="font-bold">+92-336-1077352</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCompany;
