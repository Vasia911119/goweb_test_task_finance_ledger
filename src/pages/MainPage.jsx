import React from 'react';
import Container from '../components/Container/Container';
import Hero from "../components/Hero/Hero"
import Solutions from '../components/Solutions/Solutions';
import Cases from '../components/Cases/Cases';

function MainPage() {
  return (
    <Container>
        <Hero />
      <Solutions />
      <Cases/>
    </Container>
  );
}

export default MainPage;
