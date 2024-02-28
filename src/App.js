import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import useThrottle from "./useThrottle";

function App() {
  const [windowsize, setWindowsize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handelResize = () => {
    setWindowsize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const throttledHandleResize = useThrottle(handelResize, 5000);

  useEffect(() => {
    window.addEventListener("resize", throttledHandleResize);

    return () => {
      window.removeEventListener("resize", throttledHandleResize);
    };
  }, []);

  return (
    <div className="App">
      <div>
        window size is {windowsize.width}*{windowsize.height}
      </div>
    </div>
  );
}

export default App;
