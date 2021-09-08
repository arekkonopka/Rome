import { useState, useEffect } from "react";
import Navbar from "./components.js/Navbar";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components.js/Home";
import About from "./components.js/About";
import Start from "./components.js/Start";
import History from "./components.js/History/History";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [active, setActive] = useState(false);
  const [breakpoint, setBreakpoint] = useState(window.innerWidth);

  const onClickButton = () => {
    setActive(!active);
  };
  const updateWidthAndHeight = () => {
    setBreakpoint(window.innerWidth);
  };

  const isClickedActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    if (breakpoint >= 640) {
      setActive(false);
    }
    return () => window.removeEventListener("resieze", updateWidthAndHeight);
  });

  return (
    <motion.div
      // initial={{ x: 300, opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // exit={{ x: -300, opacity: 0 }}
      className="App relative font-sans"
    >
      <Router>
        <Navbar active={active} isClickedActive={isClickedActive} />
        {breakpoint <= 640 ? (
          <MenuIcon
            onClick={onClickButton}
            className="fixed top-3 left-3 z-20 cursor-pointer sm:z-0 sm:text-red-400"
          />
        ) : (
          ""
        )}
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/" exact>
              <Start />
            </Route>
            <Route component={Home} path="/home" />
            <Route path="/about">
              <About active={active} />
            </Route>
            <Route path="/history">
              <History active={active}></History>
            </Route>
          </Switch>
        </AnimatePresence>
      </Router>
    </motion.div>
  );
}

export default App;
