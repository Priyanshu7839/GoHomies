import { useState,useEffect } from 'react';
import AdvertisementDefaultImg from '../../../assets/AdvertisementDefaultImg';

import Image1 from "../../../assets/1.jpg";
import Image2 from "../../../assets/2.jpg";
import Image3 from "../../../assets/3.jpg";
import Image4 from "../../../assets/4.jpg";
import Image5 from "../../../assets/5.jpg";

const PostFeedRight = () => {

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

  return   imagesLoaded && (
        <div className=" flex-[.70]  h-full w-full flex flex-col justify-between items-between gap-[.5rem] relative pb-[1rem] ">


          <div className=" h-full w-full border border-[#d7d7d8] overflow-hidden rounded-3xl poppins bg-[linear-gradient(0deg,_hsla(234,_80%,_88%,_1)_0%,_hsla(340,_68%,_88%,_1)_50%,_hsla(342,_72%,_85%,_1)_100%)] flex flex-col items-start justify-end gap-[.5rem] p-[1rem]">

            <h1 className='font-semibold text-[2rem]'>Start <br/> Customizing</h1>
            <button className='px-[1rem] py-[.5rem] border rounded-[12px] text-[.875rem] w-full flex items-center justify-between'>
              Getting Started
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>

            </button>
       
         </div>
  
          
        </div>
      )
}

export default PostFeedRight