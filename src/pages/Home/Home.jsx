import React from "react";
import { Sidebar, Footer, HomeHeroSection } from "../../components";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <HomeHeroSection />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
