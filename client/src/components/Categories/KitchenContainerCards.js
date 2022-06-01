import { FaShoppingBag, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

function KitchenContainerCards({ item }) {

    const [available, setAvailable] = useState(item.sold ? false : true);


    return (
        <div>
            <div className="card">
                <img className="image" src={item.picture} alt={item.name} />
                <h4 className="card-name">{item.name}</h4>
                <p className="card-type">{item.object_type} from the {item.decade} </p>
                <p className="card-price"> ${item.price}0 </p>
                <p></p>

                {available ? (
                    <h1 className="card-status-true">In Stock <button className="card-basket">< FaShoppingBag /> </button></h1>
                ) : (
                    <h1 className="card-status-false">Out of Stock</h1>
                )}
                {/* {addToCart ? ( */}
                {/* <button className="card-basket"> < FaCheckCircle /> </button> */}
                {/* ) : ( */}

                {/* )} */}
                {/* </div> */}
            </div>
        </div>
    );
}

export default KitchenContainerCards;