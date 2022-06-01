import KitchenContainerCards from './KitchenContainerCards'


function KitchenContainer({ kitchen }) {


    const cardInfo = kitchen.map((item) => <KitchenContainerCards key={item.id} item={item} />)

    return (
        <div className="card-grid">{cardInfo} </div>
    );
}

export default KitchenContainer;