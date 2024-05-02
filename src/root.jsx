import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Outlet, useLocation } from "react-router-dom"
//import './App.css'

export const CartContext = createContext()

function Root() {
  const location = useLocation()
  const [cart, setCart] = useState([
    /*{
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      quantity: 1,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
          rate: 3.9,
          count: 120
      }
    }*/
  ])
  const numProducts = cart.length

  const incrementNumProducts = () => {
    //setNumProducts((prevNumProducts) => prevNumProducts + 1)
  }

  const decrementNumProducts = () => {
    //setNumProducts((prevNumProducts) => prevNumProducts - 1)
  }
  
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
