import { Route, Routes } from 'react-router-dom';
import Content from './components/Content/Content';
import Drawer from './components/Drawer/Drawer';
import React from 'react';
import Favorite from './components/Content/Favorite';
import AppContext from './appContext';
import Orders from './components/Content/Orders';
import { cardAPI } from './api/api';
import Header from "./components/Header";


const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true)
  const [onOpenDrawer, setOnOpenDrawer] = React.useState(false);
  React.useEffect(() => {
    async function fetchData () {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          cardAPI.getInCart(),
          cardAPI.getFavorites(),
          cardAPI.getCard(),
        ])
        setCartItems(cartResponse)
        setFavorites(favoritesResponse)
        setItems(itemsResponse)
        setIsLoading(false);
      } catch (err) {
        alert("Не вдалось запросити дані.Будь ласка спробуйте щераз")
        console.log(err)
      }
    }
    fetchData();
  }, [])
  const onSetCartItems = async (items) => {
    try {
      const fieldItem = cartItems.find((cartObj) => Number(cartObj.parentId) === Number(items.id));
      if(fieldItem) {
        setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(items.id)))
        await cardAPI.delInCart(fieldItem.id)
      } else {
        setCartItems(obj => [...obj, items]);
        const data = await cardAPI.postInCart(items)
        setCartItems(obj => obj.map(item => {
          if(item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            }
          }
          return item;
        }));
      }
    } catch (error) {
      alert("Не вдалось добавити в корзину! Попробуйте щераз!");
      console.log(error)
    }
  }
  const onRemoveItems = async (id) => {
    try {
      await cardAPI.delInCart(id)
      setCartItems(obj => obj.filter(item => Number(item.id) !== Number(id)));
    } catch (err) {
      alert("Не вдалось видалити! Попробуйте щераз")
      console.log(err)
    }
  }
  const onSetFavorite = async (items) => {
    console.log(favorites);
    console.log(items);
    const isItemInFavorites = favorites.some(
        (favObj) => Number(favObj.id) === Number(items.id)
    );
    console.log(isItemInFavorites);
    try {
      if (isItemInFavorites) {
        setFavorites((prev) =>
            prev.filter((item) => Number(item.id) !== Number(items.id))
        );
        await cardAPI.delFavorites(items.id);
      } else {
        const data = await cardAPI.postFavorites(items);
        setFavorites((prev) => [...prev, data]);
        console.log(data);
      }
    } catch (error) {
      alert("Не вдалось добавити! Попробуйте ще раз");
      console.error(error);
    }
  };
  const isItemAdded = (id) => {
    return cartItems.some((item) => Number(item.parentId) === Number(id))
  }
  return (
    <AppContext.Provider value={{cartItems, items, favorites, isItemAdded, setOnOpenDrawer, setCartItems, onSetFavorite}}>
      <div className="wrapper">
        <Drawer onRemove={onRemoveItems} items={cartItems} openDrawer={onOpenDrawer} />
        <Header/>
        <Routes>
          <Route path='/react-sneakers' element={<Content isLoading={isLoading} items={items} onSetCartItems={onSetCartItems} />}></Route>
          <Route path='favorite' element={<Favorite/>}></Route>
          <Route path='orders' element={<Orders/>}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

export default App;
