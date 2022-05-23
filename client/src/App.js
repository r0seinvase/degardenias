import './App.css';
import About from './components/About/About';
import All from './components/Categories/All';
import Bedding from './components/Categories/Bedding';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Categories/Home';
import Kitchen from './components/Categories/Kitchen';
import NavBar from './components/NavBar/NavBar';
import NavBarTwo from './components/NavBarTwo/NavBarTwo';
import ShelfDecor from './components/Categories/ShelfDecor';
import TableDecor from './components/Categories/TableDecor';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <NavBarTwo/>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shelfdecor" element={<ShelfDecor />} />
        <Route exact path="/tabledecor" element={< TableDecor />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/bedding" element={<Bedding />} />
        <Route path="/all" element={<All />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
    </div>
  );
}

export default App;
