import { BsTriangleFill } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import tick from "../../assets/Services/tick.png";
import software from "../../assets/Services/software.webp";
import { RevealWrapper } from "next-reveal";

function Software() {
  return (
    <div>
      {/* Heading */}
      <div className="text-center">
        <h5 className="flex items-center justify-center text-[17px]  font-bold gap-x-1">
          <BsTriangleFill className="text-[#cb0808]" />
          SERVICES
        </h5>
        <h1 className="md:text-5xl text-3xl font-bold">Services we Offer</h1>
      </div>
      {/* Service */}
      <div className="md:flex bg-[#151515] text-white items-center md:px-44 px-5 py-16 md:py-0 mt-7">
        {/* 1st */}
        <div>
          <h1 className="text-4xl font-bold">Software Development</h1>
          <p className="text-[#909090] text-xl md:w-[110%] pt-2">
            Our skilled developers craft custom software solutions that
            streamline your operations and empower your teams
          </p>
          {/* Icon and Text Grid */}
          <div className="md:grid grid-cols-2 pt-6 space-y-3 md:space-y-0 md:gap-y-3 w-[80%] text-[#909090]">
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>Web Development</p>
            </div>
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>Mobile App Development</p>
            </div>
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>CRM</p>
            </div>
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>CMS</p>
            </div>
          </div>
          <div className="bg-[#ececed] h-[0.5px] md:w-[600px] w-full mt-7"></div>
          {/* Button */}
          <button className="flex items-center mt-7 space-x-3 font-bold bg-[#d10d16] hover:text-black hover:scale-x-105 text-white px-6 py-4 rounded-full mb-5">
            <p>LEARN MORE</p>
            <FaLongArrowAltRight />
          </button>
        </div>
        {/* 2nd */}
        <RevealWrapper
          origin="bottom"
          delay={200}
          duration={1000}
          distance="200px"
          reset={true}
        >
          <div>
            <img src={software} alt="" height={1000} width={1000} />
          </div>
        </RevealWrapper>
      </div>
    </div>
  );
}

export default Software;
