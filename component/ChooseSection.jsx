import React from "react";
import Wrapper from "./partials/Wrapper";
import ChooseCard from "./partials/ChooseCard";
import ChooseBg from "../src/assets/choose-main.png";

const ChooseSection = () => {
  return (
    <section
      id="chooseUs"
      className="bg-[#0f051d] pb-10 pt-16 font-noto md:pb-8 md:pt-24 lg:py-24"
    >
      <Wrapper>
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-16 text-[3.5rem] font-bold uppercase leading-tight text-white md:text-[4.4rem]">
            why{" "}
            <span className="bg-mainColor bg-clip-text text-transparent">
              choose us
            </span>
          </h2>

          <div className="grid h-auto w-full gap-4 text-white xl:grid-cols-3">
            <div className="flex flex-col gap-7 md:px-24 xl:px-0">
              <ChooseCard
                icon="fa-solid fa-wallet"
                title="CONNECT YOUR WALLET"
                desc="Use Trust Wallet, Metamask or to connect to the app."
              />

              <ChooseCard
                icon="fa-solid fa-pen-ruler"
                title="SELECT YOUR QUANTITY"
                desc="Upload your crypto and set a title, description and price."
              />

              <ChooseCard
                icon="fa-solid fa-bolt"
                title="CONFIRM TRANSACTION"
                desc="Earn by selling your crypto on our marketplace."
              />
            </div>

            <div className="hidden flex-col items-center justify-center gap-6 md:flex">
              <img
                src={ChooseBg}
                alt="image"
                className="py-8 md:w-[25%] xl:w-[85%] xl:py-0"
              />
            </div>

            <div className="mt-3 flex flex-col gap-7 md:mt-0 md:px-24 xl:px-0">
              <ChooseCard
                icon="fa-solid fa-satellite-dish"
                title="RECEIVE YOUR OWN NFTS"
                desc="Invest all your crypto at one place on one platform."
              />

              <ChooseCard
                icon="fa-solid fa-chess-knight"
                title="TAKE A MARKET TO SELL"
                desc="Discover, collect the right crypto collections buy or sell."
              />

              <ChooseCard
                icon="fa-solid fa-boxes-stacked"
                title="DRIVE YOUR COLLECTION"
                desc="We make it easy to Discover, Invest and manage."
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ChooseSection;
