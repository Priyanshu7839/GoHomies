// import React,{useRef} from 'react'
import HeaderBannerNew1 from "../../assets/HeaderBannerImage1.jpg";
import HeaderBannerNew2 from "../../assets/HeaderBannerImage2.jpg";
import HeaderBannerNew3 from "../../assets/HeaderBannerImage3.jpg";

import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "./Header.css";

const images = [
  {
    src: HeaderBannerNew1,
    title: "Kerala",
    desc: "Known as God Own Country, Kerala offers serene backwaters, lush greenery, exotic wildlife, and vibrant traditions. Its beaches, spice plantations, and houseboat cruises attract travelers seeking peace and beauty.",
  },
  {
    src: HeaderBannerNew2,
    title: "Manali",
    desc: "Nestled in Himachal Pradesh, Manali is a charming hill station famous for snow-capped mountains, adventure sports, scenic valleys, and a cool, refreshing climate.",
  },
  {
    src: HeaderBannerNew3,
    title: "Jhansi",
    desc: "Nestled in Himachal Pradesh, Manali is a charming hill station famous for snow-capped mountains, adventure sports, scenic valleys, and a cool, refreshing climate.",
  },
];

const Header = () => {
  const slideRef = useRef(null);

  const handleNext = () => {
    if (slideRef.current) {
      const firstChild = slideRef.current.children[0];
      slideRef.current.appendChild(firstChild);
    }
  };

  const handlePrev = () => {
    if (slideRef.current) {
      const lastChild =
        slideRef.current.children[slideRef.current.children.length - 1];
      slideRef.current.prepend(lastChild);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="p-[2rem]  mt-[60px] h-[calc(95vh-60px)]">
      <div className="relative rounded-3xl overflow-hidden h-[calc(85vh-160px)] px-0">
      <div className="relative overflow-hidden bg-black">
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-5"></div>

        <div
          ref={slideRef}
          className="flex transition-all duration-700 ease-in-out"
        >
          {/* Image slides */}
          {images.map((item, index) => (
            <div
              key={index}
              className="min-w-full h-[calc(100vh-160px)] bg-cover bg-center flex items-start justify-start"
              style={{ backgroundImage: `url(${item.src})` }}
            >
              <div className=" p-6 rounded-xl  flex flex-col items-start gap-2 left-10 z-10 text-white max-w-xl text-left m-10">
                <div className="text-[18px] text-[#f555a7]">
                  #{index + 1} Spotlight
                </div>
                <div className="text-5xl font-bold mb-4">{item.title}</div>
                <div className="mb-6 text-[16px]">{item.desc}</div>
                <div>
                  <button className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-full cursor-pointer text-white">
                    Explore Packages
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Fade at Bottom */}
        {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fff] to-transparent z-10 " /> */}

        {/* Navigation Buttons */}
        <div className="flex flex-col absolute bottom-8 right-8 gap-2 z-20">
          <button
            className="bg-black opacity-70 rounded-md p-2 cursor-pointer"
            onClick={handlePrev}
          >
            <ChevronLeft color="white" size={24} />
          </button>
          <button
            className="bg-black opacity-70 rounded-md p-2 cursor-pointer"
            onClick={handleNext}
          >
            <ChevronRight color="white" size={24} />
          </button>
        </div>
      </div>


      </div>
      <div className="w-[600px] h-[150px]  absolute top-[68%] left-[50%] translate-x-[-50%] rounded-3xl bg-white/30 backdrop-blur-2xl flex items-center justify-between p-[1rem]
      font-[500] text-black drop-shadow-[2px_4px_5px_rgba(0,0,0,0.4)] border border-[#d7d7d8] 
      "
      >
        <h1>Location</h1>
        <h2>Best Travel Month</h2>
        <h2>Best Travel Partner</h2>
    </div>
    </div>
  );
};

export default Header;
