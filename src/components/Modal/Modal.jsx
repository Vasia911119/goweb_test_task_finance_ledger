import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalStyle, PrevImg, NextImg} from './Modal.styled';



const modalRoot = document.getElementById('modal-root');

function Modal ({toggleModal, img, webp, img2x, webp2x, tags}) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      toggleModal();
    }
  };

  const handleBackdropClick = (e) => {
    const clickedOnBackdrop = e.currentTarget === e.target;
    if (clickedOnBackdrop) {
      toggleModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalStyle>
        <PrevImg src={require("../../images/gallery/prev.png")}/>
        <picture>
          <source srcSet={webp2x} media="(min-width: 768px)" type="image/webp" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
          <source srcSet={img2x} media="(min-width: 768px)" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
          <source srcSet={webp2x} media="(min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)" type="image/webp" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
          <source srcSet={img2x} media="(min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
          <source srcSet={webp} media="(max-width: 767px)" type="image/webp" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
          <source srcSet={img} media="(max-width: 767px)" style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
          <img src={img} alt={tags} style={{ width: '100%', height: '100%', objectFit: "cover"}}/>
        </picture>
        <NextImg src={require("../../images/gallery/next.png")}/>
      </ModalStyle>
    </Overlay>,  
    modalRoot
  );
}

export default Modal;