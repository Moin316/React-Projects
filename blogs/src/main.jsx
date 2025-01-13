import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Appcontext } from './context/Appcontext.jsx'

createRoot(document.getElementById('root')).render(
  <Appcontext>
    <App />
  </Appcontext>,
)
