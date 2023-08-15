import React from 'react';
import Card from './Card';
import { cardAPI } from '../../api/api';
import {Loader} from "../Loader/Loader";
const Orders = () => {
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading]= React.useState(true);
    React.useEffect(() => {
        ( async () => {
            try {
                const data = await cardAPI.getOrders(); 
                setOrders(data.map(obj => obj.items).flat());
                setIsLoading(false);
            } catch (err) {
                console.log("Error");
            }
        })()
    }, [])

    return (
        <div className="content">
            <div className="content__container">
                <div className="content__body">
                    <h1 className="content__title">Мої замовлення</h1>
                </div>
                <div className='content__sneakers sneakers'>
                    {
                        isLoading ? (
                            [...Array(8)].map(() => (
                                <Loader/>
                            ))
                        ) : orders.map((obj, id) => <Card items={obj} key={id} name={obj.name} favorited={true} price={obj.price} src={obj.image} isPlus={false}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Orders;
