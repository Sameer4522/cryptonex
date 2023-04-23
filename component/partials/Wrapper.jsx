import React from "react";

const Wrapper = ({ classes, children }) => {
  return (
    <div className={`mx-auto max-w-[80rem] px-5 ${classes}`}>{children}</div>
  );
};

export default Wrapper;
