import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 xl:py-7 px-5 lg:px-10">
      <div className="text-xl md:text-2xl font-bold text-red-500">Diler</div>
      <ul className="gap-6 items-center hidden md:flex [&>li]:lg:text-lg [&>li]:px-5 [&>li]:xl:px-10 [&>li]:cursor-pointer">
        <li>Početna</li>
        <li>Ponuda vozila</li>
        <li>Prodajem</li>
        <li>Usluge</li>
      </ul>
      <div className="gap-2 hidden sm:flex md:flex-col lg:flex-row">
        <button className="text-xs md:text-sm lg:text-md py-1 lg:py-2 px-5 lg:px-7 bg-red-500 text-white rounded-lg">
          Registruj se
        </button>
        <button className="text-xs md:text-sm lg:text-md py-1 lg:py-2 px-5 lg:px-7 border rounded-lg text-red-500 border-red-500">
          Prijavi se
        </button>
      </div>
      <RiMenu3Fill className="text-red-500 text-2xl md:hidden" />
    </nav>
  );
};

export default Navbar;
