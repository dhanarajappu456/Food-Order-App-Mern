import { Link } from "react-router-dom";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      {" "}
      <div className="container mx-auto flex justify-between align-baseline">
        <Link
          to="/"
          className="flex items-end text-3xl font-bold tracking-tight text-orange-500"
        >
          EatAtEase.com
        </Link>
        {/* <Link
          to=""
          className="text-black font-bold flex items-end hover:text-orange-500"
        >
          Login
        </Link> */}
        <div className="md:hidden flex items-end">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
