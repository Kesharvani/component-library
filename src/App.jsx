import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./common/header/Header";
import Component from "./pages/components/Component";
function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Component />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
