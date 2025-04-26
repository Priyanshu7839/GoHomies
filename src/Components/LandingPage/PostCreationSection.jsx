import React, { useState, useEffect } from "react";
import { Snackbar, Alert, Stack } from "@mui/material";
import { useScreenResizeValue } from "../../ScreenSizeFunction";
import "./PostCreationSection.css";
import { isNumeric } from "../../../util/helper";

const PostCreationSection = () => {
  const breakpoint = useScreenResizeValue();

  const [destination, setDestination] = useState("");
  const [totalPersons, setTotalPersons] = useState("");
  const [travelMonth, setTravelMonth] = useState("");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  useEffect(() => {
    if (
      destination.trim() &&
      totalPersons.trim() &&
      travelMonth.trim() &&
      budget.trim() &&
      description.trim()
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [destination, totalPersons, travelMonth, budget, description]);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "destination") {
      setDestination(value);
    } else if (name === "totalPersons") {
      if (isNumeric(value)) {
        setTotalPersons(value);
        if(value > 12) {
          setTotalPersons("");
        }
      }
    } else if (name === "travelMonth") {
      setTravelMonth(value);
    } else if (name === "budget") {
      if (isNumeric(value)) {
        setBudget(value);
      }
    } else if (name === "description") {
      setDescription(value);
    }
  };


  const handleSubmit = () => {
    const newPost = {
      destination,
      totalPersons,
      travelMonth,
      budget,
      description,
    };

    // Get existing posts
    const existingPosts = JSON.parse(localStorage.getItem("travel_posts")) || [];

    // Add new post at the beginning
    const updatedPosts = [newPost, ...existingPosts];

    // Save back to localStorage
    localStorage.setItem("travel_posts", JSON.stringify(updatedPosts));

    window.dispatchEvent(new Event("postCreated"));

    // Show success alert
    setOpenAlert(true);

    // Reset form fields
    setDestination("");
    setTotalPersons("");
    setTravelMonth("");
    setBudget("");
    setDescription("");
  };

  return (
    <div className="flex items-center justify-center overflow-hidden w-full h-[100vh]">
      <div
        className={`${
          breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"
        } flex flex-col items-center justify-center gap-[2rem] py-[1rem] overflow-hidden`}
      >
        <div className="flex items-center justify-center gap-[1rem]">
          {/* Left side */}
          <div className="flex-[1.5] text-black flex flex-col items-start gap-[1rem] p-[40px] pl-0">
            <span className="px-[2rem] py-[.25rem] rounded-full bg-[#6B8E23] text-white">
              Find Your Homie
            </span>

            <h1 className="main-title text-[3rem] text-black capitalize font-semibold">
              Unleash the traveler{" "}
              <span className="text-[#6B8E23]">inside you</span>, Enjoy your
              Dream Vacation
            </h1>

            <p className="text-black">
              Create a Post and tell your mate where you are going and see who
              joins you.
            </p>
          </div>

          {/* Right side */}
          <div className="right-section p-[1.7rem] flex-[.75] flex flex-col items-start gap-[1rem] rounded-[1rem] text-white backdrop-sepia-0 bg-white/30">
            <h1 className="form-title text-black">Create New Post</h1>
            <form className="form w-full">
              <div className="input-group">
                <label>Destination</label>
                <div className="input-wrapper">
                  <input
                  name="destination"
                    type="text"
                    placeholder="Tell your mates where you're going"
                    value={destination}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex gap-[1rem]">
                <div className="input-group">
                  <label>Total Persons</label>
                  <div className="input-wrapper">
                    <input
                    name="totalPersons"
                      type="text"
                      placeholder="Max Person allowed - 12"
                      value={totalPersons}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label>Month of Travelling</label>
                  <div className="input-wrapper">
                    <input
                    name="travelMonth"
                      type="text"
                      placeholder="e.g. April"
                      value={travelMonth}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="input-group">
                <label>Per person Budget</label>
                <div className="input-wrapper">
                  <input
                  name="budget"
                    type="text"
                    placeholder="e.g. 10,000"
                    value={budget}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Description of the Trip</label>
                <div className="input-wrapper">
                  <textarea
                    name="description"
                  type="text"
                    placeholder="E.g. How will you do the trip and what are the expectations"
                    rows={2}
                    value={description}
                    onChange={handleChange}
                    className="w-full "
                  />
                </div>
              </div>
            </form>

            <button
              onClick={handleSubmit}
              className="submit-button w-full"
              disabled={!isFormValid}
              style={{
                backgroundColor: isFormValid ? "#6B8E23" : "#ccc",
                cursor: isFormValid ? "pointer" : "not-allowed",
                color: "white",
              }}
            >
              Create Post
            </button>
          </div>
        </div>
      </div>

      {/* Alert for the post creation */}
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={() => setOpenAlert(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled">
          Post Created Successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default PostCreationSection;
