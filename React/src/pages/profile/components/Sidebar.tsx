import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineModeEdit, MdNotificationsNone } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoCarSportOutline } from "react-icons/io5";

const Sidebar = ({ page, setPage }) => {
  return (
    <aside className="absolute top-0 bg-red-500 h-fit w-fit flex items-center flex-col text-white px-4 py-5 [&>*]:my-7 [&>*]:cursor-pointer">
      <Link to="/">
        <svg
          width="24"
          height="26"
          viewBox="0 0 24 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 xl:w-6 xl:h-6"
        >
          <g clipPath="url(#clip0_4_3488)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8619 21.8954C11.6945 21.8954 10.5781 21.6748 9.55404 21.2712L5.87842 23.6625C7.88879 24.9657 10.2877 25.7219 12.8619 25.7219C17.6219 25.7219 21.7785 23.1363 24.0019 19.2929L20.6884 17.3787C19.125 20.0793 16.2056 21.8954 12.8619 21.8954Z"
              fill="#fff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.27734 3.28345L8.06235 12.862L4.27734 22.4386L10.2538 18.5499L19.0006 12.862L10.2538 7.17219L4.27734 3.28345Z"
              fill="#fff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.862 3.82651C16.2057 3.82651 19.1251 5.64264 20.6885 8.34326L24.002 6.42906C21.7766 2.58558 17.622 0 12.862 0C10.2858 0 7.88885 0.756249 5.87659 2.05941L9.5541 4.45074C10.5781 4.04716 11.6927 3.82651 12.862 3.82651Z"
              fill="#fff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.82885 20.909L4.58274 16.4846L6.0198 12.8599L4.58274 9.23708L2.82885 4.81274C1.05988 7.01548 0 9.81417 0 12.8618C0 15.9075 1.05988 18.7062 2.82885 20.909Z"
              fill="#fff"
            />
          </g>
          <defs>
            <clipPath id="clip0_4_3488">
              <rect width="24" height="25.7219" fill="#fff" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <CgProfile
        onClick={() => setPage("profile")}
        className={`text-2xl ${
          page === "profile" && "text-black"
        } transition-colors hover:text-black`}
      />
      <IoCarSportOutline
        onClick={() => setPage("car")}
        className={`text-2xl ${
          page === "car" && "text-black"
        } transition-colors hover:text-black`}
      />
      <MdOutlineModeEdit
        onClick={() => setPage("edit")}
        className={`text-2xl ${
          page === "edit" && "text-black"
        } transition-colors hover:text-black`}
      />
      <MdNotificationsNone
        onClick={() => setPage("notif")}
        className={`text-2xl ${
          page === "notif" && "text-black"
        } transition-colors hover:text-black`}
      />
    </aside>
  );
};

export default Sidebar;
