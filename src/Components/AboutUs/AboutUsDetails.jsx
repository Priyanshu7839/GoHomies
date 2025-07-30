import React from "react";
import { Users, Target, BarChart3 } from "lucide-react";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaApple,
  FaAmazon,
} from "react-icons/fa";

const AboutUsDetails = () => {
  const brands = [
    { icon: <FaFacebookF size={20} />, name: "Facebook" },
    { icon: <FaGoogle size={20} />, name: "Google" },
    { icon: <FaInstagram size={20} />, name: "Instagram" },
    { icon: <FaLinkedinIn size={20} />, name: "LinkedIn" },
    { icon: <FaTwitter size={20} />, name: "Twitter" },
    { icon: <FaYoutube size={20} />, name: "YouTube" },
    { icon: <FaApple size={20} />, name: "Apple" },
    { icon: <FaAmazon size={20} />, name: "Amazon" },
  ];

  const features = [
    {
      icon: <Users className="w-10 h-10 text-yellow-500" />,
      title: "Professional Team",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
    },
    {
      icon: <Target className="w-10 h-10 text-yellow-500" />,
      title: "Target Oriented",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-yellow-500" />,
      title: "Success Guarantee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
    },
  ];

  return (
    <div>
      <div className="flex flex-col bg-[#f5f7fd]">
        {/* // <div className='flex flex-col'> */}

        <div className="bg-[#f5f7fd] mt-30"></div>

        {/* Brand section */}
        <div className="bg-[#f5f7fd] py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 ">
              Trusted by 25,000+ world-class brands
            </h2>
            <p className="mt-6 text-gray-500 text-sm md:text-base">
              Companies of all sizes across the globe trust our platform to
              power their growth.
            </p>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-16 gap-x-14 place-items-center">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-700 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition"
                  // className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-900 transition"
                >
                  {/* <div className="text-xl"> */}
                  <div className="bg-white shadow-md rounded-full p-4">
                    {brand.icon}
                  </div>
                  <div className="text-sm font-medium">{brand.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="bg-[#fefaf6] text-center py-16 px-4">
        <div className=" mx-auto">
          <h2 className="text-[45px] font-bold text-gray-900 mb-4 font-[poppins]">
            We help business to grow faster and bigger
          </h2>
          <p className="text-gray-800 max-w-xl mx-auto mb-12 text-[1rem] leading-7  font-[poppins]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="grid md:grid-cols-3 gap-[4rem]">
            {features.map((feature, index) => (
              //   <div key={index} className="flex flex-col items-center w-[250px] h-200px mx-auto  shadow-lg rounded-lg p-6">
              <div
                key={index}
                className="flex flex-col items-center w-[350px] h-200px mx-auto p-6"
              >
                <div className="bg-yellow-300/60 p-6 rounded-full mb-4">
                  {feature.icon}
                </div>

                <div className="w-[250px] text-center font-[poppins]">
                  <h3 className="text-[25px] font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsDetails;
