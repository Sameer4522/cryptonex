import React from "react";
import Bitcoin from "../src/assets/bitcoin.png";
import Ethereum from "../src/assets/ethereum.png";

const JoinSection = () => {
  return (
    <section
      id="join"
      className="bg-[#0f051d] pb-1 pt-24 font-grotesk lg:pb-16"
    >
      <div className="w-full">
        <div className="relative mx-auto h-fit w-full text-center leading-[1.1] text-white">
          <img
            src={Bitcoin}
            alt="Bitcoin"
            className="absolute left-[9rem] top-[-10rem] z-10 hidden animate-move xl:block"
          />

          <h1 className="text-[4rem] font-bold uppercase md:text-[4.7rem] lg:text-[5.6rem] xl:text-[6.2rem]">
            JOIN US VIA
            <br />
            <span className="bg-mainColor bg-clip-text text-transparent">
              DISCORD
            </span>
          </h1>

          <img
            src={Ethereum}
            alt="Bitcoin"
            className="absolute right-[9rem] top-[-10rem] hidden animate-move xl:block"
          />

          <p className="mb-10 mt-6 text-[1.4rem] md:mb-[5.5rem]">
            Invest and manage all your crypto at one place.
          </p>

          <button className="mx-auto my-8 flex w-[15rem] items-center justify-center rounded-full bg-mainColor py-[1.1rem] text-xl font-bold text-white">
            Join via Discord
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
