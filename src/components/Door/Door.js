
import PropTypes from 'prop-types';
import './Door.scss';
import doorImage from '../../assets/images/Door.png';
import killerImage from '../../assets/images/killer.png';
import safeImage from '../../assets/images/safebunny.png';
import doorBg from '../../assets/images/Doorbg.png';

function Door({doorModel, handleOpenDoor, doorOpened}) {
    const {isOpening, isOpened, isKiller} = doorModel;

    const doorClassName = () => {
        let outputClass = 'Door__img';
        if (isOpening) {
            outputClass += ` ${outputClass}--opening`;
        }
        if (isOpened) {
            outputClass += ` ${outputClass}--opened`;
        }
        return outputClass;
    };


    return(
        <div className='Door__frame'>
            <img 
                src={doorImage} 
                alt='door' 
                className={doorClassName()} 
                onClick={() => handleOpenDoor(doorModel)}
                onAnimationEnd={() => doorOpened(doorModel)} 
            />
            <img 
                src={isKiller ? killerImage : safeImage} 
                alt='' 
                className='Door__bunny' 
            />
            <img 
                src={doorBg} 
                alt='door background' 
                className='Door__background'
            />
        </div>
        
    )
}

Door.propTypes = {
    isOpened: PropTypes.bool.isRequired,
}

Door.defaultProps = {
    isOpened: false,
}

export default Door;