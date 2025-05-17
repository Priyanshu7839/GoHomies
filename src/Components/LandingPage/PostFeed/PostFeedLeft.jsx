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
      <div className=" flex-[.70]  h-full w-full flex flex-col justify-between items-between gap-[1rem] relative pb-[1rem]">

          

          <div className="h-full relative w-full border border-[#d7d7d8] overflow-hidden rounded-3xl poppins bg-white flex flex-col items-center ">
                 <img src={Image1} alt="" className="object-cover w-full h-full"/>
                <div className="bg-[rgba(0,0,0,0.2)] w-full h-full absolute top-0 left-0"/>

              <div className="poppins text-white absolute bottom-10 left-5">
                <h1 className="text-[1.5rem]">Kerala</h1>
                <p>Gods own Country</p>
              </div>


          </div>
          <div className="h-full relative w-full border border-[#d7d7d8] overflow-hidden rounded-3xl poppins bg-white flex flex-col items-center ">
                 <img src={Image5} alt="" className="object-cover w-full h-full"/>
                <div className="bg-[rgba(0,0,0,0.2)] w-full h-full absolute top-0 left-0"/>

              <div className="poppins text-white absolute bottom-10 left-5">
                <h1 className="text-[1.5rem]">Jhansi</h1>
                <p>God hates this</p>
              </div>
          </div>

        
       
              
               
                
        
      </div>
    )
  );
};

export default PostFeedLeft;
