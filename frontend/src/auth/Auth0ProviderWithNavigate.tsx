import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  if (!domain || !clientId || !redirectUri) {
    throw new Error("unable to initialize auth");
  }

  const onRedirectCallback = () => {
    // if (user?.sub && user?.email) {
    //   //calling mutation function linked to call the createMyUserRequest
    //   createUser({ auth0Id: user.sub, email: user.email });
    //   navigate("/");
    // }
    //auth-callback navigate to  AuthCallBackPage, which is wrapped around auth0provider
    //that therefore  can use useAuth0  and fetch the token
    navigate("/auth-callback");
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
