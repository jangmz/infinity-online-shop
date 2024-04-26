import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Shop from "./components/shop.jsx"
import ErrorPage from "./components/error-page.jsx"
import './index.css'
import Cart from './components/cart.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path:"shop",
    element: <Shop />
  },
  {
    path:"cart",
    element: <Cart />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
