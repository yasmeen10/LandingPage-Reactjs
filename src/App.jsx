import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Advantage from "./components/Advantage";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WhatOffers from "./components/WhatOffers";
import WhatOurClientSays from "./components/WhatOurClientSays";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <WhyUs />
        <Advantage />
        <WhatOffers />
        <WhatOurClientSays />
        <ContactUs />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
