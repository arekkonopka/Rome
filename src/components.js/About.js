import React from "react";
import data from "../data.json";

const About = ({ active, isPolish }) => {
  return (
    <div className={`card text-center ${active && "ml-52"} `}>
      <p className="mt-10 ml-20 mr-20 w-auto">
        {isPolish ? data.about.firstLine.pl : data.about.firstLine.eng}
        <br />
        <br />
        {isPolish ? data.about.secondLine.pl : data.about.secondLine.eng}
      </p>
    </div>
  );
};

export default About;
