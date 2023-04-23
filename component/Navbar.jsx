import React, { useState } from "react";
import Wrapper from "./partials/Wrapper";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const menu = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Market",
    href: "#market",
  },
  {
    name: "Choose Us",
    href: "#chooseUs",
  },
  {
    name: "Join",
    href: "#join",
  },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`${
          sticky ? "fixed bg-black" : "absolute"
        } z-50 w-full font-grotesk text-white`}
      >
        <Wrapper>
          <div className="flex items-center justify-between xl:px-9">
            <Link
              className="cursor-pointer py-8 text-3xl font-bold"
              onClick={pageUp}
              to={"/"}
            >
              CRYPTONEX
            </Link>

            <ul className="hidden gap-10 md:flex lg:-ml-8">
              {menu.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer bg-clip-text text-xl font-bold transition-all duration-300 hover:bg-mainColor hover:text-transparent"
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>

            <div className="hidden gap-5 md:flex">
              <i className="fa-brands fa-twitter cursor-pointer bg-clip-text text-[1.3rem] text-white transition-all duration-300 hover:bg-mainColor hover:text-transparent"></i>

              <i className="fa-brands fa-discord cursor-pointer bg-clip-text text-[1.3rem] text-white transition-all duration-300 hover:bg-mainColor hover:text-transparent"></i>
            </div>

            <div onClick={handleMobileMenu} className="md:hidden">
              <i className="fa-solid fa-bars-staggered text-2xl"></i>
            </div>
          </div>
        </Wrapper>
      </nav>

      {/* mobile menu */}

      <div
        className={`fixed left-0 top-0 z-40 flex h-[100vh] w-full select-none flex-col items-center justify-center overflow-hidden bg-[#f3f2f4] text-center font-grotesk transition-all duration-300 ease-out ${
          mobileMenu ? "left-0" : "left-[-100%]"
        }`}
      >
        <div
          className="absolute right-4 top-[2.2rem]"
          onClick={handleMobileMenu}
        >
          <IoClose size={32} className=" stroke-[10px]" />
        </div>

        <ul className="z-30 flex flex-col gap-6">
          {menu.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer bg-clip-text text-3xl font-bold transition-all duration-300 hover:bg-mainColor hover:text-transparent"
              onClick={handleMobileMenu}
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
