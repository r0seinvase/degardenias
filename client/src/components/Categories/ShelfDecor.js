import './Categories.css';
import ShelfDecorContainer from './ShelfDecorContainer'
import { useEffect, useState } from "react";


function ShelfDecor() {
    const [shelfDecor, setShelfDecor] = useState([]);

    useEffect(() => {
        fetch("/aisles/3")
            .then(res => res.json())
            .then(data => setShelfDecor(data.items));
    }, []);


    return (
        <div >
            <div >
                <h1 className="heading">  Shelf Decor </h1>
                <ShelfDecorContainer shelfDecor={shelfDecor} />
            </div>
        </div>
    );
}

export default ShelfDecor;