import Navbar from "./components/Navbar";
import Home from "./views/Home";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ImageModal from "./components/ImageModal";
import Sidebar from "./views/Sidebar";
import ContactPage from "./views/ContactPage";
import Galeria from "./views/Galeria";
import Footer from "./components/Footer";
import Noticias from "./views/Noticias";
import Quilicura from "./views/Quilicura";
import Valle from "./views/Valle";
import Pudahuel from "./views/Pudahuel"
import Polivalente from "./views/Polivalente"

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setIsModalOpen(true);
    }, []);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
                <div className="main">
            <Navbar />
                <Sidebar/>
                {isModalOpen && (
                    <ImageModal isOpen={isModalOpen} onClose={closeModal} />
                    )}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacto" element={<ContactPage />} />
                    <Route path="/galeria" element={<Galeria />} />
                    <Route path="/noticias" element={<Noticias/>} />
                    <Route path="/valle" element={<Valle />} />
                    <Route path="/quilicura" element={<Quilicura />} />
                    <Route path="/polivalente" element={<Polivalente />} />
                    <Route path="/pudahuel" element={<Pudahuel />} />
                </Routes>
                <Footer />
             </div> 
    );
}

export default App;
