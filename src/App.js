import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "./component/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import "./style/style.scss";
import ProfilePage from "./pages/ProfilePage";

function App() {

  const state = useSelector(state => state)
  return (
      <div className="App">
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/profile" element={isLogged(state.isLogin)}/> 
            <Route path="/*" element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
  );
}

function isLogged(logged){
  console.log(logged)
  if (logged) return <ProfilePage />
  return <HomePage />
}

export default App;
