import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import { ColorContext } from "./extras/ColorContext";
import UpMenu from "./components/UpMenu";
import Home from "./pages/HomePage";
import SimpleIntro from "./components/SimpleIntro";
import FaqList from "./components/FaqList";

function App() {
  const [color, setColor] = useState<string>("");
  const [point, setPoint] = useState<number>(0);
  const handleColorChange = (color: string) => {
    setColor(color);
  };
  const handlePointChange = (p: number) => {
    setPoint(p);
  };

  return (
    <div className="overflow-hidden">
      <UpMenu />

      <ColorContext.Provider
        value={{
          color: color,
          point: point,
          setPoint: handlePointChange,
          setColor: handleColorChange,
        }}
      >
        <SimpleIntro
          tag="FREE TOOL"
          heading="Whois Domain Lookup"
          subtitle="Get Detail Whois Information of Public Domain Names"
          btntext="Search Domains"
        />
        <Home />
      </ColorContext.Provider>
      <FaqList />
      <Footer />
    </div>
  );
}

export default App;
