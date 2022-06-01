import './Categories.css';
import AllContainer from './AllContainer'
function All({itemInfo}) {
  return (
    <div >
      <div >
            <h1 className="heading">  All </h1>
            <AllContainer itemInfo={itemInfo}/>
        </div>
    </div>
  );
}

export default All;