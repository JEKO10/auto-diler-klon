import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const Profile = ({ setPage }) => {
  return (
    <section className="text-center lg:pl-16 lg:pt-6 h-[565px]">
      <h3 className="text-3xl">Zdravo, Aleksa</h3>
      <p className="mt-2">aleksa3@gmail.com</p>
      <p>+3826484513</p>
      <aside className="mt-14 w-full lg:w-fit flex justify-between items-start lg:flex-col text-red-500 px-4 sm:px-8 py-5 lg:py-[4.15rem] [&>*]:lg:my-8 [&>*]:cursor-pointer">
        <div
          onClick={() => setPage("car")}
          className="flex justify-center items-center transition hover:text-black"
        >
          <FaArrowLeft className="mr-1 animate-bounce" />
          <p>Vaši oglasi</p>
        </div>
        <div
          onClick={() => setPage("edit")}
          className="flex justify-center items-center transition hover:text-black"
        >
          <FaArrowLeft className="mr-1 animate-bounce" />
          <p>Ažurirajte podatke</p>
        </div>
        <div
          onClick={() => setPage("notif")}
          className="flex justify-center items-center transition hover:text-black"
        >
          <FaArrowLeft className="mr-1 animate-bounce" />
          <p>Obavještenja</p>
        </div>
      </aside>
    </section>
  );
};

export default Profile;
