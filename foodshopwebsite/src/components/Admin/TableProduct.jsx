import React, { useCallback, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getAllDishes } from '../../services/dishesService';
import { Button } from 'react-bootstrap';
import AddProduct from './AddProduct';
const TableProduct = () => {
    const [data, setData] = useState([]);
    
    const [showAddModal,setShowAddModal] = useState(false)

    const fetchDishes = async () => {
        const result = await getAllDishes();
        setData(result);
    }
    useEffect(() => {
        fetchDishes();
    }, [])

    return (
        <div>
            <div>
                <Button onClick={() => setShowAddModal(true)}>Add Dishes</Button>
                <Table striped bordered hover>
                    <thead className='w-100'>
                        <tr>
                            <th>ID</th>
                            <th>Dishes</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='w-100'>
                        {   
                            data.map(item => (

                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.dishesName}</td>
                                    <td>{item.dishesPrice}</td>
                                    <td>{item.dishesCategory}</td>
                                    <td><img style={{width:"100px"}} src={item.dishesImage}></img></td>
                                    <td>
                                        <button>Add</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>

                            ))

                        }
                    </tbody>
                </Table>
            <AddProduct show={showAddModal} handleClose={() =>setShowAddModal(false)} fetchDishes={fetchDishes}/>
            </div>
        </div>
    );
};

export default TableProduct;