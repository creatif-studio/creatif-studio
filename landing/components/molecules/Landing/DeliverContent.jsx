import React from "react";
import { DELIVER_CONTENT } from "utils/constants";

const DeliverContent = () => {
  return (
    <ul className="grid grid-cols-2 gap-8">
      {DELIVER_CONTENT.map((content) => (
        <li key={content.id} className="col-span-1">
          <h3 className="font-semibold font-display text-2xl mb-5">
            {content.heading}
          </h3>
          <p className="text-sm text-neutral-600 leading-loose">
            {content.description}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default DeliverContent;
