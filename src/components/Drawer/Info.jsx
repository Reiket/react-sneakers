import React from 'react';
import AppContext from '../../appContext';

const Info = ({title, description, image, setIsOrderComplete}) => {
    const {setOnOpenDrawer} = React.useContext(AppContext);
    const onCloseBtn = () => {
        setOnOpenDrawer(false);
        setIsOrderComplete(prev => !prev);
    }
    return (
        <div className="drawer__info info-drawer">
            <img src={image} alt="Cart" />
            <h1 className="info-drawer__title">{title}</h1>
            <div className="info-drawer__text">{description}</div>
            <button onClick={onCloseBtn} className="info-drawer__submit"><img src='/img/arrow-rotate.svg' alt='Arrow' />Назад</button>
        </div>
    );
}

export default Info;
