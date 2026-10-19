import Header from './Header';
import Nav from './Nav';
import Section from './Section';
import Footer from './Footer';
import './Ejercicio1.css'; // Crearemos este archivo

const Ejercicio1 = () => {
  return (
    <div className="layout-container">
      <Header />
      <Nav />
      <Section />
      <Footer />
    </div>
  );
};
export default Ejercicio1;