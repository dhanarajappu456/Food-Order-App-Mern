import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const AuthCallBackPage = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const { createUser } = useCreateMyUser();
  useEffect(() => {
    if (user?.sub && user?.email) {
      //calling mutation function linked to call the createMyUserRequest
      createUser({ auth0Id: user.sub, email: user.email });
      navigate("/");
    }
  }, []);

  return <>Loading...</>;
};

export default AuthCallBackPage;
