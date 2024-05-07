import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Outlet, useLocation } from "react-router-dom"
import "../src/style/root.css"
import Icon from "@mdi/react"
import { mdiCart } from "@mdi/js"
import clothingThumb from "./assets/clothing.jpg"
import accessoryThumb from "./assets/accessory.jpg"
import gadgetsThumb from "./assets/gadgets.jpg"
import partsThumb from "./assets/parts.jpg"

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
                  <h2>Categories</h2>
                  <p>We sell clothing for men and women, fashion accessories, tech gadgets, computer parts and much more.</p>
                  <div className='category-groups'>
                    <div className='clothing'>
                      <img src={clothingThumb} />
                      <p>Super comfortable clothes for all occasions.</p>
                    </div>
                    <div className='accessories'>
                      <img src={accessoryThumb} />
                      <p>Level up your gashion with our amazing pool of accessories.</p>
                    </div>
                    <div className='gadgets'>
                      <img src={gadgetsThumb} />
                      <p>Tech gadgets for every tech enthusiast.</p>
                    </div>
                    <div className='parts'>
                      <img src={partsThumb} />
                      <p>Get everything you need for your next dream gaming build.</p>
                    </div>
                  </div>
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
