import React, { useEffect, useState } from 'react';
import '../styles/DishesMenu.css';
import { getAllDishes } from '../services/dishesService';

const DishesMenu = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getAllDishes().then(res => {
            setData(res)
        })
    }, [])
    return (
        <div className='dishes-container'>
            {
                data.map(dish => (
                    <div key={dish.id} className=' text-center dishes-menu-card'>
                        <img src={dish.dishesImage} alt="food" />
                        <h3 className='pt-3 text-danger' >${dish.dishesPrice}</h3>
                        <h4 className='pb-3'>{dish.dishesName}</h4>
                        <p className='ps-5 pe-5'>{dish.dishesCategory}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default DishesMenu;