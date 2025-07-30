import React from "react";
import about1 from '../../assets/AboutUsPhoto/about1.jpeg';
import about2 from '../../assets/AboutUsPhoto/about2.jpeg';
import about3 from '../../assets/AboutUsPhoto/about3.jpeg';
import about4 from '../../assets/AboutUsPhoto/about4.jpeg';
import './AboutUsHeader.css';

const AboutUsHeader = () => {
  return (
    <div className="relative bg-[#FCDB67] pb-24">
      {/* Top section with heading */}
      <div className="flex flex-col items-center justify-center px-4 py-25 space-y-6 z-0 mb-4">
        <h1 className="text-6xl font-bold text-center font-['poppins'] text-[#1F1F1F] mt-18">
          About us
        </h1>
        <p className="text-lg sm:text-base font-medium text-center w-[80%] md:w-[45%] leading-relaxed font-[poppins] text-[#1F1F1F]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* Image row */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-20 flex justify-center items-end gap-6 px-4">
        <img
          src={about1}
          alt="img1"
          className="w-[230px] rounded-2xl object-cover shadow-lg photo1"
        />
        <img
          src={about2}
          alt="img2"
          className="w-[230px] rounded-2xl object-cover shadow-lg photo2"
        />
        <img
          src={about3}
          alt="img3"
          className="w-[230px] rounded-2xl object-cover shadow-lg photo1"
        />
        <img
          src={about4}
          alt="img4"
          className="w-[230px] rounded-2xl object-cover shadow-lg photo2"
        />
      </div>
    </div>
  );
};

export default AboutUsHeader;
