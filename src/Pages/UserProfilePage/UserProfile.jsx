import React, { useState } from "react";
import BackgroundPhoto from "./../../assets/4.jpg";
import ProfilePhoto from "./../../assets/3.jpg";

// Import the separate sections
import Posts from "./../../Components/UserProfile/UserPost";
import About from "./../../Components/UserProfile/UserAbout";
import Settings from "./../../Components/UserProfile/UserSetting";

const UserProfile = () => {
  const [activeSection, setActiveSection] = useState("Posts");

  const renderSection = () => {
    switch (activeSection) {
      case "Posts":
        return <Posts />;
      case "About":
        return <About />;
      case "Settings":
        return <Settings />;
      default:
        return <Posts />;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <div className="relative flex flex-col items-center justify-center">
        <img
          className="object-cover w-full h-[318px] z-0"
          src={BackgroundPhoto}
          alt="Background"
        />
        <div className="absolute -bottom-16 z-10">
          <img
            className="object-cover w-[120px] h-[120px] rounded-3xl border-4 border-white"
            src={ProfilePhoto}
            alt="Profile"
          />
        </div>
      </div>

      {/* Name and Info */}
      <div className="mt-20 text-center ">
        <h1 className="text-3xl font-bold">WCKiD</h1>
        <p className="text-sm mt-2 font-medium">Graphic Design Tutorials</p>
        <p className="text-sm mt-1 text-gray-400">User Designation - 69</p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-10 space-x-10 border-t border-gray-700 pt-6">
        {["Posts", "About", "Settings"].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`hover:text-gray-300 cursor-pointer ${
              activeSection === section ? "underline" : ""
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Section Content */}
      <div className="mt-6">{renderSection()}</div>
    </div>
  );
};

export default UserProfile;
