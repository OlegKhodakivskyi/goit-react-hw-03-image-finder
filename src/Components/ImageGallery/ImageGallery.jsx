import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <>
      <ul className={css.ImageGallery}>
        {images.map(({ id, tags, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            tags={tags}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            openModal={openModal}
          />
        ))}
      </ul>
    </>
  );
};
export default ImageGallery;
