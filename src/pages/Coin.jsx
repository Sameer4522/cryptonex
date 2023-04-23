import React, { useState, useEffect } from "react";
import Wrapper from "../../component/partials/Wrapper";
import { useParams } from "react-router-dom";
import { fetchCoinData, currencyFormat } from "../../api/utils";
import Loader from "../../component/partials/loader/Loader";
import DOMPurify from "dompurify";

const Coin = () => {
  const { coinId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCoinData(`${coinId}`, setData);
  }, [coinId]);

  console.log(data);

  return (
    <section className="h-full w-full bg-[linear-gradient(0deg,#0f051d_30%,#130749_70%)] font-grotesk lg:h-screen">
      <Wrapper>
        <div
          className="relative flex h-full w-full flex-col items-center justify-center pb-[4rem] pt-[8rem] text-center text-white lg:h-screen lg:flex-row lg:py-0"
          onLoad={() => setLoading(false)}
        >
          <div className="flex w-full flex-col items-center justify-center gap-4 border-b border-[#f3f2f4] md:w-[90%] lg:w-[30%] lg:border-b-0 lg:border-r-2">
            {loading && <Loader />}
            {data.image && (
              <>
                <img
                  src={data?.image?.large}
                  alt={data?.name}
                  className="h-[14rem] w-[14rem] "
                />
                <h1 className="text-[2.1rem] font-bold">{data?.name}</h1>
                <p className="mb-8 text-xl font-semibold lg:mb-0">
                  Rank: #{data?.coingecko_rank}
                </p>
              </>
            )}
          </div>

          <div className="flex flex-col justify-between px-4 pt-7 md:p-7 lg:w-[70%]">
            <div className="mx-auto flex w-full flex-col justify-between text-center text-[1.3rem] font-medium md:w-[93%] md:flex-row md:text-start lg:mx-0 lg:w-full">
              {data?.market_data && (
                <>
                  <div className="flex justify-center gap-2 md:justify-start">
                    <span>24h Change:</span>
                    <p
                      className={`font-bold ${
                        data?.market_data
                          ?.price_change_percentage_24h_in_currency?.inr <= 0
                          ? "text-[#FF0000]"
                          : "text-green-500"
                      }`}
                    >
                      {data?.market_data?.price_change_percentage_24h_in_currency?.inr?.toFixed(
                        2
                      )}
                      %
                    </p>
                  </div>

                  <div className="flex justify-center gap-2 md:justify-start">
                    <span>Price:</span>
                    <p
                      className={`font-bold ${
                        data?.market_data
                          ?.price_change_percentage_24h_in_currency?.inr <= 0
                          ? "text-[#FF0000]"
                          : "text-green-500"
                      }`}
                    >
                      ₹{" "}
                      {currencyFormat(
                        data?.market_data?.current_price?.inr?.toFixed(2)
                      )}
                    </p>
                  </div>

                  <div className="flex justify-center gap-2 md:justify-start">
                    <p>Symbol:</p>
                    <span className="font-bold">{data?.symbol}</span>
                  </div>
                </>
              )}
            </div>
            {loading && <Loader />}

            <div className="mt-8 h-[18rem] w-full overflow-y-auto text-left text-xl md:h-[20rem] lg:h-[15rem] lg:text-lg">
              {data.description && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      data.description ? data.description.en : ""
                    ),
                  }}
                ></p>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Coin;
