import React from 'react'
import { useStateValue } from '../../../StateProvider'
import './checkoutProduct.scss'
export const CheckoutProduct = ({ id, title, image, price, rating }) => {

    const [{ basket }, dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }
    return (
        <div className="checkout_product">
            <img src={image} className="checkout_product__image" />
            <div className="checkout_product__info">
                <p className="checkout_product__title">{title}</p>
                <p className="checkout_product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout_product__rating">
                    {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}
