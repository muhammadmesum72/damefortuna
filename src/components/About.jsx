import React from "react";
import Card from "../assets/Genesisblock.png";

const About = () => {
  return (
    //<div className="flex flex-col md:flex-row items-center justify-center relative">
    <div className="flex flex-col-reverse gap-6 md:gap-0 md:flex-row items-center justify-center relative">
      <div data-aos="fade-right" className="basis-1/2 w-full">
        <div className="about-img text-center w-full">
          <img
            src={Card}
            alt=""
            className="opacity-100  h-96  mx-auto  "
            //className="absolute md:relative opacity-30 md:opacity-100  -z-10 h-96  mx-auto  "
          />
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="md:basis-1/2 space-y-3 md:space-y-6 z-10"
      >
        <span className="opacity-70">Physical Tarot Decks</span>
        <h2 className="text-3xl md:text-6xl leading-10 text-primary  ">
        Immerse yourself <br /> in the world of Tarot
        </h2>
        <p>
          Dive into the world of crypto through each card's mystic lens and 
          discover the fusion of ancient divination and modern innovation.
          A unique and expertly crafted tarot deck with each purchase supporting female-led creative vision and innovation.

        </p>
      </div>
    </div>
  );
};

export default About;
