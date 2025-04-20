import React from 'react'
import { useScreenResizeValue } from '../../../ScreenSizeFunction'
import {PostFeedLeft,PostFeedRight,PostFeedCenter} from '../../index'

const PostFeedSection = () => {

    const breakpoint = useScreenResizeValue();

  return (
    <div className="flex relative  items-center justify-center w-full">
    <div
      className={`${breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"} 
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
                        View Feed and posts and get info about the latest trips and experience of homies
                        </p>
                </div>
                <div className="!relative">
        <div className='!sticky !top-[145px] !h-[calc(100vh-145px)] flex items-start justify-between w-full gap-[3rem]'>
            <PostFeedLeft/>
            <PostFeedCenter/>
            <PostFeedRight/>
            </div>
        
        </div>


        </div>
    </div>
  )
}

export default PostFeedSection