import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Layout/ShareLayout/Header/Header";
import Footer from "./Layout/ShareLayout/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="md:ml-6 md:mr-6">
      <Header />
      <div className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
