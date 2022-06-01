import AllContainerCards from './AllContainerCards'



function AllContainer({ itemInfo }) {


    const cardInfo = itemInfo.map((item) => <AllContainerCards key={item.id} item={item} />)



    console.log(cardInfo);

    return (
        <div className="card-grid">{cardInfo} </div>
    );
}

export default AllContainer;