import { useState, useEffect } from 'react';
import Door from "../Door/Door";
import uniqid from 'uniqid';
import { initializeDoorsModel } from '../../utils/door-model';
import './Doors.scss';

const NUM_DOORS = 3;

function Doors({isGameActive, gameEnd}) {
    const [counter, setCounter] = useState(0);
    const [doorsModel, setDoorsModel]= useState(null);

    useEffect(() => {
        if(isGameActive){
            setDoorsModel(initializeDoorsModel(NUM_DOORS));
            const killerIndex = Math.floor(Math.random()*NUM_DOORS);
            console.log('killer index: ', killerIndex+1);
            setDoorsModel(currDoorsModel => currDoorsModel.map((currDoor, index) => {
                    return index === killerIndex
                    ? {...currDoor, isKiller: true}
                    : currDoor
                })
            )
            return;
        }
        setCounter(0);
    }, [isGameActive]);


    const handleOpenDoor = (selectedDoor) => {
        if (selectedDoor.disabled || selectedDoor.opened || !isGameActive) return;

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
        if (selectedDoor.isKiller) {
            gameEnd('lose');
            return;
        }
        if (counter === NUM_DOORS - 1) {
            gameEnd('win');
            return;
        }
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
        <>
            <div className='Doors'>
                {doorsModel && displayDoors(NUM_DOORS)}
            </div>
        </>
    )
}

export default Doors;