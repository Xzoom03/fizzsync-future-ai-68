
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import NotFound from "./pages/NotFound";
import AbstractDecoration from "./components/AbstractDecoration";
import TextureOverlay from "./components/TextureOverlay";
import ChatbotWidget from "./components/ChatbotWidget";

function App() {
  return (
    <>
      <AbstractDecoration />
      <TextureOverlay />
      <ChatbotWidget />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
