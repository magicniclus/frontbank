import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./component/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
