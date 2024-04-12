import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./component/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={"404 Page not found"} />
      </Routes>
    </>
  );
}

export default App;
