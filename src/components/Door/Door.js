import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Door.scss';
import doorImage from '../../assets/images/Door.png';

function Door({isOpened}) {

    useEffect(() => {
        const img = new Image();
        img.src = doorImage;
    }, [])

    const doorClassName = () => `Door__img ${isOpened ? 'Door__img--opened' : ''}`;

    return(
        <div className='Door__frame'>
            <img className={doorClassName()} src={doorImage} alt='door' />
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