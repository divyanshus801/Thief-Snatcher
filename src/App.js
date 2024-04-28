import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Index from "./pages/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Result from "./pages/Result";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/game" exact element={<Index />} />
          <Route path="/result" exact element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
