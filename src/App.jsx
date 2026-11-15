import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WhatsappFlutuante from "./components/WhatsappFlutuante.jsx";
import FaixaDemo from "./components/FaixaDemo.jsx";
import Home from "./sections/home.jsx";
import Proced from "./sections/Procedimentos.jsx";
import Sobre from "./sections/Sobre.jsx";
import Faq from "./sections/Faq.jsx";
import Localizacao from "./sections/Localizacao.jsx";
import Contato from "./sections/contato.jsx";
function App() {
  return (
    <>
        <FaixaDemo />
    <Header />
    <Home />
    <Proced />
    <Sobre />
    <Faq />
    <Localizacao />
    <Contato />
    <Footer />
    <WhatsappFlutuante />
    </>
  )
}

export default App
