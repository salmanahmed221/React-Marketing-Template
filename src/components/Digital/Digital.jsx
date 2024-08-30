import { FaLongArrowAltRight } from "react-icons/fa";
import tick from "../../assets/Services/tick.png";
import digital from "../../assets/Digital/digital.webp";
import { RevealWrapper } from "next-reveal";

function Digital() {
  return (
    <div>
      {/* Service */}
      <div className="md:flex bg-[#151515] text-white items-center md:px-44 px-5 py-16 md:py-0 mt-7">
        {/* 1st */}
        <div>
          <h1 className="text-4xl font-bold">Digital Marketing</h1>
          <p className="text-[#909090] text-xl md:w-[90%] pt-2">
            Reach your target audience and achieve your marketing goals with our
            data-driven digital marketing strategies. We craft customized
            campaigns that deliver measurable results.
          </p>
          {/* Icon and Text Grid */}
          <div className="md:grid grid-cols-2 pt-6 space-y-3 md:space-y-0 md:gap-y-3 w-[80%] text-[#909090]">
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>Digital Strategy</p>
            </div>
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>Social Media Management</p>
            </div>
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>Branding & Creative Services</p>
            </div>
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>Content Production</p>
            </div>
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>Google & Meta Ads</p>
            </div>
            <div className="flex gap-x-2">
              <img src={tick} alt="" />
              <p>SEO</p>
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
            <img src={digital} alt="" height={1200} width={1200} />
          </div>
        </RevealWrapper>
      </div>
    </div>
  );
}

export default Digital;
