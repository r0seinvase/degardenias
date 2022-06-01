import './Categories.css';
import BeddingContainer from './BeddingContainer'
import { useEffect, useState } from "react";


function Bedding() {
  const [bedding, setBedding] = useState([]);

  useEffect(() => {
    fetch("/aisles/1")
      .then(res => res.json())
      .then(data => setBedding(data.items));
  }, []);


  return (
    <div >
      <div >
        <h1 className="heading">  Bedding </h1>
        <BeddingContainer bedding={bedding} />
      </div>
    </div>
  );
}

export default Bedding;