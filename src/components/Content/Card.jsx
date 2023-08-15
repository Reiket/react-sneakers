import React from 'react';
import AppContext from '../../appContext';
const Card = ({ onSetCartItems, items,  name, price, src, id, isPlus, favorited }) => {
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const state = React.useContext(AppContext);
    const obj = {id, parentId: id, name, price, image: src};
    const onClickAddBtn = () => {
        onSetCartItems(obj);
    }
    const onClickFavBtn = () => {
        setIsFavorite(prev => !prev);
        state.onSetFavorite(items);
    }
    return (
        <div className='sneakers__cards'>
            <div className='sneakers__favorite'>
                <button onClick={onClickFavBtn} className="sneakers__unliked">
                    <img src={isFavorite ? "/img/heart-liked.svg" : "/img/heart.svg"} alt="" />
                </button>
            </div>
            <a href="/"><img className='sneakers__img' width={133} height={112} src={src} alt="" /></a>
            <h5 className='sneakers__title'>{name}</h5>
            <div className='sneakers__info'>
                <div className='sneakers__price'>
                    <span>Ціна:</span>
                    <b>{price} грн.</b>
                </div>
                {isPlus && <button className={state.isItemAdded(id) ? 'sneakers__button sneakers__remove' : 'sneakers__button sneakers__add'} onClick={onClickAddBtn}><img src={state.isItemAdded(id) ? "/img/check.svg" : "/img/plus.svg"} alt="" /></button>}
            </div>
        </div>
    );
}

export default Card;
