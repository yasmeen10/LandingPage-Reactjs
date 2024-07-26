// import { Link } from "react-router-dom";
// import logo from "../assets/Images/logo.png";
// import { useState } from "react";
// const navigation = [
//   { name: "Home", path: "/", selected: true },
//   { name: "Solutions", path: "/solutions", selected: false },
//   { name: "Pricing", path: "/pricing", selected: false },
//   { name: "Services", path: "/services", selected: false },
//   { name: "About Us", path: "/about", selected: false },
// ];

// export default function Navbar() {
//   const [activeLink, setActiveLink] = useState("/");
//   const [openMenu, setOpenMenu] = useState(false);

//   const handleSetActiveLink = (link) => {
//     setActiveLink(link);
//     setOpenMenu(false);
//   };
//   return (
//     <nav className="px-28 py-6 bg-gradient-to-b from-black/80 to-black/0">
//       <div className="flex justify-between items-center">
//         <div className="">
//           <img src={logo} className="w-40" />
//         </div>
//         <div className="flex items-center justify-between">
//           <ul className="flex justify-center items-center space-x-4">
//             {navigation.map((nav) => (
//               <li
//                 key={nav.name}
//                 className={`text-white text-base px-4 py-2 cursor-pointer ${
//                   activeLink === nav.path
//                     ? "bg-mainColor border border-transparent rounded-3xl font-medium"
//                     : "font-normal"
//                 }`}
//                 onClick={() => handleSetActiveLink(nav.path)}
//               >
//                 <Link to={nav.path}>{nav.name}</Link>
//               </li>
//             ))}
//           </ul>
//           <div className="flex items-center justify-between gap-4">
//             <button className="text-white text-base font-medium border border-white rounded-3xl px-4 py-2">
//               LogIn
//             </button>
//             <button className="text-white text-base font-medium border border-white rounded-3xl px-4 py-2 bg-mainColor">
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import { useState } from "react";
import BurgerMenuSVG from "../assets/SVG/BurgerMenuSVG";

const navigation = [
  { name: "Home", path: "/", selected: true },
  { name: "Solutions", path: "/solutions", selected: false },
  { name: "Pricing", path: "/pricing", selected: false },
  { name: "Services", path: "/services", selected: false },
  { name: "About Us", path: "/about", selected: false },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="px-4 sm:px-6 lg:px-28 py-6 bg-gradient-to-b from-black/80 to-black/0">
      <div className="flex justify-between items-center">
        <div className="">
          <img src={logo} className="w-32 sm:w-40" />
        </div>
        <div className="flex items-center">
          <div className="hidden lg:block">
            <ul className="flex justify-center items-center space-x-4">
              {navigation.map((nav) => (
                <li
                  key={nav.name}
                  className={`text-white text-base px-4 py-2 cursor-pointer ${
                    activeLink === nav.path
                      ? "bg-mainColor border border-transparent rounded-3xl font-medium"
                      : ""
                  }`}
                  onClick={() => handleSetActiveLink(nav.path)}
                >
                  <Link to={nav.path}>{nav.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex items-center justify-between gap-4">
            <button className="text-white text-base font-medium border border-white rounded-3xl px-4 py-2">
              LogIn
            </button>
            <button className="text-white text-base font-medium border border-white rounded-3xl px-4 py-2 bg-mainColor">
              Sign Up
            </button>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              className="text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <BurgerMenuSVG />
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col gap-2">
            {navigation.map((nav) => (
              <li
                key={nav.name}
                className={`text-white text-base px-4 py-2 cursor-pointer ${
                  activeLink === nav.path
                    ? "bg-mainColor border border-transparent rounded-3xl font-medium"
                    : ""
                }`}
                onClick={() => handleSetActiveLink(nav.path)}
              >
                <Link to={nav.path}>{nav.name}</Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 mt-4">
            <button className="text-white text-base font-medium border border-white rounded-3xl px-4 py-2">
              LogIn
            </button>
            <button className="text-white text-base font-medium border border-white rounded-3xl px-4 py-2 bg-mainColor">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
