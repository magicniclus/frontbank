import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import "./style/style.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
      <footer></footer>
    </div>
  );
}

export default App;
