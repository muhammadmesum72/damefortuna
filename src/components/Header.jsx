import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import Gitbook from "../assets/gitbook.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const path = useLocation().pathname;

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/mint",
      name: "Build a deck",
    },
    {
      link: "/tokenGated",
      name: "My Cards",
    },
    // {
    //   link: "/#partners",
    //   name: "Partners",
    // },
    // {
    //   link: "/#roadmap",
    //   name: "Roadmap",
    // },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#0b0821] z-[1000] bg-opacity-70">
      <div
        className={`  container flex items-center justify-between py-6 text-lg  px-3 md:px-0 mx-auto   shadow-lg `}
      >
        {/* logo */}
        <div className="uppercase cursor-pointer">
          <Link to="/">Dame Fortuna</Link>
        </div>
        {/* Links */}
        <div className="block md:hidden cursor-pointer text-3xl">
          {isMenuOpen ? (
            <AiOutlineClose onClick={() => handleMenu()} />
          ) : (
            <AiOutlineMenu onClick={() => handleMenu()} />
          )}
        </div>
        <div className="hidden md:block">
          <ul
            className={`w-full h-full inline-flex gap-9
          `}
          >
            {navLinks.map((link) => (
              <li
                className={`${
                  link.link === path && "border-b-2"
                } hover:border-b-2 hover:border-white`}
              >
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={` ${
            isMenuOpen
              ? "fixed top-0 left-0 opacity-100 "
              : "fixed top-0 left-full opacity-0"
          } transition-all md:hidden ease-in-out duration-1000  h-screen w-full bg-black  -z-10`}
        >
          <ul
            className={`w-full h-full inline-flex gap-9 flex-col items-center justify-center `}
          >
            {navLinks.map((link) => (
              <li
                className={`${
                  link.link === path && "border-b-2"
                } hover:border-b-2 hover:border-white`}
              >
                <Link onClick={() => handleMenu()} to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}

            <li className="flex text-3xl gap-3">
              <a href="">
                <FaDiscord />
              </a>
              <a href="">
                <AiFillTwitterSquare />
              </a>
              <a href="">
                <img src={Gitbook} alt="" className="w-9" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
