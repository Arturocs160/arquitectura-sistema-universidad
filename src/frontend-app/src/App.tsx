import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Principal from "./views/principal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./views/inicio";
import Registro from "./views/registro";
import Entrega from "./views/entrega";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/estudiante" element={<Inicio />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/entrega" element={<Entrega />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;