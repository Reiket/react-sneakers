import React from "react";
import AppContext from "../appContext"
export const useCart = () => {
    const {cartItems, setOnOpenDrawer, setCartItems} = React.useContext(AppContext)
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

    return {cartItems, setOnOpenDrawer,setCartItems, totalPrice };
}