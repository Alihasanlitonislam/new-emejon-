import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviowProdack from '../ReviowProdack/ReviowProdack';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Orders = () => {
    const lodersData = useLoaderData()
    const [cart, setCart] = useState(lodersData)
    // simplay cart data delet 
    const deletHandels = (id) => {
        const reming = cart.filter(prodack => prodack.id !== id)
        setCart(reming)
        removeFromDb(id)
    }
    // all cart data delet button
    const clearCartData = () => {
        setCart([]);
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
            <div className='reviow-prodack'>
                {
                    cart.map(prodack => <ReviowProdack
                        key={prodack.id}
                        prodack={prodack}
                        deletHandels={deletHandels}
                    ></ReviowProdack>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} clearCartData={clearCartData}>
                    <Link to='/order' className='link-order'>
                        <button className='order-btn'>
                            <span>Proceed Checkout</span>
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;