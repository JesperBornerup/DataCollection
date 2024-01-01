import React from "react";


function VideoStim({ source }) {
  const opts = {
    height: "390",
    width: "640",
  };
  return (
    <div className="flex flex-col items-center">
      <video src={source} width="100%" controls>
        Dette virker åbenbart ikke, tryk bare videre
      </video>
    </div>
  );
}

export default VideoStim;
