import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/allpages/Navbar";
import Banner from "./components/homepage/Banner";
import Content from "./components/homepage/Content";
import Founders from "./components/homepage/Founders";
import Footer from "./components/allpages/Footer";
import Joblistings from "./components/joblistings/Joblistings";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Banner />
      <Content />
      <Founders />
      <Footer /> */}
      <Joblistings />
    </div>
  );
}

export default App;
