import React, { useState, useEffect } from "react";
import Image1 from "../../../assets/1.jpg";
import Image2 from "../../../assets/2.jpg";
import Image3 from "../../../assets/3.jpg";
import Image4 from "../../../assets/4.jpg";
import Image5 from "../../../assets/5.jpg";

const PostFeedLeft = () => {
  const preloadImages = (images) => {
    const promises = images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve; // when loaded
        img.onerror = reject; // if failed
      });
    });

    return Promise.all(promises);
  };

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const images = [Image1, Image2, Image3, Image4, Image5];

    preloadImages(images)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error("❌ Some images failed to load!", error);
      });
  }, []);

  return (
    imagesLoaded && (
      <div className=" flex-[.75]  h-full w-full flex flex-col justify-between items-between gap-[.5rem] relative">
        <div className="absolute top-[20px] left-[60px] h-[108px] w-[108px] b-[linear-gradient(90deg,_hsla(221,_45%,_73%,_1)_0%,_hsla(220,_78%,_29%,_1)_100%)] border-[1px] border-[#e0e0e0] overflow-hidden rounded-[14px] opacity-40">
          {/* <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] group-hover:bg-[rgba(0,0,0,0.1)] z-10 transition-colors duration-500 pointer-events-none" /> */}
          <img src={Image1} alt="" className="object-cover w-full h-full" />
         
        </div>
        <div className="absolute top-[150px] left-[60px] h-[180px] w-[180px] b-[linear-gradient(90deg,_hsla(221,_45%,_73%,_1)_0%,_hsla(220,_78%,_29%,_1)_100%)] border-[1px] border-[#e0e0e0] overflow-hidden rounded-[14px] opacity-40" >
          {/* <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] group-hover:bg-[rgba(0,0,0,0.1)] z-10 transition-colors duration-500 pointer-events-none" /> */}
          <img src={Image2} alt="" className="object-cover w-full h-full" />
         
        </div>
        <div className="absolute top-[360px] left-[120px] h-[144px] w-[144px] b-[linear-gradient(90deg,_hsla(221,_45%,_73%,_1)_0%,_hsla(220,_78%,_29%,_1)_100%)] border-[1px] border-[#e0e0e0] overflow-hidden rounded-[14px] opacity-40">
          {/* <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] group-hover:bg-[rgba(0,0,0,0.1)] z-10 transition-colors duration-500 pointer-events-none" /> */}
          <img src={Image3} alt="" className="object-cover w-full h-full" />
         
        </div>
        <div className="absolute top-[360px] left-[-80px] h-[180px] w-[180px] b-[linear-gradient(90deg,_hsla(221,_45%,_73%,_1)_0%,_hsla(220,_78%,_29%,_1)_100%)] border-[1px] border-[#e0e0e0] overflow-hidden rounded-[14px] opacity-40">
          {/* <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] group-hover:bg-[rgba(0,0,0,0.1)] z-10 transition-colors duration-500 pointer-events-none" /> */}
          <img src={Image4} alt="" className="object-cover w-full h-full" />
         
        </div>
        <div className="absolute top-[120px] left-[-80px] h-[108px] w-[108px] b-[linear-gradient(90deg,_hsla(221,_45%,_73%,_1)_0%,_hsla(220,_78%,_29%,_1)_100%)] border-[1px] border-[#e0e0e0] overflow-hidden rounded-[14px] opacity-40">
          {/* <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] group-hover:bg-[rgba(0,0,0,0.1)] z-10 transition-colors duration-500 pointer-events-none" /> */}
          <img src={Image5} alt="" className="object-cover w-full h-full" />
         
        </div>
        <div className="absolute top-[600px] left-[-80px] h-[144px] w-[144px] b-[linear-gradient(90deg,_hsla(221,_45%,_73%,_1)_0%,_hsla(220,_78%,_29%,_1)_100%)] border-[1px] border-[#e0e0e0] overflow-hidden rounded-[14px] opacity-40">
          {/* <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] group-hover:bg-[rgba(0,0,0,0.1)] z-10 transition-colors duration-500 pointer-events-none" /> */}
          <img src={Image1} alt="" className="object-cover w-full h-full" />
         
        </div>
      </div>
    )
  );
};

export default PostFeedLeft;
