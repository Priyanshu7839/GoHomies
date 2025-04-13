import React from 'react'
import { useScreenResizeValue } from '../../../ScreenSizeFunction'
import {PostFeedLeft,PostFeedRight,PostFeedCenter} from '../../index'

const PostFeedSection = () => {

    const breakpoint = useScreenResizeValue();

  return (
    <div className="flex relative  items-center justify-center overflow-hidden w-full">
    <div
      className={`${breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"} 
          flex flex-col  items-center justify-between gap-[2rem]  py-[4rem]     overflow-hidden 
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
                        View Feed and posts and get info about the latest trips and experience of homies
                        </p>
                </div>
        <div className='flex items-start justify-between w-full gap-[1rem] h-[100vh]'>
            <PostFeedLeft/>
            <PostFeedCenter/>
            <PostFeedRight/>
        
        </div>


        </div>
    </div>
  )
}

export default PostFeedSection