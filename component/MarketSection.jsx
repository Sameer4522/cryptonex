import React, { useState, useEffect } from "react";
import Wrapper from "./partials/Wrapper";
import { currencyFormat, fetchApi } from "../api/utils";
import Pagination from "./Pagination";
import Loader from "./partials/loader/Loader";
import { Link } from "react-router-dom";

const MarketSection = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchApi(setData, `&per_page=10&page=${currentPage}&sparkline=false`);
  }, [currentPage]);

  const scrollTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  return (
    <section
      id="market"
      className="bg-[#0f051d] font-grotesk md:pt-16 lg:pb-6 lg:pt-12"
    >
      <Wrapper>
        <div className="flex flex-col">
          <h1 className="mb-5 text-center text-[2.8rem] font-bold leading-tight text-white md:text-start">
            Market Update
          </h1>

          <div className="flex h-auto w-full flex-col overflow-x-auto whitespace-nowrap">
            <div className="grid rounded-md bg-mainColor px-4 text-right text-[1.4rem] font-medium text-white md:grid-cols-3 md:gap-4 md:rounded-t-md md:py-3 lg:grid-cols-[25fr,_25fr,_20fr,_25fr]">
              <p className="mt-3 place-self-center border-b pb-2 md:mt-0 md:place-self-start md:border-none md:pb-0 md:pt-0">
                Coin
              </p>
              <p className="place-self-center border-b py-2 md:place-self-end md:border-none md:py-0">
                Price
              </p>
              <p className="mb-3 place-self-center pt-2 md:mb-0 md:place-self-end md:pt-0">
                24h Change
              </p>
              <p className="hidden md:place-self-end lg:block">
                {"Highest Price (24h)"}
              </p>
            </div>

            <div className="flex flex-col" onLoad={() => setLoading(false)}>
              {loading && <Loader />}
              {data?.map((item) => (
                <Link
                  key={item.id}
                  onClick={scrollTop}
                  to={`/coin/${item.id}`}
                  className="grid h-auto w-full cursor-pointer gap-4 border-b border-[#f3f2f4] bg-[#0f051d] px-4 py-6 text-right text-[1.4rem] font-bold text-white hover:bg-[#200840] md:grid-cols-3 lg:grid-cols-[25fr,_25fr,_20fr,_25fr]"
                >
                  <span className="flex items-center justify-center gap-5 text-center md:justify-start md:text-left">
                    <img
                      src={item?.image}
                      alt={item.name}
                      className="h-[3.2rem] w-[3.2rem]"
                    />

                    <p>{item.name}</p>
                  </span>

                  <p className="flex items-center justify-center md:justify-end">
                    ₹ {currencyFormat(item.current_price.toFixed(2))}
                  </p>

                  <p
                    className={`flex items-center justify-center md:justify-end ${
                      item?.price_change_percentage_24h <= 0
                        ? "text-[#FF0000]"
                        : "text-green-500"
                    }`}
                  >
                    {item?.price_change_percentage_24h?.toFixed(2)} %
                  </p>

                  <p className="hidden items-center justify-end lg:flex">
                    ₹ {currencyFormat(item.high_24h.toFixed(2))}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>

      <div className="pt-12">
        <Pagination
          total={50}
          pageIndex={currentPage}
          setPageIndex={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default MarketSection;
