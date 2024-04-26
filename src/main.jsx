import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Shop from "./components/shop.jsx"
import ErrorPage from "./components/error-page.jsx"
import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path:"shop",
    element: <Shop />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
