import React from 'react';
import './ReviowProdack.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
const ReviowProdack = ({ prodack, deletHandels }) => {
    const { img, name, price, shipping, id } = prodack
    return (
        <div className='singalCart'>
            <div className='img-data'>
                <div>
                    <img src={img} alt="" className='singal-img' />
                </div>
                <div className='cart-data'>
                    <p className='cart-name'>{name}</p>
                    <p>Price : <span className='cart-color'>${price}</span></p>
                    <p>Shipping Charge : <span className='cart-color'>${shipping}</span></p>
                </div>
            </div>
            <button onClick={() => deletHandels(id)} className='btn-delet'>
                <FontAwesomeIcon icon={faTrashCan} className='delet-font' />
            </button>
        </div>
    );
};

export default ReviowProdack;