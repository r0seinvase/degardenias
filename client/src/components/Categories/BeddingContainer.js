import BeddingContainerCards from './BeddingContainerCards'


function BeddingContainer({ bedding }) {


    const cardInfo = bedding.map((item) => <BeddingContainerCards key={item.id} item={item} />)

    return (
        <div className="card-grid">{cardInfo} </div>
    );
}

export default BeddingContainer;