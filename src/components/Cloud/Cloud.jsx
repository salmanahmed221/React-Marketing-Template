import { FaLongArrowAltRight } from "react-icons/fa";
import tick from "../../assets/Services/tick-remove.png";
import cloud from "../../assets/Cloud/cloud.webp";
import { RevealWrapper } from "next-reveal";

function Cloud() {
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
          <div className="basis-[90%]">
            <img src={cloud} alt="" />
          </div>
        </RevealWrapper>
        {/* 2nd */}
        <div className="basis-[10%]">
          <h1 className="text-4xl font-bold">Cloud Solutions​</h1>
          <p className="text-[#909090] text-xl pt-2">
            Embrace the flexibility and scalability of cloud computing. We guide
            you in selecting the right cloud solutions and ensure a smooth
            migration process.
          </p>
          {/* Icon and Text Grid */}
          <div className="md:grid grid-cols-2 pt-6 space-y-3 md:space-y-0 md:gap-y-3 w-[80%] text-[#909090]">
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>ERP</p>
            </div>
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>CloudOps</p>
            </div>
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>AWS, Azure & GCP</p>
            </div>
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>Cloud Migration</p>
            </div>
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>Business Process Automation</p>
            </div>
          </div>
          <div className="bg-[#ececed] h-[0.5px] md:w-[600px] w-full mt-7"></div>
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

export default Cloud;
