import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="mb-4">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/store" element={<Store />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </Container>
    </>
  );
}

export default App;
