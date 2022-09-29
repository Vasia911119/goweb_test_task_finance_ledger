import React from 'react';
// import ReactDOM from 'react-dom'
import Favicon from 'react-favicon'
import { Suspense, lazy } from "react";

// const About = lazy(() => import("../src/components/about/About.jsx"));
// const Cases = lazy(() => import("./components/cases/Cases.jsx"));

// const Team = lazy(() => import("./components/team/Team.jsx"));



import Container from '../components/Container/Container';
import Hero from "../components/Hero/Hero";
const Solutions = lazy(() => import("../components/Solutions/Solutions"));
// import Solutions from '../components/Solutions/Solutions';
const Cases = lazy(() => import("../components/Cases/Cases"));
// import Cases from '../components/Cases/Cases';
// import Blog from "../components/Blog/Blog";
const Blog = lazy(() => import("../components/Blog/Blog"));
// import Team from "../components/Team/Team";
const Team = lazy(() => import("../components/Team/Team"));
// import Contact from '../components/Contact/Contact';
const Contact = lazy(() => import("../components/Contact/Contact"));
// import Footer from '../components/Footer/Footer';
const Footer = lazy(() => import("../components/Footer/Footer"));

function MainPage() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Container>
        <Favicon url="../images/favicon.png" />
        <Hero />
        <Solutions />
        <Cases />
        <Blog />
        <Team />
        <Contact />
        <Footer />
      </Container>
    </Suspense>
  );
}

export default MainPage;
