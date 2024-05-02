import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Outlet, useLocation } from "react-router-dom"
//import './App.css'

export const CartContext = createContext()

function Root() {
  const location = useLocation()
  const [cart, setCart] = useState([])
  const numProducts = cart.length
  
  // check if the current route is not the root route
  const isSubRoute = location.pathname !== "/"

  return (
    <CartContext.Provider value={{cart, setCart}}>
      <div>
        <nav id="navigation-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="shop">Shop</Link>
            </li>
            <li>
              <Link to="cart">[Cart-icon] {numProducts}</Link>
            </li>
          </ul>
        </nav>
        <div id="main-content">
          {!isSubRoute && (
            <div className="home-page">
              <h1>Home</h1>
            </div>
          )}

          <Outlet />
        </div>
      </div>
    </CartContext.Provider>
  )
}

export default Root
