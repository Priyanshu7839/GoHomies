import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import Slider from "react-slick";
import { teamMembers } from '../../../util/const';



// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-[-60px] top-[45%] z-10 cursor-pointer bg-black text-white rounded-full p-3 hover:bg-gray-700 transition-all"
  >
    <MdArrowForwardIos size={20} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-[-50px] top-[45%] z-10 cursor-pointer bg-black text-white rounded-full p-3 hover:bg-gray-700 transition-all"
  >
    <MdArrowBackIos size={20} />
  </div>
);

const AboutUsMembers = () => {
  const navigate = useNavigate();

  const sliderSettings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-[#fefaf6] py-16 px-4 flex justify-center flex-col items-center">
      <div className="relative bg-[#1c1c1c] rounded-2xl max-w-5xl w-full px-10 py-16 text-center overflow-hidden text-white">
        <div className="absolute left-0 top-0 h-full w-32 bg-[#FCDB67] rounded-bl-2xl"></div>
        <div className="absolute right-0 top-0 h-full w-32 bg-[#FCDB67] rounded-br-2xl"></div>

        <h2 className="text-3xl md:text-4xl font-bold z-10 relative">
          We are always looking for new <br /> amazing talents
        </h2>
        <p className="mt-6 text-gray-300 max-w-xl mx-auto z-10 relative">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button
          onClick={() => navigate('/createpost')}
          className="mt-8 px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-all duration-200 z-10 relative"
        >
          See Open Positions
        </button>
      </div>

      {/* Team Members Carousel */}
      <section className="bg-[#fefaf4] py-12 px-4 md:px-16 mt-[30px] w-full font-[poppins]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[45px] font-bold text-gray-900">Meet our lovely team</h2>
          {/* <button
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
            onClick={() => navigate("/our-team")}
          >
            View All Member
          </button> */}
        </div>

        <div className="relative">
          <Slider {...sliderSettings}>
            {teamMembers.map((member, index) => (
              <div key={index}>
                <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-amber-300 hover:shadow-2xl transition-shadow duration-300 w-[90%] mx-auto h-[520px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-[300px] h-[320px] object-cover rounded-2xl mb-4 hover:transform hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-2xl text-gray-900 font-[poppins] font-extrabold m-3">{member.name}</h3>
                  <p className="text-gray-600 mb-3 font-black font-[poppins]">{member.position}</p>
                  <div className="flex gap-4 text-white">
                    <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded-full hover:scale-125 transition transform duration-300 shadow-md opacity-60 hover:opacity-100">
                      <FaFacebookF />
                    </a>
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="bg-pink-500 p-2 rounded-full hover:scale-125 transition transform duration-300 shadow-md opacity-60 hover:opacity-100">
                      <FaInstagram />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-700 p-2 rounded-full hover:scale-125 transition transform duration-300 shadow-md opacity-60 hover:opacity-100">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default AboutUsMembers;
