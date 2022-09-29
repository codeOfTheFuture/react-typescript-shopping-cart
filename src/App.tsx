import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <div className="overflow-x-hidden h-screen">
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
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
