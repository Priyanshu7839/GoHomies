import React,{useState,useEffect,useRef} from 'react'
import { useScreenResizeValue } from '../../../ScreenSizeFunction'
import {PostFeedLeft,PostFeedRight,PostFeedCenter} from '../../index'

const PostFeedSection = () => {

    const breakpoint = useScreenResizeValue();

    const containerRef = useRef(null);
  const [isStuck, setIsStuck] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => setIsStuck(e.intersectionRatio < 1),
      { threshold: [1] }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);



  return (
    <div className="flex relative  items-center justify-center w-full h-full">
      <div
        className={`${breakpoint <= 1440 ? "w-[96%]" : "w-[1392px]"} 
          flex flex-col  items-center justify-between gap-[2rem]  py-[4rem]
          `}
    >

            <div className="flex flex-col items-center justify-center">
                    <span className="px-[2rem] py-[.25rem] rounded-full bg-[#6B8E23] text-white">
                          Go With the Homie
                        </span>
                        <h1 className="text-[3rem] text-center capitalize font-semibold">
                        {" "}
                        View Where Your <br /> buddies are going
                        </h1>
                        <p className="text-[1rem] text-center w-[70%] capitalize">
                       The Top Travellers are on GoHomies
                        </p>
                </div>
                <div className="!relative top-[80px] w-full h-[100vh]">
        <div ref={containerRef} className='!sticky !top-[80px] !h-[calc(100vh-82px)] flex items-start justify-between w-full gap-[1rem]'>
            <PostFeedLeft/>
            <PostFeedCenter className={`${isStuck?'overflow-hidden':'overflow-auto'}`}/>
            <PostFeedRight/>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default PostFeedSection;
