import React, { useState, useEffect } from "react";
import Wrapper from "./partials/Wrapper";
import Bitcoin from "../src/assets/bitcoin.png";
import Ethereum from "../src/assets/ethereum.png";
import { BiChevronDown } from "react-icons/bi";
import { currencyFormat } from "../api/utils";
import Loader from "./partials/loader/Loader";
import { fetchApi } from "../api/utils";

const HomeSection = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchApi(setData);
  }, []);

  const homeData = data.slice(0, 4);

  return (
    <section id="home" className="h-screen w-full bg-heroBg font-grotesk">
      <Wrapper>
        <div className="absolute left-[50%] top-[30%] w-full -translate-x-1/2 transform md:top-[30%] lg:top-[30%] xl:top-[23.5%]">
          <div className="relative mx-auto h-fit w-full text-center text-[3rem] font-bold uppercase leading-[1.1] text-white md:text-[4.7rem] lg:text-[5.6rem] xl:text-[6.6rem]">
            <img
              src={Bitcoin}
              alt="Bitcoin"
              className="absolute top-[-12rem] hidden animate-move lg:-left-[12rem] lg:block xl:-left-11"
            />

            <h1>
              Track and Trade
              <br />
              <span className="bg-mainColor bg-clip-text text-transparent">
                Crypto currencies
              </span>
            </h1>

            <img
              src={Ethereum}
              alt="Bitcoin"
              className="absolute top-[-12rem] hidden animate-move lg:-right-[12rem] lg:block xl:-right-11"
            />
          </div>

          <button className="mx-auto my-8 flex w-[15rem] items-center justify-center rounded-full bg-mainColor py-4 text-xl font-bold text-white md:hidden">
            See Prices
            <BiChevronDown size={25} className="ml-2 stroke-[1px]" />
          </button>

          {loading && <Loader />}
          <div
            onLoad={() => setLoading(false)}
            className="mx-auto mt-14 hidden w-full grid-cols-4 gap-6 px-4 md:grid lg:max-w-[64rem] lg:px-0"
          >
            {homeData.map((item, index) => (
              <div
                className="flex h-auto flex-col items-center place-self-center text-[1.3rem] font-bold text-white md:w-[11rem] lg:w-[13rem]"
                key={index}
              >
                <img
                  src={item?.image}
                  alt={item?.name}
                  className="h-[5.5rem] w-[5.5rem]"
                />

                <p className="mt-3">
                  {item?.name}{" "}
                  <span
                    className={`${
                      item?.price_change_percentage_24h <= 0
                        ? "text-[#FF0000]"
                        : "text-green-500"
                    } text-[1.4rem]`}
                  >
                    {item?.price_change_percentage_24h?.toFixed(2)}%
                  </span>
                </p>

                <p className="text-[1.4rem]">
                  ₹ {currencyFormat(Math.floor(item.current_price.toFixed(2)))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default HomeSection;
