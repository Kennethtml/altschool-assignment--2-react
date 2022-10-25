import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutComponent from "./components/abotComponenet";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";
import Error from "./pages/Error";
import Mission from "./pages/Mission";

function App() {
  return (
    <div className="app">
      <Nav />

      <Routes>
        <Route index element={<Home />} />
        <Route path="about/*" element={<AboutComponent />} />

        <Route path="users" element={<Users />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
