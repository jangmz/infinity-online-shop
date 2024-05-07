import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Outlet, useLocation } from "react-router-dom"
import "../src/style/root.css"
import Icon from "@mdi/react"
import { mdiCart } from "@mdi/js"
import homeBanner from "./assets/home-banner.jpg"

export const CartContext = createContext()

function Root() {
  const location = useLocation()
  const [cart, setCart] = useState([])
  const numProducts = cart.length
  
  // check if the current route is not the root route
  const isSubRoute = location.pathname !== "/"

  return (
    <CartContext.Provider value={{cart, setCart}}>
      <div id='container'>
        <nav id="navigation-menu">
          <div className='store-logo'>
            <h1><Link to="/">Infinity Store</Link></h1>
          </div>
          <div className='menu'>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="shop">Shop</Link>
              </li>
              <li>
                <Link to="cart"><Icon path={mdiCart} size={1} /> {numProducts}</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div id="main-content">
          {!isSubRoute && (
            <div className="home-page">
              <div className='home-component'>
                <div className='banner'>
                  <h1 className='banner-title'>Infinite choices.</h1>
                  <button><Link to="shop">Start shopping</Link></button>
                </div>
                <div className='home-categories'>
                  
                </div>                  
              </div>
            </div>
          )}

          <Outlet />
        </div>
        <footer>
          <p>Created by <a href="https://github.com/jangmz/">jangmz</a> for The Odin Project &copy; 2024</p>
          <p>Disclaimer: This page is not a real online store and is not intended to sell products.</p>
        </footer>
      </div>
    </CartContext.Provider>
  )
}

export default Root
