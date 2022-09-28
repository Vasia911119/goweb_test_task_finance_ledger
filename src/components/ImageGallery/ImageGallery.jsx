import { useState } from 'react';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { Gallery } from './ImageGallery.styled';
import Spinner from '../Loader/Loader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';



function ImageGallery({ items }) {
  const [loading, setLoading] = useState(false);

  return (
    <Gallery>
      {loading && <Spinner />}
      {items.map(({ id, img, webp, img2x, webp2x, tags }) => (
        <ImageGalleryItem
          id={id}
          key={id}
          img={img}
          webp={webp}
          img2x={img2x}
          webp2x={webp2x}
          tags={tags}
          onImageLoad={() => { setLoading(true) }}
        />
      ))}
    </Gallery>
  );
}

export default ImageGallery;