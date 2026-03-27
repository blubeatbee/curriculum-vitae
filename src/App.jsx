import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navigation from "./components/elements/Navigation/Navigation.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header id="header-bar" class>
        <Navigation />
      </header>
      <Outlet />
    </>
  );
}

export default App;
