import { useState } from 'react';
import Door from "../Door/Door";
import uniqid from 'uniqid';
import { doorModel } from '../../utils/door-model';
import './Doors.scss';

const NUM_DOORS = 3;
function Doors() {

    const [doorsModel, setDoorsModel]= useState(
        Array(NUM_DOORS).fill(null).map((_, index) => doorModel(index))
    )

    const handleOpenDoor = (selectedDoor) => {
        if (selectedDoor.disabled) return;
        setDoorsModel(currDoorsModel => {
            return currDoorsModel.map(currDoorModel => {
                return selectedDoor.index === currDoorModel.index 
                ? {...currDoorModel, isOpening: true}
                : {...currDoorModel, disabled: true}
            })
        })
    }

    const doorOpened = (selectedDoor) => {
        setDoorsModel(currDoorsModel => {
            return currDoorsModel.map(currDoorModel => {
                return selectedDoor.index === currDoorModel.index 
                ? {...currDoorModel, isOpening: false, isOpened: true}
                : {...currDoorModel, disabled: false}
            })
        })
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

    console.log(doorsModel)

    return(
        <div className='Doors'>
            {displayDoors(NUM_DOORS)}
        </div>
    )
}

export default Doors;