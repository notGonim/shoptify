import React from 'react'
import { useStateValue } from '../../StateProvider'
import "./checkout.scss"
import { CheckoutProduct } from './checkoutProduct/CheckoutProduct'
import { Subtotal } from './subtotal/Subtotal'


export const Checkout = () => {
    const [{ basket,user }, dispatch] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://cdn.iphoneincanada.ca/wp-content/uploads/2018/04/amazon-prime-video.png"
                    className="checkout_ad" />

                <div className="">
                    <h3>Hello,{user?.email}</h3>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                </h2>
                    {basket.map(item => (
                        <CheckoutProduct id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating} />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
// think about the system design
            </div>
        </div>
    )
}
