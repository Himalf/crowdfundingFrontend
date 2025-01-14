import { Link } from "react-router-dom";
import { BiDonateHeart } from "react-icons/bi";
const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Donation",
      path: "/donation",
    },
    {
      name: "How it works",
      path: "/how-it-works",
    },
    {
      name: "About us",
      path: "/aboutus",
    },
  ];
  return (
    <div className="flex justify-between items-center mt-4 bg-primaryColor py-5 px-2 rounded-t-lg sticky top-1 left-0">
      <div className="flex gap-2 items-center">
        <h1 className="text-3xl font-bold cursor-pointer flex items-center gap-1 ">
          <span className="text-secondaryColor">
            <BiDonateHeart />
          </span>
          <span>Fund</span>
        </h1>
        <span className="border border-r-2 border-secondaryColor h-8"></span>
        <ul className="flex items-center gap-6">
          {navItems.map((val, i) => (
            <Link to={val.path} key={i}>
              <li>{val.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="bg-secondaryColor text-white font-sm font-semibold px-4 py-1 rounded-md">
        <button>Register Now</button>
      </div>
    </div>
  );
};

export default Navbar;
