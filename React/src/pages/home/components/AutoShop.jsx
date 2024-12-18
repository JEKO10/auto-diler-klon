import { Link } from "react-router-dom";

const AutoShop = () => {
  return (
    <section className="shop font-inter my-20 text-white">
      <article className="py-14 sm:px-5 md:px-10 md:max-w-[448px]">
        <div className="mb-44 text-center sm:text-start">
          <h3 className="text-4xl font-bold mb-5">Auto Shop</h3>
          <p className="font-semibold">
            Više od 5000 vlasnika automobila prodaje i izdaje svoja vozila preko
            Auto Lerdi platforme brzo i efikasno. Registrujte se i postanite naš
            partner već danas kako biste povećali svoj mesečni prihod!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row px-5 sm:px-0 [&>a]:w-full [&>a]:sm:w-auto">
          <Link
            to="/cars"
            className="bg-red-500 text-white text-md mr-5 mb-5 sm:mb-0 py-2 px-7 border border-transparent rounded-lg transition hover:bg-transparent hover:text-red-500 hover:border hover:border-red-500"
          >
            Vidi ponude
          </Link>
          <Link
            to="/create"
            className="bg-white text-red-500 text-md py-2 px-7 border border-transparent rounded-lg transition hover:bg-transparent hover:text-red-500 hover:border hover:border-red-500"
          >
            Oglasi vozilo
          </Link>
        </div>
      </article>
    </section>
  );
};

export default AutoShop;
