import './Categories.css';
import KitchenContainer from './KitchenContainer'
import { useEffect, useState } from "react";


function Kitchen() {
  const [kitchen, setKitchen] = useState([]);

  useEffect(() => {
    fetch("/aisles/2")
      .then(res => res.json())
      .then(data => setKitchen(data.items));
  }, []);


  return (
    <div >
      <div >
        <h1 className="heading">  Kitchen </h1>
        <KitchenContainer kitchen={kitchen} />
      </div>
    </div>
  );
}

export default Kitchen;