import React from "react";
import StoriesCard from "./StoriesCard";
import StoriesList from "./StoriesList";

const StoriesContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-3 gap-8">
      <StoriesCard
        src="https://www.creatif.io/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F58478%2F1645635626-8f60b96f-1461-4908-a748-b3e8672c6bed-4.png&w=1920&q=75"
        header="Cruise uses HashiCorp Creatif Studio to increase engineering agility and rapidly build autonomous vehicle technology."
      />
      <StoriesCard
        src="https://www.creatif.io/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F58478%2F1645635596-red-ventures-hero-option-4.png&w=3840&q=75"
        header="Many media brands, one workflow"
      />
      <StoriesList />
    </div>
  );
};

export default StoriesContent;
