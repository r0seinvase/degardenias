import { Route, Routes } from "react-router-dom";
import './App.css';
import About from './components/About/About';
import All from './components/Categories/All';
import Bedding from './components/Categories/Bedding';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Kitchen from './components/Categories/Kitchen';
import NavBar from './components/NavBar/NavBar';
import NavBarTwo from './components/NavBarTwo/NavBarTwo';
import ShelfDecor from './components/Categories/ShelfDecor';
import SignUp from './components/LogIn/SignUp';
import TableDecor from './components/Categories/TableDecor';
import { useState, useEffect } from "react";

function App() {

  const [currentUser, setCurrentUser] = useState();
  const [itemInfo, setItemInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then(res => res.json())
      .then(data => setItemInfo(data))
  }, []);


  return (
    <div className="app">
      <NavBarTwo setCurrentUser={setCurrentUser} currentUser={currentUser} />
      <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
      <Routes>
        <Route exact path="/" element={<Home currentUser={currentUser} />} />
        <Route exact path="/shelfdecor" element={<ShelfDecor setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route exact path="/tabledecor" element={< TableDecor
          setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/kitchen" element={<Kitchen setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/bedding" element={<Bedding setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/all" element={<All setCurrentUser={setCurrentUser} currentUser={currentUser} itemInfo={itemInfo} />} />
        <Route path="/about" element={<About setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/checkout" element={<Checkout setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/login" element={<LogIn setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/signup" element={<SignUp setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
