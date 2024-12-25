import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { useState } from "react";
import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { logout, isAuthenticated } = useAuthContext();

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  if (isNavOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <nav className="font-inter flex justify-between items-center py-5 sm:py-7 md:py-4 lg:py-7 xl:py-10 px-5 lg:px-10">
      <Link to="/">
        <svg
          width="24"
          height="26"
          viewBox="0 0 24 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 xl:w-10 xl:h-10"
        >
          <g clipPath="url(#clip0_4_3488)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8619 21.8954C11.6945 21.8954 10.5781 21.6748 9.55404 21.2712L5.87842 23.6625C7.88879 24.9657 10.2877 25.7219 12.8619 25.7219C17.6219 25.7219 21.7785 23.1363 24.0019 19.2929L20.6884 17.3787C19.125 20.0793 16.2056 21.8954 12.8619 21.8954Z"
              fill="#ef4444"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.27734 3.28345L8.06235 12.862L4.27734 22.4386L10.2538 18.5499L19.0006 12.862L10.2538 7.17219L4.27734 3.28345Z"
              fill="#ef4444"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.862 3.82651C16.2057 3.82651 19.1251 5.64264 20.6885 8.34326L24.002 6.42906C21.7766 2.58558 17.622 0 12.862 0C10.2858 0 7.88885 0.756249 5.87659 2.05941L9.5541 4.45074C10.5781 4.04716 11.6927 3.82651 12.862 3.82651Z"
              fill="#ef4444"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.82885 20.909L4.58274 16.4846L6.0198 12.8599L4.58274 9.23708L2.82885 4.81274C1.05988 7.01548 0 9.81417 0 12.8618C0 15.9075 1.05988 18.7062 2.82885 20.909Z"
              fill="#ef4444"
            />
          </g>
          <defs>
            <clipPath id="clip0_4_3488">
              <rect width="24" height="25.7219" fill="#ef4444" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <ul className="gap-6 items-center hidden md:flex [&>li]:lg:text-text [&>li]:lg:text-lg [&>li]:px-5 [&>li]:xl:px-10 [&>li]:cursor-pointer">
        <li>
          <Link to="/profile">Profil</Link>
        </li>
        <li>
          <Link to="/all">Ponuda vozila</Link>
        </li>
        <li>
          <Link to="/create">Prodajem</Link>
        </li>
        <li>Usluge</li>
      </ul>
      {!isAuthenticated ? (
        <div className="gap-2 hidden sm:flex md:flex-col lg:flex-row">
          <Link
            to="/register"
            className="bg-red-500 text-white text-xs md:text-sm lg:text-md py-1 lg:py-2 px-5 lg:px-7 border border-transparent rounded-lg transition hover:bg-white hover:text-red-500 hover:border-red-500"
          >
            Registruj se
          </Link>
          <Link
            to="/login"
            className="text-red-500 text-xs md:text-sm lg:text-md py-1 lg:py-2 px-5 lg:px-7 border rounded-lg border-red-500"
          >
            Prijavi se
          </Link>
        </div>
      ) : (
        <button
          onClick={logout}
          className="hidden sm:block text-xs md:text-sm lg:text-md py-1 lg:py-2 px-5 lg:px-7 bg-red-500 text-white rounded-lg"
        >
          Odjavi se
        </button>
      )}
      {!isNavOpen ? (
        <RiMenu3Fill
          className="text-red-500 text-3xl z-30 md:hidden cursor-pointer"
          onClick={toggleNav}
        />
      ) : (
        <RiCloseFill
          className="text-red-500 text-4xl z-30 md:hidden cursor-pointer"
          onClick={toggleNav}
        />
      )}
      {isNavOpen && (
        <div className="h-full w-full absolute top-0 right-0 bg-black/90 text-white shadow-lg flex flex-col px-5 py-16 md:hidden z-20">
          <ul className="flex flex-col justify-center items-center gap-5 [&>li]:text-lg [&>li]:cursor-pointer">
            <li>
              <Link to="/">Početna</Link>
            </li>
            <li>
              <Link to="/all">Ponuda vozila</Link>
            </li>
            <li>
              <Link to="/create">Prodajem</Link>
            </li>
            <li>Usluge</li>
          </ul>
          {!isAuthenticated ? (
            <div className="flex flex-col gap-2 mt-64">
              <Link
                to="/register"
                className="bg-red-500 text-white text-sm py-2 px-5 rounded-lg text-center"
                onClick={toggleNav}
              >
                Registruj se
              </Link>
              <Link
                to="/login"
                className="text-red-500 text-sm py-2 px-5 border rounded-lg border-red-500 text-center"
                onClick={toggleNav}
              >
                Prijavi se
              </Link>
            </div>
          ) : (
            <button
              onClick={() => {
                logout();
                toggleNav();
              }}
              className="bg-red-500 text-white text-sm py-2 px-5 rounded-lg mt-80"
            >
              Odjavi se
            </button>
          )}
        </div>
      )}
      <ToggleTheme />
    </nav>
  );
};

export default Navbar;
