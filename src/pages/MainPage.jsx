import React from 'react';
import Container from '../components/Container/Container';
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero"
import { Wrapper } from './MainPage.styled';
// import Library from '../components/Library/Library';

function MainPage() {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Hero />
      </Wrapper>
    </Container>
  );
}

export default MainPage;
