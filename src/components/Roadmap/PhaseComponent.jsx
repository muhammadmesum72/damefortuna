import React from "react";

const PhaseComponent = ({ info, id, icon }) => {
  return (
    <div
      data-aos="fade-left"
      className="flex flex-col-reverse md:flex-row items-center justify-around gap-12  text-3xl w-fit mx-auto "
    >
      <div className="info basis-1/2 bg-black p-6 rounded-xl bg-opacity-50 text-center">
        <h1 className="font-bold text-2xl text-primary">
          PHASE <span className="text-4xl">0{id}</span>
        </h1>
        <p className="text-sm pt-3">{info}</p>
      </div>
      <div className="hidden md:block w-3 h-3 rounded-full bg-primary absolute top-1/2 left-1/2 right-auto bottom-auto -mr-1/2 -translate-x-1/2"></div>
      <div className="icon basis-1/2 text-center">
        <img src={icon} alt="phase" className="h-36 mx-auto" />
      </div>
    </div>
  );
};

export default PhaseComponent;
