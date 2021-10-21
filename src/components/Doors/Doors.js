import Door from "../Door/Door";
import uniqid from 'uniqid';

const NUM_DOORS = 3;
function Doors() {

    const displayDoors = (numOfDoors) => {
        return Array(numOfDoors).fill(null).map(() => {
          return <Door key={uniqid()} />
        })
    }


    return(
        <div className='Doors'>
            {displayDoors(NUM_DOORS)}
        </div>
    )
}

export default Doors;