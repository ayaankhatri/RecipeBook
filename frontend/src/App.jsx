import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Recipe from "../pages/Recipe";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("all");

  return (
    <BrowserRouter>
      <div className={darkMode ? "dark app" : "app"}>
        <Header
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
          filter={filter}
          setFilter={setFilter}
        />

        <main>
          <Routes>
            <Route path="/" element={<Home filter={filter} />} />
            <Route path="/recipe/:id" element={<Recipe />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}