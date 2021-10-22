import { useState, useEffect } from 'react';
import Door from "../Door/Door";
import uniqid from 'uniqid';
import { doorModel } from '../../utils/door-model';
import './Doors.scss';

const NUM_DOORS = 3;
function Doors() {
    const [isGameActive, setIsGameActive] = useState(true);
    const [counter, setCounter] = useState(0);
    const [winCount, setwinCount] = useState(0);
    const [winStreak, setWinStreak] = useState(0);

    const [doorsModel, setDoorsModel]= useState(
        Array(NUM_DOORS).fill(null).map((_, index) => doorModel(index))
    )

    useEffect(() => {
        const killerIndex = Math.floor(Math.random()*NUM_DOORS);
        setDoorsModel(currDoorsModel => currDoorsModel.map((currDoor, index) => {
                return index === killerIndex
                ? {...currDoor, isKiller: true}
                : currDoor
            })
        )
    }, [])

    const handleOpenDoor = (selectedDoor) => {
        if (selectedDoor.disabled) return;
        setDoorsModel(currDoorsModel => {
            return currDoorsModel.map(currDoorModel => {
                return selectedDoor.index === currDoorModel.index 
                ? {...currDoorModel, isOpening: true}
                : {...currDoorModel, disabled: true}
            })
        })
        setCounter(currCounter => currCounter + 1);
    }

    const doorOpened = (selectedDoor) => {
        setDoorsModel(currDoorsModel => {
            return currDoorsModel.map(currDoorModel => {
                return selectedDoor.index === currDoorModel.index 
                ? {...currDoorModel, isOpening: false, isOpened: true}
                : {...currDoorModel, disabled: false}
            })
        })
        if (selectedDoor.isKiller) console.log('dead');
        if (counter === NUM_DOORS - 1) console.log('win');
    }

    const displayDoors = () => {
        return doorsModel.map((doorModel) => {
          return <Door 
                    key={uniqid()} 
                    doorModel={doorModel} 
                    handleOpenDoor={handleOpenDoor}
                    doorOpened = {doorOpened}
                />
        })
    }

    return(
        <div className='Doors'>
            {displayDoors(NUM_DOORS)}
        </div>
    )
}

export default Doors;