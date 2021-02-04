import React from 'react'
import './subtotal.scss'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../StateProvider';
import { getBasketTotal } from '../../reducer'

export const Subtotal = () => {

    const [{ basket }, dispatch] = useStateValue()


    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
              This order contains a gift
            </small>
                    </>
                )}
                decimalScale={2}
                displayType={"text"}
                value={getBasketTotal(basket)} //total price
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Processed to Checkout</button>
        </div>
    )
}
