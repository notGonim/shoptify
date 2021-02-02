import React from 'react'
import './home.scss'
import { Product } from './product/Product'

export const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/vivo/2021/Jan/BAU/gw/D20071665_WL_VIVO_BAU_Jan21_tallhero_1500x600._CB661014126_.jpg"
                    alt="" className="home_img" />

                <div className="home_row">
                    <Product id="123" title="Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
                        image="https://m.media-amazon.com/images/I/41OQms4W6UL.__AC_SY200_.jpg"
                        price={77.1} rating={5} />
                    <Product id="123dsd" title="XXXXXX"
                        image="https://m.media-amazon.com/images/I/41AYsoOVQwL.__AC_SY200_.jpg"
                        price={15.9} rating={2} />
                </div>
                <div className="home_row">
                    <Product id="123asda" title="Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
                        image="https://m.media-amazon.com/images/I/41OQms4W6UL.__AC_SY200_.jpg"
                        price={77.1} rating={5} />
                    <Product title="XXXXXX" id="123ewrqer"
                        image="https://m.media-amazon.com/images/I/41AYsoOVQwL.__AC_SY200_.jpg"
                        price={15.9} rating={2} />
                    <Product title="XXXXXXXX" id="1werewr23"
                        image="https://m.media-amazon.com/images/I/41jr5nrfFoL.__AC_SY200_.jpg"
                        price={29.5} rating={4} />
                </div>
                <div className="home_row">
                    <Product id="123rewrfds" title="Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
                        image="https://m.media-amazon.com/images/I/41OQms4W6UL.__AC_SY200_.jpg"
                        price={77.1} rating={5} />
                </div>
            </div>

        </div>
    )
}
