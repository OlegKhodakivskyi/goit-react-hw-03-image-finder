import React from "react";
import css from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, openModal }) => {
  console.log(largeImageURL);
  return (
    <>
      <li
        className={css.ImageGalleryItem}
        onClick={() => openModal(largeImageURL, tags)}
      >
        <img
          src={webformatURL}
          alt={tags}
          className={css["ImageGalleryItem-image"]}
        />
      </li>
    </>
  );
};

export default ImageGalleryItem;
