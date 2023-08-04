import React, { useState, useEffect, useRef } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Tiers } from "./components/tiers";
import { Wallet } from "./components/wallet";
import { Private } from "./components/private";
import { NFT } from "./components/nft";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import backgroundVideo from "./data/Just Video.mp4";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <video playsinline loop muted autoPlay autobuffer controls = '' id="myVideo">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Tiers data={landingPageData.Tiers} />
      <Features data={landingPageData.Features} />
      <Wallet data={landingPageData.Wallet} />
      <Private data={landingPageData.Private} />
      <NFT data={landingPageData.NFT} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
