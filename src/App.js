import Home from "./main/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
