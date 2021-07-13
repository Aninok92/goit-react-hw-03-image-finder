import s from "./ImageGalleryItem.module.scss";

const ImageGalleryItem = ({ webformatURL, onSelect }) => {
  return (
    <li className={s.ImageGalleryItem} onClick={onSelect}>
      <img src={webformatURL} alt="" className={s.ImageGalleryItemImage} />
    </li>
  );
};
export default ImageGalleryItem;
