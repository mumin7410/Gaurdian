import './App.css';
import History from './pages/history';
import Purpose from './components/History_components/Purpose_section';
import Footer from './components/Global_components/Footer';
import Standard_section from "./components/History_components/Standard_section";
import Quote_section from "./components/History_components/Quote_section";
import Navbar from "./components/Global_components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <History />
      <Purpose />
      <Standard_section/>
      <Quote_section/>
      <Footer />
    </>
  );
}

export default App;
