import React from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import './PostCreationSection.css'

const PostCreationSection = () => {
    const breakpoint = useScreenResizeValue();
  return (
    <div className="flex  items-center justify-center overflow-hidden w-full">
    <div
      className={`${breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"} 
          flex flex-col items-center justify-center gap-[2rem]  py-[4rem]     overflow-hidden 
          `}
    >
        <div className="flex items-center justify-center gap-[1rem]">
     
        {/* Left side */}
        <div className="flex-[1.5] text-black flex flex-col items-start gap-[1rem] p-[40px] pl-0">
            <span className="px-[2rem] py-[.25rem] rounded-full bg-[#6B8E23] text-white">
                            Find Your Homie
            </span>

            <h1 className="main-title text-[3rem] text-black capitalize font-semibold">
                Unleash the traveler <span className="text-[#6B8E23]">inside you</span>, Enjoy your Dream Vacation
            </h1>

            <p className="text-black">
                Create a Post and tell your mate where you are going and see who joins you.
            </p>
        </div>

        {/* Right side */}
        <div className="right-section  px-[1rem] py-[1rem] flex-[.75] flex flex-col items-start gap-[2rem] rounded-[1rem] text-white backdrop-sepia-0 bg-white/30">
          <h1 className="form-title text-black">Create New Post</h1>
          <form className="form">
            <div className="input-group">
              <label>Destination</label>
              <div className="input-wrapper">
                <input type="text" placeholder="Tell You mates Where you are going" />
              </div>
            </div>
            <div className="flex gap-[1rem]">
              <div className="input-group">
                <label>Total Persons</label>
                <div className="input-wrapper">
                  <input type="text" placeholder="e.g.6" />
                </div>
              </div>
              <div className="input-group">
                <label>Month of Travelling</label>
                <div className="input-wrapper">
                  <input type="text" placeholder="E.g.April" />
                </div>
              </div>
            </div>
            <div className="input-group">
              <label>Per person Budget</label>
              <div className="input-wrapper">
                <input type="text" placeholder="E.g. 10,000" />
              </div>
            </div>
          </form>
            <button className="submit-button w-full">Create Post</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PostCreationSection