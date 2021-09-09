import React from "react";
import "./index.css";
import colosseum from "../../../assets/images/HomeImg/colosseum.jpg";
import fontannaDiTrevi from "../../../assets/images/HomeImg/fontannaDiTrevi.jpg";
import forumRomanum from "../../../assets/images/HomeImg/forumRomanum.jpg";
import kaplicaSykstynska from "../../../assets/images/HomeImg/kaplicaSykstyńska.jpg";
import muzeaWatykanskie from "../../../assets/images/HomeImg/muzeaWatykanskie.jpg";

const Monument = ({ monumentName, description, id, url }) => {
  let name;
  if (url === "colosseum") {
    name = colosseum;
  } else if (url === "fontannaDiTrevi") {
    name = fontannaDiTrevi;
  } else if (url === "forumRomanum") {
    name = forumRomanum;
  } else if (url === "kaplicaSykstynska") {
    name = kaplicaSykstynska;
  } else if (url === "muzeaWatykanskie") {
    name = muzeaWatykanskie;
  }

  return (
    <div
      className="text-justify pl-12 pr-12 md:pl-20 md:pr-20 lg:pl-52 lg:pr-52 mt-10 mb-20"
      id={id}
      name={id}
    >
      <h1 className="text-lg">{monumentName}</h1>
      <p className="mt-5 mb-5">{description}</p>
      <div
        className="image p-2 w-full image rounded-xl"
        style={{
          backgroundImage: `url(${name})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default Monument;
