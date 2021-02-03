import React from 'react'
import "./checkout.scss"
import { Subtotal } from './subtotal/Subtotal'


export const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://cdn.iphoneincanada.ca/wp-content/uploads/2018/04/amazon-prime-video.png"
                    className="checkout_ad" />

                <div className="">
                    <h2 className="checkout_title">
                        Your Shopping Basket
                </h2>
                    {/*  Basket item */}
                    {/*  Basket item */}
                    {/*  Basket item */}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            
            </div>
        </div>
    )
}
