import React from "react";
import './Gallery.css'
const Gallery = () => {
  return (
    <>
      <div className="Gallery">
        {[...Array(10)].map((x,i) => (
          <img
            key={i}
            className="Gallery-Image"
            src="https://dummyimage.com/320x250/000/fff.jpg"
            alt="img"
          />
          // <div>
          // </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
