import React from 'react';
import DrawerCart from './DrawerCart';
import Info from './Info';
import { useCart } from '../../hooks/useCart';
import { cardAPI } from '../../api/api';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const Drawer = (props) => {
    const { cartItems, setCartItems, setOnOpenDrawer, totalPrice} = useCart();
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [orderId, serOrderId] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const data  = await cardAPI.postOrders(cartItems);
            setIsOrderComplete(prev => !prev);
            serOrderId(data.id);
            setCartItems([]);
            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await cardAPI.delInCart(item.id);
                await delay(1000);
            }
        } catch {
            alert("ERROR");
        }
        setIsLoading(false);
    }
    return (
        props.openDrawer && (
            <div className="drawer">
                <div className="drawer__body">
                    <div className="drawer__top">
                        <div className="drawer__inner">
                            <h1 className="drawer__title">Кошик</h1>
                            <button  onClick={() => setOnOpenDrawer(false)} style={{ width: 32 }} className='drawer__remove'><img src="/img/remove.svg" alt="Remove" /></button>
                        </div>
                    </div>
                    {
                        props.items.length ? (
                            <div className='drawer__content'>
                                <div className='drawer__carts'>
                                    {
                                        props.items.map((obj, id) => <DrawerCart key={id} onRemove={props.onRemove} id={obj.id} name={obj.name} price={obj.price} src={obj.image} />)
                                    }
                                </div>
                            </div>
                        ) : (
                            <Info setIsOrderComplete={setIsOrderComplete} title= {isOrderComplete ? "Замовлення оформлене" : "Кошик пустий"} description= {isOrderComplete ? `Ваше замовження №${orderId} Дякую за покупку! Слава Україні!` : "Добавте хоча би одну пару кросівок, щоб зробити замовлення"} image={isOrderComplete ? "/img/complete.jpg" : "/img/cart.png"} />
                        )
                    }
                    {
                        props.items.length && (
                            <div className="drawer__bottom">
                                <div className="drawer__items">
                                    <div className="drawer__text">Всього:</div>
                                    <div className="drawer__lines"></div>
                                    <div className="drawer__sum">{totalPrice} грн.</div>
                                </div>
                                <div className="drawer__items">
                                    <div className="drawer__text">Налог 5%:</div>
                                    <div className="drawer__lines"></div>
                                    <div className="drawer__sum">{Math.ceil(totalPrice / 100 * 5)} грн.</div>
                                </div>
                                <button disabled={isLoading} onClick={onClickOrder} className='drawer__submit'>Оформити замовлення<img src='/img/arrow.svg' alt='Arrow' /></button>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    );
}

export default Drawer;
