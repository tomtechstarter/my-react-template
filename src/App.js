import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/layout/navbar";
import "./styles/App.css";
import "./styles/GlobalVars.css";
import HomePage from "./pages/home-page";
import ImpressumPage from "./pages/impressum-page";
import Content from "./components/layout/content";
import AboutMePage from "./pages/aboutme-page";
import Footer from "./components/layout/footer";
import InfoPage from "./pages/Infopage/Infopage";

// ...

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="/info" element={<InfoPage />} /> {/* Neue Route */}
        </Routes>
      </Content>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
