import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./common/header/Header";
import Component from "./pages/components/Component";
import { useComponent } from "./componentContext/ComponentContext";
import HigherOderComponent from "./common/higherOrderComponent/HigherOderComponent";
function App() {
  const { selectedComponent } = useComponent();
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Component />} />
          <Route
            path={`/${selectedComponent}`}
            element={<HigherOderComponent />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
