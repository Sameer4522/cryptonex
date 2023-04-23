import React, { useEffect, useState } from "react";
import { chunk, times } from "lodash-es";
import { BiChevronLeft } from "react-icons/bi";

const Pagination = ({ total, pageIndex, setPageIndex }) => {
  const [pages, setPages] = useState(0);

  useEffect(() => {
    if (total) {
      let result = 0;
      let remainder = 0;

      result = total / 10;
      remainder = total % 10;
      setPages(remainder > 0 ? result + 1 : result);
    }
  }, [total]);

  const scrollMarket = () => {
    window.scrollTo({
      top: window.pageYOffset - 850,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`relative mx-auto flex items-center justify-center py-6 font-grotesk text-base font-bold`}
    >
      {times(pages, (index) => (
        <button
          id="pageBtn"
          key={index}
          onClick={() => {
            setPageIndex(index + 1);
            scrollMarket();
          }}
          className={`relative mx-[6px] h-[3rem] w-[3rem] rounded-full px-3 text-lg transition-all duration-200 ${
            index + 1 === pageIndex
              ? "bg-mainColor text-white"
              : "bg-[#f3f2f4] text-gray-700"
          }`}
        >
          {index + 1}

          <span
            className={`
            ${index + 1 === pageIndex}
          absolute left-1/2 top-1/2 -z-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full`}
          ></span>
        </button>
      ))}
    </div>
  );
};

export default Pagination;
