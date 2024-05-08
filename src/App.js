import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/layout/navbar";
import "./styles/App.css";
import "./styles/GlobalVars.css";
import ImpressumPage from "./pages/impressum-page";
import Content from "./components/layout/content";
import AboutMePage from "./pages/aboutme-page";
import Footer from "./components/layout/footer";
import ToDoPage from "./pages/todo-page/";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signup-page";
import ProfilePage from "./pages/profile";

function App() {
  return (
    <>
      <NavigationBar />
      <Content>
        <Routes>
          <Route path="/" element={<ToDoPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Content>

      <Footer />
    </>
  );
}

export default App;
