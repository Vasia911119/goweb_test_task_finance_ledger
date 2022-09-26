import img from "../../../images/home/blog.jpg";
import webp from "../../../images/home/blog.webp";
import img2x from "../../../images/home/blog@2x.jpg";
import webp2x from "../../../images/home/blog@2x.webp";

function Image() {
  return (
      <picture>
          <source srcSet={webp2x} media="(min-width: 768px)" type="image/webp" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
          <source srcSet={img2x} media="(min-width: 768px)" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
          <source srcSet={webp2x} media="(min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)" type="image/webp" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
          <source srcSet={img2x} media="(min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
          <source srcSet={webp} media="(max-width: 767px)" type="image/webp" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
          <source srcSet={img} media="(max-width: 767px)" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
          <img src={img} alt={"a team of people standing near a table"} style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
    </picture>
  );
}

export default Image;