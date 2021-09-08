import React from "react";
import Monument from "./Monument/Monument";
import monumentsData from "./Monument/monuments.json";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const History = ({ active }) => {
  return (
    <div
      className={`${
        active && "hidden"
      } w-auto pt-16 cards overflow-hidden bg-gradient-to-r from-green-100 via-gray-100 to-red-100`}
    >
      {monumentsData.map((monument, index) => (
        <Monument
          key={index}
          monumentName={monument.pl.name}
          description={monument.pl.description}
          id={monument.pl.id}
        />
      ))}
      <a href="history#navbar">
        <ArrowUpwardIcon className="text-4xls rounded-full cursor-pointer fixed bottom-12 right-6 hover:bg-black hover:text-white">
          {" "}
        </ArrowUpwardIcon>
      </a>
    </div>
  );
};

export default History;

//rozwiazac problem z obrazakami, jak zmienic src bez importowania danego obrazka
