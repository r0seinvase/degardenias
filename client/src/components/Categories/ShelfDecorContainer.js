import ShelfDecorContainerCards from './ShelfDecorContainerCards'


function ShelfDecorContainer({ shelfDecor }) {


    const cardInfo = shelfDecor.map((item) => <ShelfDecorContainerCards key={item.id} item={item} />)

    return (
        <div className="card-grid">{cardInfo} </div>
    );
}

export default ShelfDecorContainer;