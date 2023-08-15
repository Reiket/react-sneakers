import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
const Header = () => {
    const {setOnOpenDrawer, totalPrice} = useCart();
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__body">
                    <div className="header__logo logo-header">
                        <a href='' className="logo-header__img">
                            <img src="img/logo.png" alt="Logo" />
                        </a>
                        <div className="logo-header__content">
                                <h3 className="logo-header__title">REACT SNEAKERS</h3>
                                <div className="logo-header__text">Магазин найкращих кросівок</div>
                        </div>
                    </div>
                    <ul className="header__content">
                        <li onClick={() => setOnOpenDrawer(true)} className='header__cart'>  
                            <img className='header__svg' src="img/cart.svg" alt="Cart" />
                            <div className="header__price ">{totalPrice}    грн.</div>
                        </li>
                        <li className='header__favorite'>
                            <NavLink to={'favorite'}>
                                <img className='header__svg' src="img/heart.svg" alt="Favorite" />
                            </NavLink>
                        </li>
                        <li className='header__users'>
                            <NavLink to={'orders'}>
                                <img className='header__svg' src="img/users.svg" alt="Users" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
