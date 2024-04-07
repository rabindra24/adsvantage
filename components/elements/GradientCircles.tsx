import React from "react";

const GradientCircles = () => {
  return (
    <>
      <div className="w-[300px] h-[300px] bg-gradient-to-r from-sky-400 to-teal-400 opacity-50 rounded-full blur-3xl absolute top-32 -right-56 animate-spin "></div>
      <div className="w-[250px] h-[200px] bg-gradient-to-r from-sky-400 to-teal-400 opacity-50 rounded-full blur-3xl absolute bottom-24 -left-52 animate-spin-slow "></div>
    </>
  );
};

export default GradientCircles;
