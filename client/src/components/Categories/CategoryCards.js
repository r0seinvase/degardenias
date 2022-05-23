import Bedding from "./Bedding"
import Home from "./Home"
import Kitchen from "./Kitchen"
import ShelfDecor from "./ShelfDecor"
import TableDecor from './TableDecor';

function CategoryCards(){
    return (
        <div>
            <Bedding/>
            <Home/>
            <Kitchen/>
            <ShelfDecor/>
            <TableDecor/>
        </div>
    )
}
export default CategoryCards;