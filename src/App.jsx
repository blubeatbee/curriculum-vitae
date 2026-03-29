import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header.jsx";
import PageHome from "./pages/PageHome.jsx";
import PagePortfolio from "./pages/PagePortfolio.jsx";
import PageContact from "./pages/PageContact.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<PageHome />}></Route>
        <Route exact path="/portfolio" element={<PagePortfolio />}></Route>
        <Route exact path="/contact" element={<PageContact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
