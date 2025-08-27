import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';


createRoot(document.getElementById('root')).render(

    <Auth0Provider
    domain="dev-np8po07nlh343ac0.us.auth0.com"
    clientId="uwr3FH1zVL86m1teCeesb7KzqGR69Y83"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
