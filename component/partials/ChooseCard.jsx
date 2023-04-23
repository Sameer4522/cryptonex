import React from "react";

const ChooseCard = ({ icon, title, desc }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 rounded-3xl border border-[hsla(0,0%,51%,.25)] bg-[hsla(0,0%,100%,.05)] p-6 md:flex-row md:items-start">
      <div>
        <i
          className={`${icon} flex h-[4rem] w-[4rem] items-center justify-center rounded-2xl bg-mainColor p-3 text-3xl`}
        ></i>
      </div>

      <div className=" text-center md:text-left">
        <h4 className="-mt-1 text-[1.6rem] font-bold leading-tight">{title}</h4>

        <p className="mt-2 text-lg text-[#e7e6e8]">{desc}</p>
      </div>
    </div>
  );
};

export default ChooseCard;
