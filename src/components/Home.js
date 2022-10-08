import React from "react";
import AboutUs from "../components/AboutUs";
import UpcomExam from "../components/UpcomExam";
import CarouselSection from "../components/CarouselSection";
import NumberCountSec from "../components/NumberCountSec";
import Cards from "../components/Cards";
import DeloitteSection from "../components/DeloitteSection";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <AboutUs />
      <UpcomExam />
      <CarouselSection />
      <NumberCountSec />
      <Cards />
      <DeloitteSection />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Home;
