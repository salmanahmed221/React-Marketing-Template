import { BsTriangleFill } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import tick from "../../assets/Services/tick.png";
import sap from "../../assets/Sap/sap.webp";
import { RevealWrapper } from "next-reveal";

function Sap() {
  return (
    <div>
      {/* Service */}
      <div className="md:flex bg-[#151515] text-white items-center md:px-44 px-5 py-16 md:py-0 mt-7">
        {/* 1st */}
        <div>
          <h1 className="text-4xl font-bold">SAP-B1 Consulting</h1>
          <p className="text-[#909090] text-xl md:w-[110%] pt-2">
            Leverage the power of SAP B1 with our consulting services. We ensure
            seamless implementation, maximize efficiency, and unlock valuable
            business insights.
          </p>
          {/* Icon and Text Grid */}
          <div className="md:grid grid-cols-2 pt-6 space-y-3 md:space-y-0 md:gap-y-3 w-[80%] text-[#909090]">
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>Consulting and Advisory</p>
            </div>
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>implementation</p>
            </div>
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>Bespoke Add-on Development</p>
            </div>
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>Training</p>
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
            <img src={sap} alt="" height={1200} width={1200} />
          </div>
        </RevealWrapper>
      </div>
    </div>
  );
}

export default Sap;
