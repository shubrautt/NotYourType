import React from "react";
import "./style.css";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const ImageList = () => {
  return (
    <div className="images_list">
      {arr.map((e) => {
        return <img src={`images/${e}.jpg`} alt={e} width={50} key={e} />;
      })}
    </div>
  );
};

export default ImageList;
