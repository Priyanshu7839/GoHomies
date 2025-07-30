import React,{useState,useEffect} from "react";
import { useScreenResizeValue } from "../../ScreenSizeFunction";
import Image1 from '../../assets/1.jpg'
import Image2 from '../../assets/2.jpg'
import Image3 from '../../assets/3.jpg'
import Image4 from '../../assets/4.jpg'
import Image5 from '../../assets/5.jpg'

const TopPackages = () => {
  const breakpoint = useScreenResizeValue();

  const preloadImages = (images) => {
    const promises = images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;   // when loaded
        img.onerror = reject;   // if failed
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


  const TopPackagesArray = [
    {
        image:Image1,
        name:'Carmen Rios',
        Desgn:'Frontend'
    },
    {
        image:Image2,
        name:'Lisa Scott',
        Desgn:'Frontend'
    },
    {
        image:Image3,
        name:'Pavel Dvolral',
        Desgn:'Frontend'
    },
    {
        image:Image4,
        name:'Kavel Cox',
        Desgn:'Designer'
    },
    {
        image:Image5,
        name:'Kelly Cox',
        Desgn:'Frontend'
    }
  ]

  return imagesLoaded && (
    <div className="flex  items-center justify-center overflow-hidden w-full py-[2rem]">
      <div
        className={`${breakpoint <= 1440 ? "w-[96%]" : "w-[1392px]"} 
            flex flex-col items-center justify-center gap-[2rem] overflow-hidden 
            
            `}
      >
                <div className="flex flex-col items-center justify-center">
                    <span className="px-[2rem] py-[.25rem] rounded-full bg-[#6B8E23] text-white">
                        Browse over 1000 Packages
                        </span>
                        <h1 className="text-[3rem] text-center capitalize font-semibold">
                        {" "}
                        Discover what top <br /> platforms has to offer you 
                        </h1>
                        <p className="text-[1rem] text-center w-[70%]">
                        Get the top trending packages from top package companies to you
                        favoraite travel destination
                        </p>
                </div>

                <div className="w-full">
                <ul className="flex items-center justify-center gap-[1rem] h-[400px] ">
                {TopPackagesArray.map((packages,index)=>{
                    return(
                <li key={index}
                className="w-[80px] text-white group hover:w-[260px] bg-[rgba(0,0,0,0.5)] hover:rounded-[40px] h-full relative  rounded-[50px] overflow-hidden transition-[width] duration-500 ease-in-out">
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] group-hover:bg-[rgba(0,0,0,0.1)] z-10 transition-colors duration-500 pointer-events-none" />
                    <img src={packages.image} className="object-cover h-full" loading="lazy"/>
                 
                    <div className="">
                    <span className="absolute z-20 top-[50%] group-hover:top-[-50%] left-[50%] rotate-270 translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ">
                        <h2 className="whitespace-nowrap text-[1rem]">{packages.name}</h2>
                    </span>
                    </div>
                  
                    <div className="">
                    <span className={`absolute z-20 top-[80%] left-[-120%] group-hover:left-[20%]   transition-all duration-500 
                     
                        `}>
                        <h2 className="whitespace-nowrap">{packages.name}</h2>
                        <p className="whitespace-nowrap">{packages.Desgn}</p>
                    </span>
                    </div>
                </li>
                    )
                })
                    }
               
                </ul>
            </div>
      </div>

      
    </div>
  );
};

export default TopPackages;
