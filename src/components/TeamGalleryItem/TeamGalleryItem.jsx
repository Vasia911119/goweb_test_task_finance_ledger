import { GalleryItem, GalleryItemImage, Header, SubHeader, ImgWrp } from './TeamGalleryItem.styled';

 function TeamGalleryItem({h2, h3, img, webp, img2x, webp2x, tags}) {

  return (
      <GalleryItem>
          <ImgWrp>
              <GalleryItemImage>
                <source srcSet={webp2x} media="(min-width: 768px)" type="image/webp" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
                <source srcSet={img2x} media="(min-width: 768px)" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
                <source srcSet={webp2x} media="(min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)" type="image/webp" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
                <source srcSet={img2x} media="(min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
                <source srcSet={webp} media="(max-width: 767px)" type="image/webp" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
                <source srcSet={img} media="(max-width: 767px)" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
                <img src={img} alt={tags} style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
              </GalleryItemImage>
          </ImgWrp>
          <Header>{h2}</Header>
          <SubHeader>{h3}</SubHeader>
    </GalleryItem>
  )
}

export default TeamGalleryItem;