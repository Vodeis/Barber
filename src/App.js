import Header from "./components/Header/Header";
import Main from "./sections/Main/Main";
import AboutUs from "./sections/AboutUs/AboutUs";
import ContactUs from "./sections/ContactUs/ContactUs";
import Learning from "./sections/Learning/Learning";
import Offering from "./sections/Offering/Offering";
import Masters from "./sections/Masters/Masters";

import { useEffect } from "react";

function App() {
  function smoothScroll() {
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute("href").substr(1);

        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  useEffect(() => smoothScroll(), []);

  return (
    <>
      <Header />
      <Main />
      <AboutUs />
      <Offering />
      <ContactUs />
      <Learning />
      <Masters />
    </>
  );
}

export default App;
