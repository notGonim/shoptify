import React from 'react'
import './subtotal.scss'
import CurrencyFormat from 'react-currency-format';

export const Subtotal = () => {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
              This order contains a gift
            </small>
                    </>
                )}
                decimalScale={2}
                displayType={"text"}
                value={0} //total price
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Processed to Checkout</button>
        </div>
    )
}
