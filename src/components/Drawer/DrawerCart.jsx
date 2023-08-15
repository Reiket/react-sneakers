import React from 'react';

const DrawerCart = (props) => {
    return (
        <div className="drawer__cart">
            <div className="drawer__img">
                <img src={props.src} alt="Cart-Image" />
            </div>
            <div className="drawer__content">
                <div className="drawer__name">{props.name}</div>
                <div className="drawer__price">{props.price} грн.</div>
            </div>
            <button style={{ width: 40 }} className='drawer__remove'  onClick={() => props.onRemove(props.id)}><img src="/img/remove.svg" alt="Remove" /></button>
        </div>
    );
}

export default DrawerCart;
