import React,{useRef} from 'react'
import HeaderBannerNew1 from '../../assets/HeaderImage.jpg'
import HeaderBannerNew2 from '../../assets/HeaderImage1.jpg'

import './Header.css'
import Navbar from '../Navbar/Navbar'


const Header = () => {

 const slideRef = useRef(null);

  const handleNext = () => {
    const items = slideRef.current.querySelectorAll('.item');
    if (items.length > 0) {
      slideRef.current.appendChild(items[0]);
    }
  };

 


  return (
   <div className='relative h-[600px]'>
     <div className='container1'>
        
        <div id="slide" ref={slideRef}>
            <div className="item" onClick={handleNext} style={{ backgroundImage: `url(${HeaderBannerNew1})` }}>
                <div className="content">
                    <div className="name">Lorem, ipsum.</div>
                    <div className="des">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, odio.</div>
                    <button>See More</button>
                </div>
            </div>
            <div className="item" onClick={handleNext} style={{ backgroundImage: `url(${HeaderBannerNew1})` }}>
                <div className="content">
                    <div className="name">Lorem, ipsum.</div>
                    <div className="des">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, odio.</div>
                    <button>See More</button>
                </div>
            </div>
            <div className="item" onClick={handleNext} style={{ backgroundImage: `url(${HeaderBannerNew2})` }}>
                <div className="content">
                    <div className="name">Lorem, ipsum.</div>
                    <div className="des">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, odio.</div>
                    <button>See More</button>
                </div>
            </div>
            <div className="item" onClick={handleNext} style={{ backgroundImage: `url(${HeaderBannerNew2})` }}>
                <div className="content">
                    <div className="name">Lorem, ipsum.</div>
                    <div className="des">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, odio.</div>
                    <button>See More</button>
                </div>
            </div>
            <div className="item" onClick={handleNext} style={{ backgroundImage: `url(${HeaderBannerNew2})` }}>
                <div className="content">
                    <div className="name">Lorem, ipsum.</div>
                    <div className="des">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, odio.</div>
                    <button>See More</button>
                </div>
            </div>
        </div>

        
    </div>
   </div>
  )
}

export default Header