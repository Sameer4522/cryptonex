import React from "react";

const Footer = () => {
  return (
    <div className="h-[21rem] bg-[#0f051d] bg-footerBg bg-cover bg-center bg-no-repeat font-grotesk text-white">
      <div className="flex h-full w-full flex-col items-center justify-center text-center">
        <div className="flex items-center gap-7 text-[40px] transition duration-200">
          <i className="fa-brands fa-twitter cursor-pointer bg-clip-text text-white transition duration-300 hover:bg-mainColor hover:text-transparent"></i>

          <i className="fa-brands fa-discord cursor-pointer bg-clip-text text-white transition duration-300 hover:bg-mainColor hover:text-transparent"></i>

          <i className="fa-brands fa-facebook cursor-pointer bg-clip-text text-white transition duration-300 hover:bg-mainColor hover:text-transparent"></i>

          <i className="fa-brands fa-youtube cursor-pointer bg-clip-text text-white transition duration-300 hover:bg-mainColor hover:text-transparent"></i>
        </div>

        <div className="mt-7 flex gap-8 text-[17px]">
          <p className="cursor-pointer bg-clip-text text-white transition duration-300 hover:bg-mainColor hover:text-transparent">
            Privacy
          </p>
          <p className="cursor-pointer bg-clip-text text-white transition duration-300 hover:bg-mainColor hover:text-transparent">
            Terms of Use
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
