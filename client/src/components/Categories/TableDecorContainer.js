import TableDecorContainerCards from './TableDecorContainerCards'


function TableDecorContainer({ tableDecor }) {


    const cardInfo = tableDecor.map((item) => <TableDecorContainerCards key={item.id} item={item} />)

    return (
        <div className="card-grid">{cardInfo} </div>
    );
}

export default TableDecorContainer;