import React from "react";

export default function ImageStim({ pathToImage }) {
  return (
    <div>
      <img src={pathToImage} alt="Image" />
    </div>
  );
}
