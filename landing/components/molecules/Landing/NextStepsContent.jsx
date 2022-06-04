import React from "react";
import { NEXT_STEPS_CONTENT } from "utils/constants";
import NextStepsCard from "./NextStepsCard";

const NextStepsContent = () => {
  return (
    <ul className="col-span-2 grid grid-cols-3 gap-8">
      {NEXT_STEPS_CONTENT.map((content, index) => (
        <NextStepsCard key={index} {...content} />
      ))}
    </ul>
  );
};

export default NextStepsContent;