import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./component/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import { Provider } from "react-redux";

import "./style/style.scss";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/*" element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
