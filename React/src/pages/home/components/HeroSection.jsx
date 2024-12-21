import heroImage from "../../../assets/hero.png";

const HeroSection = () => {
  return (
    <section className="font-inter flex flex-col md:flex-row h-[100vh] md:h-auto items-center md:items-start justify-between px-5 md:px-0 md:pl-8 py-10 lg:py-16">
      <div className="md:max-w-md md:pr-5">
        <h1 className="font-poppins text-3xl text-text sm:text-4xl lg:text-6xl font-bold leading-tight text-center md:text-start">
          AUTO <span className="text-red-500">DILER</span> U PRODAJI{" "}
          <span className="text-red-500">AUTOMOBILA</span>
        </h1>
        <p className="text-md md:text-lg text-primary mt-4 font-semibold text-center md:text-start">
          Vaša sledeća vožnja počinje ovde, kupujte auto kod lidera automobila
        </p>
        <div className="flex gap-6 text-text md:gap-24 mt-10 sm:px-10 md:px-0">
          <div>
            <p className="text-4xl font-bold">50+</p>
            <p className="text-primary text-sm">Auto brendova</p>
          </div>
          <div>
            <p className="text-4xl font-bold">10k+</p>
            <p className="text-primary text-sm">Zadovoljnih korisnika</p>
          </div>
        </div>
      </div>
      <div className="mt-[8rem] hidden md:block">
        <img src={heroImage} alt="Hero Car" className="w-full" />
      </div>
    </section>
  );
};

export default HeroSection;
