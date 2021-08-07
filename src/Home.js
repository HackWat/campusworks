import React from "react";
import Navbar from "./components/allpages/Navbar";
import Banner from "./components/homepage/Banner";
import Content from "./components/homepage/Content";
import Founders from "./components/homepage/Founders";
import Footer from "./components/allpages/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Content />
      <Founders />
      <Footer />
    </div>
  );
}

export default Home;
