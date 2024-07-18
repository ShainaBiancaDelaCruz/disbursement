import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Form from './Components/Form/Form.jsx'
import Sidebar from './Components/Sidebar/Sidebar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Sidebar />
   <Form />
  </React.StrictMode>,
)