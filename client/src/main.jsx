import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Auth0Provider} from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-qthw15.us.auth0.com"
      clientId="f6kSaOaPkDkIy3YkuDGVZ7QVIUNL2Z9n"
      authorizationParams={
        {
          redirect_uri: "http://localhost:5173",
        }
      }
      audience="http://localhost:8010"
      scope="openid profile email"
      >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
