import { FaLongArrowAltRight } from "react-icons/fa";
import tick from "../../assets/Services/tick-remove.png";
import saleforce from "../../assets/Saleforce/salesforce.webp";
import { RevealWrapper } from "next-reveal";

function Saleforce() {
  return (
    <div>
      {/* Service */}
      <div className="md:flex  items-center md:px-44 px-5 py-16 md:py-0 mt-7 space-y-20 md:space-y-0">
        {/* 1st */}
        <RevealWrapper
          origin="bottom"
          delay={200}
          duration={1000}
          distance="200px"
          reset={true}
        >
          <div>
            <img src={saleforce} alt="" height={800} width={800} />
          </div>
        </RevealWrapper>
        {/* 2nd */}
        <div>
          <h1 className="text-4xl font-bold">Salesforce Consulting​</h1>
          <p className="text-[#909090] text-xl pt-2">
            Our certified experts are dedicated to tailoring and optimizing the
            perfect Salesforce Cloud solution for your unique needs.
          </p>
          {/* Icon and Text Grid */}
          <div className="md:grid grid-cols-1 pt-6 space-y-3 md:space-y-0 md:gap-y-3 w-[80%] text-[#909090]">
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>Consulting And Advisor</p>
            </div>
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>Industry-Specific Solutions</p>
            </div>
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>Customization And Development</p>
            </div>
          </div>
          {/* Button */}
          <button className="flex items-center mt-7 space-x-3 font-bold bg-[#d10d16] hover:text-black hover:scale-x-105 text-white px-6 py-4 rounded-full mb-5">
            <p>LEARN MORE</p>
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Saleforce;
