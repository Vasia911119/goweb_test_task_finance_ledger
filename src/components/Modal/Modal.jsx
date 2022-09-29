import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalStyle, PrevImg, NextImg, Close } from './Modal.styled';
import items from "../../helpers/data/galleryItems";
import spinner from "../../images/gallery/loading.gif";

const modalRoot = document.getElementById('modal-root');

function Modal({ toggleModal, id }) {
  const [num, setNum] = useState(id)
  const [img, setImg] = useState("");
  const [webp, setWebp] = useState("");
  const [img2x, setImg2x] = useState("");
  const [webp2x, setWebp2x] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = () => {
    const current = items.find(item => item.id === num);
    setImg(current.img);
    setWebp(current.webp);
    setImg2x(current.img2x);
    setWebp2x(current.webp2x);
    setTags(current.tags);
  }

  useEffect(() => {
    getData();
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

  const handleNextClick = () => {
    setNum(num + 1);
    getData();
  };

  const handlePrevClick = () => {
    setNum(num - 1);
    getData();
  };

  const handleCloseIcon = () => {
    toggleModal();
  };
  
  const onImageLoading = () => {
    setLoading(true);
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalStyle>
        {!loading && <img src={spinner} alt="loading..." style={{position: "absolute", top: "50%", left: "50%", transform: `translate(-50%, -50%)`}}/>}
        {num !== 1 && <PrevImg onClick={handlePrevClick} src={require("../../images/gallery/prev.png")} />}
        <picture onLoad={onImageLoading}>
          <source srcSet={webp2x} media="(min-width: 768px)" type="image/webp" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
          <source srcSet={img2x} media="(min-width: 768px)" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
          <source srcSet={webp2x} media="(min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)" type="image/webp" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
          <source srcSet={img2x} media="(min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
          <source srcSet={webp} media="(max-width: 767px)" type="image/webp" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
          <source srcSet={img} media="(max-width: 767px)" style={{ width: '100%', height: '100%', objectFit: "cover" }} />
          <img src={img} alt={tags} style={{ width: '100%', height: '100%', objectFit: "cover" }} />
        </picture>
        {num !== 8 && <NextImg onClick={handleNextClick} src={require("../../images/gallery/next.png")} />}
        <Close onClick={handleCloseIcon} src={require("../../images/gallery/close.png")} />
      </ModalStyle>
    </Overlay>,  
    modalRoot
  );
}

export default Modal;