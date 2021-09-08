import React from "react";
import image from "../../../assets/images/HomeImg/colosseum.jpg";

const Monument = ({ monumentName, description, id }) => {
  const style = {
    backgroundImage: `url('../assets/images/HomeImg/kaplicaSykstyńska.jpg')`,
    height: "200px",
  };

  return (
    <div
      className="text-justify pl-12 pr-12 md:pl-20 md:pr-20 lg:pl-52 lg:pr-52 mt-10 mb-20"
      id={id}
      name={id}
    >
      <h1 className="text-lg">{monumentName}</h1>
      <p className="mt-5 mb-5">{description}</p>
      <div className="p-10 w-full " style={style}></div>
    </div>
  );
};

export default Monument;
