import React, { useEffect, useState } from "react";
import net from "./netflix-82871.png";
import elon from "./PngItem_4821530.png";
import "./Nav.css";

function Navbar() {
  const [show, setscroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setscroll(true);
      } else {
        setscroll(false);
      }
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={net} alt="nteflix logo" />
      <img className="nav_avatar" src={elon} alt="avatar logo" />
    </div>
  );
}

export default Navbar;
