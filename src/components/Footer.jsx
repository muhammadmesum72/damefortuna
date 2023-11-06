import React from "react";
import {
  AiFillTwitterSquare,
  
} from "react-icons/ai";

import {FaDiscord} from "react-icons/fa"
import Gitbook from "../assets/gitbook.png"
import PolicyPdf from "../assets/PDFs/Dame Fortuna.pdf"

const Footer = () => {
  const handleOpenPdf = () => {
    window.open(PolicyPdf, "_blank");
  };
  return (
    <div id="footer" className="border-t border-white py-6  mt-36 text-xs md:text-auto" >
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 px-3 md:px-0 items-center container mx-auto">
        <div className="basis-1/2 text-center md:text-left ">
        <h2 className="text-xl font-bold  pb-3 uppercase">dame fortuna</h2>
          <p className="">
          <span>Join the Cosmic Community | </span>
            <span className="cursor-pointer" onClick={() => handleOpenPdf()}>Privacy Policy | </span>
            <span className="cursor-pointer" onClick={() => handleOpenPdf()}>Terms of Use</span>
          </p>
        </div>

        <div className="basis-1/2 w-full flex items-center justify-center  text-4xl text-center gap-6">
          <a href="">
            <FaDiscord />
          </a>
          <a href="">
            <AiFillTwitterSquare />
          </a>
          <a href="">
          <img src={Gitbook} alt="" className="w-9" />
          </a>
        </div>
      </div>

      <p className="text-center w-full pt-6">Copyright Dame Fortuna © 2023. All rights reserved.</p>
    </div>
  );
};

export default Footer;
