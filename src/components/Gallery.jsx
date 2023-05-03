import styles from '../style';
import { useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const Gallery = () => {
  return (
    <div className="w-full h-96 border sci-fi-border">
      <h2 className="text-gradient text-3xl font-bold p-4">Gallery</h2>
      <div className="flex justify-around p-4">
        <div className="w-1/3 h-48 border img-border m-5">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={img1}
            alt="gallery"
          />
        </div>
        <div className="w-1/3 h-48 border img-border m-5">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={img2}
            alt="gallery"
          />
        </div>
        <div className="w-1/3 h-48 border img-border m-5">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={img3}
            alt="gallery"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery