import { useState } from "react";
import "./App.css";
import { images } from "./assets/assets";

function App() {
  const [showMainContainer, setShowMainContainer] = useState(true);
  return (
    <main>
      <header>
        <span id="headerLogo">
          <img src={images.moveIT} alt="" />
        </span>
        <span id="spacer"></span>
        <span id="toggler">
          <img src={""} alt="" />
        </span>
      </header>
      <section className="welcomeSection">
        <div className="welcomeSVG">
          <iframe src="https://lottie.host/embed/deae80b7-8765-4caf-b077-eaf59798102c/ahgp51RQSc.json"></iframe>
        </div>

        <div className="signin">
          <form action="post">
            <label htmlFor="#">
              Username
              <input type="text" />
            </label>
            <label htmlFor="#">
              Password
              <input type="password" />
              <p>Forgot Password</p>
            </label>
            <button>SIGN IN</button>
          </form>
        </div>
      </section>

      {showMainContainer && <></>}
    </main>
  );
}

export default App;
