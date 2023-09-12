import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./common/header/Header";
function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
