import assets from "assets";
import Image from "next/image";
import React from "react";

const VideoPlay = () => {
  return (
    <button className="outline-none col-span-12 md:col-span-6 xl:col-span-8 relative h-[18.75rem] md:h-full xl:h-[28.75rem] rounded-l-md">
      <img
        src="/images/multicloud-whiteboard.jpg"
        alt="multicloud whiteboard"
        className="h-full w-full object-cover absolute top-0 left-0 right-0 rounded-t-md xl:rounded-l-md"
      />
      <div className="absolute top-0 left-0 right-0 h-full w-full bg-black/40 transition-colors ease-in hover:bg-black/30 rounded-l-md py-24 px-8 flex items-center justify-center">
        <div className="h-13 w-13 md:h-24 md:w-24">
          <Image src={assets.icons.VIDEO_PLAY} layout="responsive" />
        </div>
      </div>
    </button>
  );
};

export default VideoPlay;
