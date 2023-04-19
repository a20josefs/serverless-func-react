import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Products from './Products'
import App from './App'
import { BrowserRouter as Router,Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" exact>

      </Route>
      <Route path="/:productID" exact>
        <Products>

        </Products>
      </Route>
    </Router>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
