import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from "react-router-dom"
import './App.css'

function App() {
  return (
    <div>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link to="shop">Shop</Link>
        </li>
        <li>
          <Link to="cart">Cart</Link>
        </li>
      </ul>
    </div>
  )
}

export default App
