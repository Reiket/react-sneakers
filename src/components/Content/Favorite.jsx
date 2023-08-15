import React from 'react';
import Card from './Card';
import AppContext from '../../appContext';

const Favorite = () => {
    const {favorites} = React.useContext(AppContext);
    return (
        <div className="content">
            <div className="content__container">
                <div className="content__body">
                    <h1 className="content__title">Мої закладки</h1>
                </div>
                <div className='content__sneakers sneakers'>
                    {
                        favorites.map((obj, id) => <Card items={obj} isPlus key={id} name={obj.name} favorited={true} price={obj.price} src={obj.image} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Favorite;
