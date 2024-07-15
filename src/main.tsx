import { Auth0Provider } from '@auth0/auth0-react';
import { createRoot } from 'react-dom/client';
import App from './App';

const domain: string = "tobiasmarion.us.auth0.com";
const clientId: string = "d880RfbIfCwu2NXRKzlu2bTwd7rPcjwY";

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = createRoot(rootElement);

    root.render(
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
            <App />
        </Auth0Provider>
    );
} else {
    console.error("Root element not found");
}