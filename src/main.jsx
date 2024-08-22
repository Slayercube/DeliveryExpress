import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './theme.css'
import './index.css'
import { ContextProvider } from './Context.jsx'
import Routers from './Routers.jsx'
import { ThemeProvider } from './ThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <ContextProvider>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </ContextProvider>
  </ThemeProvider>,
)
