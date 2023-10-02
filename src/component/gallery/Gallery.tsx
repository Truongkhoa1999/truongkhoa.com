import { galeryData } from "../../data/galerydata";
// style
import './style/gallery.scss'
export const Gallery = () => {
  const photoList = galeryData;
  return (
    <div className="gallery__wrapper">
      {photoList.map((item, index) => (
        <img src={item} alt="photo" key={index} />
      ))}
    </div>
  );
};
