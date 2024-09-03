import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import './theme.css';
import './index.css';
import { AuthProvider, ContextProvider } from './Context.jsx';
import Routers from './Routers.jsx';
import { ThemeProvider } from './ThemeProvider.jsx';

const stripePromise = loadStripe('pk_test_51PsUGMP8fB4oMg6zjVQKcDcmGbl5hsb3NSk2mDpgtmSh4bZ9Ch8cyb0G0VQ9WctUeoMLUg3R6Y2HutlRUYlsTiPP004TtwYcct'); // publishable key

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider>
        <ContextProvider>
          <Elements stripe={stripePromise}>
            <Routers />
          </Elements>
        </ContextProvider>
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>
);