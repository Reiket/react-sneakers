import axios from "axios";


export const cardAPI = {
    getInCart() {
        return axios.get('https://6457bc1d1a4c152cf989193b.mockapi.io/cart')
        .then(response => response.data)
    },
    getFavorites() {
        return axios.get('https://6457bc1d1a4c152cf989193b.mockapi.io/favorites')
        .then(response => response.data)
    },
    getCard() {
        return axios.get('https://6448113c7bb84f5a3e517272.mockapi.io/sneaker-shop')
        .then(response => response.data)
    },
    getOrders() {
        return axios.get('https://645e60678d08100293fe0ba5.mockapi.io/orders')
        .then(response => response.data)
    },
    delInCart(id) {
        return axios.delete(`https://6457bc1d1a4c152cf989193b.mockapi.io/cart/${id}`)
        .then(response => response.data)
    },
    delFavorites(id) {
        return  axios.delete(`https://6457bc1d1a4c152cf989193b.mockapi.io/favorites/${id}`)
        .then(response => response.data)
    },
    postInCart(items) {
        return axios.post('https://6457bc1d1a4c152cf989193b.mockapi.io/cart', items)
        .then(response => response.data)
    },
    postFavorites(items) {
        return axios.post('https://6457bc1d1a4c152cf989193b.mockapi.io/favorites', items)
        .then(response => response.data)
    },
    postOrders(cartItems) {
        return  axios.post('https://645e60678d08100293fe0ba5.mockapi.io/orders', {
            items: cartItems,
        }).then(response => response.data)
    },
}
