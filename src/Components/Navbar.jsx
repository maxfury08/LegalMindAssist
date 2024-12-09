import { NavLink, useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-scroll";

function Navbar() {
  const navigate = useNavigate();
  // Check if the token exists 
  const token = localStorage.getItem('token');
  console.log('token is n' + token);

  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log('token removed' + token);
    navigate('/login');
  };

  return (
    <div className="flex justify-between items-center h-24 px-8 md:px-16 mb-6 py-3 mx-auto">
      <div className="text-2xl font-bold text-white">Legal Mind Assist</div>

      <ul className="flex gap-6 md:gap-8 text-lg">
        <li>
          <NavLink
            to="/"
           
            className="cursor-pointer text-gray-700 hover:text-yellow-200 dark:text-white"
          >
            Home
          </NavLink>
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-yellow-200 dark:text-white"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-yellow-200 dark:text-white"
          >
            Features
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-yellow-200 dark:text-white"
          >
            Contact
          </Link>
        </li>

        {/* Conditionally render Sign In or Log Out */}
        <li>
          {token ? (
            <button
              onClick={handleLogout}
              className="text-gray-700 hover:text-yellow-200 dark:text-red-500"
            >
              Log Out
            </button>
          ) : (
            <NavLink
              to="/login"
              className="text-gray-700 hover:text-yellow-200 dark:text-white"
            >
              Sign In
            </NavLink>
          )}
        </li>
      </ul>

      <button onClick={() => navigate('/chatbot')} className="flex items-center gap-3 py-2 px-6 rounded-full bg-white text-black font-semibold text-sm md:text-lg">
        Get Started
        <FaAngleRight className="text-black text-2xl" />
      </button>
    </div>
  );
}

export default Navbar;
