import { useState } from "react";
import Modal from "../Modal/Modal";
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import Spinner from '../Loader/Loader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function ImageGalleryItem({ id, img, webp, img2x, webp2x, tags }) {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
   };

  return (
    <GalleryItem>
      <GalleryItemImage onClick={toggleModal}>
          <source srcSet={webp2x} media="(min-width: 768px)" type="image/webp" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
          <source srcSet={img2x} media="(min-width: 768px)" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
          <source srcSet={webp2x} media="(min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)" type="image/webp" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
          <source srcSet={img2x} media="(min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
          <source srcSet={webp} media="(max-width: 767px)" type="image/webp" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
          <source srcSet={img} media="(max-width: 767px)" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
          <img src={img} alt={tags} style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
      </GalleryItemImage>
      {loading && <Spinner />}
      {showModal && (
        <Modal
          id={id}
          toggleModal={toggleModal}
          onImageLoad={() => { setLoading(true) }}
        />
      )}
    </GalleryItem>
  )
}

export default ImageGalleryItem;