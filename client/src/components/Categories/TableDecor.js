import './Categories.css';
import TableDecorContainer from './TableDecorContainer'
import { useEffect, useState } from "react";


function TableDecor() {
  const [tableDecor, setTableDecor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/aisles/4")
      .then(res => res.json())
      .then(data => setTableDecor(data.items));
  }, []);

  console.log(tableDecor)

  return (
    <div >
      <div >
        <h1 className="heading">  Table Decor </h1>
        <TableDecorContainer tableDecor={tableDecor} />
      </div>
    </div>
  );
}

export default TableDecor;