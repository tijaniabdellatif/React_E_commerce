import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
//Domain : devserver-auth.eu.auth0.com
//client id : wDC7soZLYH9R0pR6diCHRkC04HD8GX0x
ReactDOM.render(
    <Auth0Provider
        domain='devserver-auth.eu.auth0.com'
        clientId='wDC7soZLYH9R0pR6diCHRkC04HD8GX0x'
        redirectUri={window.location.origin}
         cacheLocation='localstorage'>
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>

,
document.getElementById('root'))
