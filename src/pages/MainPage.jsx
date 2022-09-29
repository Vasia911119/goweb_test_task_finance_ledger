import React from 'react';
import { Suspense, lazy } from "react";
import Container from '../components/Container/Container';
import Hero from "../components/Hero/Hero";
const Solutions = lazy(() => import("../components/Solutions/Solutions"));
const Cases = lazy(() => import("../components/Cases/Cases"));
const Blog = lazy(() => import("../components/Blog/Blog"));
const Team = lazy(() => import("../components/Team/Team"));
const Contact = lazy(() => import("../components/Contact/Contact"));
const Footer = lazy(() => import("../components/Footer/Footer"));

function MainPage() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Container>
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
