import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { Gallery } from './ImageGallery.styled';

function ImageGallery({ items }) {

  return (
    <Gallery>
      {items.map(({ id, img, webp, img2x, webp2x, tags }) => (
        <ImageGalleryItem
          id={id}
          key={id}
          img={img}
          webp={webp}
          img2x={img2x}
          webp2x={webp2x}
          tags={tags}
          lazyLoad={true}
        />
      ))}
    </Gallery>
  );
}

export default ImageGallery;