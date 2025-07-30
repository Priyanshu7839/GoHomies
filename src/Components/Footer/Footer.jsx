import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fefaf4] px-6 md:px-16 py-12 font-[Poppins]">
        <div className="mx-auto max-w-6xl">
      <div className="md:flex justify-between items-start border-b border-gray-300 pb-10">
        <div className="max-w-md mb-8 md:mb-0">
          <div className="flex items-center text-2xl font-bold mb-4">
            <span className="text-yellow-500 text-3xl mr-1">G</span>
            <span className="text-gray-900">GoHomies</span>
          </div>
          <p className="text-gray-600">
            Lorem ipsum consectetur amet dolor sit comeneer ilremlom dolce issilm acalrm leinison duycoqu.
          </p>
        </div>

        {/* Newsletter */}
        <div className="w-full max-w-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Subscribe to our newsletter
          </h3>
          <div className="flex items-center border rounded-md overflow-hidden bg-white shadow-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 outline-none text-gray-700"
            />
            <button className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className=" grid-cols-2 md:grid-cols-4 gap-16 mt-10 text-gray-700 flex flex-col md:flex-row items-center justify-between">
        {/* Company */}
        <div className="">
          <h4 className="font-semibold text-black mb-4">Company</h4>
          <ul className="space-y-4">
            <li><a href="/about-us" className="hover:text-black">About Us</a></li>
            <li><a href="/services" className="hover:text-black">Our Services</a></li>
            <li><a href="/case-studies" className="hover:text-black">Case Studies</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-black mb-4">Resources</h4>
          <ul className="space-y-4">
            <li><a href="/articles" className="hover:text-black">Blogs</a></li>
            <li><a href="/faq" className="hover:text-black">Read FAQ</a></li>
            <li><a href="/contact" className="hover:text-black">Contact Us</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-semibold text-black mb-4">Connect</h4>
          <ul className="space-y-4">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600">
                <FaFacebookF /> Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-500">
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-700">
                <FaLinkedinIn /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mt-12 border-t border-gray-300 pt-6">
        <p>© 2024 GoHomies  </p>
        <p> Designed by - Priyanshu :: Ashutosh :: Ashish  </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
