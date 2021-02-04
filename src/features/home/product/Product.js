import React from 'react'
import { useStateValue } from '../../../StateProvider'
import './product.scss'
export const Product = ({ id, title, image, price, description, rating }) => {

    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                description: description,
            },
        });
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src={image}
                alt="" srcset="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}
