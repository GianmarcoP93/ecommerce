import { Link } from "react-router-dom";

export const RegisterNav = () => {
  return (
    <nav className="bg-gray-800 flex justify-center w-full ">
      <Link to="/" className=" p-2 ">
        <img src="/logo.png" alt="logo" className="max-w-28" />
      </Link>
    </nav>
  );
};
