import TeamGalleryItem from "../TeamGalleryItem/TeamGalleryItem";
import { Gallery } from './TeamGallery.styled';

function TeamGallery({ items }) {
  return (
    <Gallery>
      {items.map(({ h2, h3, id, img, webp, img2x, webp2x, tags }) => (
        <TeamGalleryItem
            h2={h2}
            h3={h3}
            key={id}
            img={img}
            webp={webp}
            img2x={img2x}
            webp2x={webp2x}
            tags={tags}
        />
      ))}
    </Gallery>
  );
}

export default TeamGallery;