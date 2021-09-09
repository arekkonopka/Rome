import React from "react";
import Monument from "./Monument/Monument";
import monumentsData from "./Monument/monuments.json";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const History = ({ active, isPolish }) => {
  return (
    <div
      className={`${
        active && "hidden"
      } w-auto pt-16 cards overflow-hidden bg-gradient-to-r from-green-100 via-gray-100 to-red-100`}
    >
      {monumentsData.map((monument, index) => (
        <Monument
          key={index}
          monumentName={isPolish ? monument.pl.name : monument.eng.name}
          description={
            isPolish ? monument.pl.description : monument.eng.description
          }
          id={isPolish ? monument.pl.id : monument.eng.id}
          url={isPolish ? monument.pl.id : monument.eng.id}
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
