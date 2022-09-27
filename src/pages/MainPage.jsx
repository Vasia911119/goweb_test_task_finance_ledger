import React from 'react';
import Container from '../components/Container/Container';
import Hero from "../components/Hero/Hero";
import Solutions from '../components/Solutions/Solutions';
import Cases from '../components/Cases/Cases';
import Blog from "../components/Blog/Blog";
import Team from "../components/Team/Team";
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

function MainPage() {
  return (
    <Container>
      <Hero />
      <Solutions />
      <Cases />
      <Blog />
      <Team />
      <Contact />
      <Footer />
    </Container>
  );
}

export default MainPage;
