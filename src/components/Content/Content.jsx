import React from 'react';
import Card from './Card';
import {Loader} from "../Loader/Loader";
const Content = ({onSetFavorite, isLoading, onSetCartItems, items}) => {
    const [searchValue, setSearchValue] = React.useState('');
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    } 
    const renderItems = () => {
        const filteredItems = items.filter(obj =>
            obj.name.toLowerCase().includes(searchValue.toLowerCase()),
        );
        return filteredItems.map((card, id) => (
            <Card key={id} 
            items={card} 
            isPlus
            id={card.id}
            onSetFavorite={onSetFavorite}
            isLoading={isLoading}
            onSetCartItems={onSetCartItems}
            name={card.name} src={card.image} price = {card.price}
            />
        ))
    }
    return (
        <div className="content">
            <div className="content__container">
                <div className="content__body">
                    <h1 className="content__title">{searchValue ? `Пошук по запросу: ${searchValue}` : "Всі кросівки"}</h1>
                    <div className='content__search'>
                        <img className='content__img' src="img/search.svg" alt="Search" />
                        <input onChange={onChangeSearchInput} className='content__input' type="text" placeholder='Пошук....' />
                    </div>
                </div>
                <div className='content__sneakers sneakers'>
                    {
                        isLoading ? (
                            [...Array(12)].map((_, id) => (
                                <Loader key={id}/>
                            ))
                        ) : renderItems()
                    }
                </div> 
            </div>
        </div>
    );
}

export default Content;
