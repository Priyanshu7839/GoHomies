import React from "react";
import { useScreenResizeValue } from "../../ScreenSizeFunction";
import './TopPackages.css'
import Image1 from '../../assets/1.jpg'
import Image2 from '../../assets/2.jpg'
import Image3 from '../../assets/3.jpg'
import Image4 from '../../assets/4.jpg'
import Image5 from '../../assets/5.jpg'

const TopPackages = () => {
  const breakpoint = useScreenResizeValue();

  return (
    <div className="flex  items-center justify-center overflow-hidden w-full">
      <div
        className={`${breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"} 
            flex flex-col items-center justify-center gap-[2rem]  py-[4rem]     overflow-hidden 
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
                <ul className="accordion">
                <li>
                    <img src={Image1} />
                    <div className="content">
                    <span>
                        <h2>Carmen Rios</h2>
                        <p>Frontend</p>
                    </span>
                    </div>
                </li>
                <li>
                    <img src={Image2} />

                    <div className="content">
                    <span>
                        <h2>Lisa Scott</h2>
                        <p>Backend</p>
                    </span>
                    </div>
                </li>
                <li>
                    <img src={Image3} />

                    <div className="content">
                    <span>
                        <h2>Pavel Dvorak</h2>
                        <p>Backend</p>
                    </span>
                    </div>
                </li>
                <li>
                    <img src={Image4} />

                    <div className="content">
                    <span>
                        <h2>Kelly Cox</h2>
                        <p>Designer</p>
                    </span>
                    </div>
                </li>
                <li>
                        <img src={Image5} />

                    <div className="content">
                    <span>
                        <h2>Kelly Cox</h2>
                        <p>Designer</p>
                    </span>
                    </div>
                </li>
                <li>
                        <img src={Image1} />

                    <div className="content">
                    <span>
                        <h2>Kelly Cox</h2>
                        <p>Designer</p>
                    </span>
                    </div>
                </li>
                </ul>
            </div>
      </div>

      
    </div>
  );
};

export default TopPackages;
