import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createDishes } from '../../services/dishesService';
const AddProduct = ({ show, handleClose, fetchDishes }) => {
    const [dishes, setDishes] = useState({
        dishesName: "",
        dishesPrice: "",
        dishesCategory: "",
        dishesImage: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDishes({ ...dishes, [name]: value })
        // spread js -> tao ra bo nho tam thoi
        //2 input , name : value
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            createDishes(dishes)
            handleClose();
            fetchDishes();
            setDishes({
                dishesName: "",
                dishesPrice: "",
                dishesCategory: "",
                dishesImage: "",
            })
        } catch (error) {
            console.log(error)
        }
        window.location.reload();
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Dishes</Modal.Title>
                </Modal.Header>
                {/* Chi code Form submit vao Modal.Body */}
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Dishes Name</Form.Label>
                            <Form.Control
                                type='text'
                                name='dishesName'
                                value={dishes.dishesName}
                                onChange={handleChange}
                                required
                                placeholder='Enter Dishes Name'
                            />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label>Dishes Price</Form.Label>
                            <Form.Control
                                type='text'
                                name='dishesPrice'
                                value={dishes.dishesPrice}
                                onChange={handleChange}
                                required
                                placeholder='Enter Dishes Price'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Dishes Category</Form.Label>
                            <Form.Control
                                type='text'
                                name='dishesCategory'
                                value={dishes.dishesCategory}
                                onChange={handleChange}
                                required
                                placeholder='Enter Dishes Category'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Dishes Image</Form.Label>
                            <Form.Control
                                type='text'
                                name='dishesImage'
                                value={dishes.dishesImage}
                                onChange={handleChange}
                                required
                                placeholder='Enter Dishes Image Link'
                            />
                        </Form.Group>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" type='submit'>
                            Add Dishes
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddProduct;