import React, { useContext } from 'react';
import Button from '../button/button.component';
import { AddtocartContext } from '../../contexts/addtocart.context';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {

    const { cartContent } = useContext(AddtocartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartContent}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;