import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Outlet, useLocation } from "react-router-dom"
//import './App.css'

function Root() {
  const location = useLocation()
  const [cart, setCart] = useState([])
  const [numProducts, setNumProducts] = useState(0);

  const incrementNumProducts = () => {
    setNumProducts((prevNumProducts) => prevNumProducts + 1)
  }

  const decrementNumProducts = () => {
    setNumProducts((prevNumProducts) => prevNumProducts - 1)
  }
  
  // check if the current route is not the root route
  const isSubRoute = location.pathname !== "/"

  return (
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

        <Outlet context={cart}/>
      </div>
    </div>
  )
}

export default Root
