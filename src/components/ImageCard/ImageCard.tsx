import css from "./ImageCard.module.css";

const ImageCard = ({ image, onOpen }) => {
  return (
    <div className={css.card} onClick={onOpen}>
      <img className={css.img} src={image.urls.small} alt={image.description} />
    </div>
  );
};

export default ImageCard;
