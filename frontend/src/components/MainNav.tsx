import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";
import { Button } from "./ui/button";
const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  return (
    <span className="flex space-x-3 items-center">
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <Button
          onClick={async () => {
            await loginWithRedirect();
          }}
          className=" font-bold hover:text-orange-500"
        >
          Login
        </Button>
      )}
    </span>
  );
};

export default MainNav;
