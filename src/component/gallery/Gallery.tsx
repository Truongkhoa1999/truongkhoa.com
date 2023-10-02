import  { useState } from "react";
import { galeryData } from "../../data/galerydata";
// style
import "./style/gallery.scss";

export const Gallery = () => {
  const photoList = galeryData;
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const handleZoomIn = (index: number) => {
    setSelectedImage(index);
  };

  const handleZoomOut = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery__wrapper">
      {photoList.map((item, index) => (
        <div key={index} className="thumbnail-container">
          <img
            onClick={() => handleZoomIn(index)}
            src={item}
            alt="photo"
            className="thumbnail"
          />
        </div>
      ))}

      {selectedImage !== null && (
        <div className="zoomed__image__container">
          <img
            src={photoList[selectedImage]}
            alt="zoomed-photo"
            className="zoomed-image"
          />
          <button onClick={handleZoomOut} className="zoom-out-button">
            X
          </button>
        </div>
      )}
    </div>
  );
};
