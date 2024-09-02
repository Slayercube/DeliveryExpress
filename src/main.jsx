import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import './theme.css';
import './index.css';
import { ContextProvider } from './Context.jsx';
import Routers from './Routers.jsx';
import { ThemeProvider } from './ThemeProvider.jsx';


const stripePromise = loadStripe('pk_test_51PsUGMP8fB4oMg6zjVQKcDcmGbl5hsb3NSk2mDpgtmSh4bZ9Ch8cyb0G0VQ9WctUeoMLUg3R6Y2HutlRUYlsTiPP004TtwYcct'); // Replace with your Stripe publishable key

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <ContextProvider>
        <BrowserRouter>
      <Elements stripe={stripePromise}>
          <Routers />
         
      </Elements>
        </BrowserRouter>
    </ContextProvider>
  </ThemeProvider>,
);