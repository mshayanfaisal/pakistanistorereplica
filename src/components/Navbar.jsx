import { useState, useEffect } from "react";
import DesktopNavbar from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";

function Navbar() {
  const [isMobileView, setIsMobileView] = useState(false);
  const checkScreenSize = () => {
    setIsMobileView(window.innerWidth < 992);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return isMobileView ? <MobileNavbar /> : <DesktopNavbar />;
}

export default Navbar;
