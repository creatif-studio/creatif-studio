import React from "react";
import { STORIES_CONTENT } from "utils/constants";
import StoriesListItem from "./StoriesListItem";

const StoriesList = () => {
  return (
    <ul className="col-span-1 divide-y divide-neutral-300 border-b border-neutral-300 xl:-mt-8">
      {STORIES_CONTENT.map((content) => (
        <StoriesListItem
          key={content.id}
          heading={content.heading}
          href={content.href}
        />
      ))}
    </ul>
  );
};

export default StoriesList;
