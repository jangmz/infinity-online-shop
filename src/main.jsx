import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import Root from './root.jsx'
import Shop from "./components/shop.jsx"
import ErrorPage from "./components/error-page.jsx"
import Cart from './components/cart.jsx'
import ThankYou from './components/thank-you.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"shop",
        element: <Shop />,
      },
      {
        path:"cart",
        element: <Cart />,
        children: [
          {
            path: "thank-you",
            element: <ThankYou />,
          }
        ]
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
