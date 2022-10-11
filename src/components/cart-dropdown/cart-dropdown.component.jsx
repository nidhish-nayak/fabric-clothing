import React, { useContext } from 'react';
import { AddtocartContext } from '../../contexts/addtocart.context';
import Button from '../button/button.component';
import CartContent from '../cart-content/cart-content.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {

    const { cartContent } = useContext(AddtocartContext);

    return (
        <div className='cart-dropdown-container'>
            <CartContent value={cartContent} />
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;