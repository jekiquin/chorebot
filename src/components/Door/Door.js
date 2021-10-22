
import PropTypes from 'prop-types';
import './Door.scss';
import doorImage from '../../assets/images/Door.png';

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