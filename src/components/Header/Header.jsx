import React, { useEffect, useState, useRef } from "react";
import {
  LogoStyled,
  Container,
  ContainerFixed
} from './Header.styled';
import Navigation from '../Navigation/Navigation';


function Header() {
  const [scrolled, setScrolled] = useState(false);
    const [height, setHeight] = useState(0)
    const ref = useRef(null)

   useEffect(() => {
    setHeight(ref.current.clientHeight)
   }, [setHeight]) 
    
    useEffect(() => {
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () =>
            window.pageYOffset > height ? setScrolled(true) : setScrolled(false)
        );
    }
    });
  
  return (
    <>
      { scrolled
        ? <ContainerFixed ref={ref}>
            <LogoStyled />
            <Navigation />
          </ContainerFixed > 
        : <Container ref={ref}>
            <LogoStyled />
            <Navigation />
          </Container> }
    </>
    
    // <Container ref={ref}>
    //       <LogoStyled />
    //       <Navigation />
    // </Container>
  );
}

export default Header;