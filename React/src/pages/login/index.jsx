import { useState, useTransition } from "react";
import image from "../../assets/login.jpg";
import { useAuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const { login } = useAuthContext();
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username === "" || formData.password === "") {
      setMessage("Sva polja su obavezna!");
      setIsError(true);
      return;
    }

    startTransition(async () => {
      try {
        await login(formData);
        setMessage("Uspješno ste se prijavili!");
        setIsError(false);
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
            setMessage("Pogrešan e-mail ili lozinka.");
          } else if (error.response.status === 404) {
            setMessage("Korisnik ne postoji.");
          } else if (error.response.status === 422) {
            setMessage("Uneseni podaci nisu validni. Provjerite formu.");
          } else if (error.response.status === 500) {
            setMessage("Greška na serveru. Pokušajte kasnije.");
          } else {
            setMessage("Nešto je pošlo po zlu. Pokušajte ponovo.");
          }
        } else {
          setMessage("Nema odgovora sa servera. Provjerite mrežu.");
        }
        setIsError(true);
      }
    });
  };

  return (
    <section className="flex flex-col md:flex-row text-text">
      <Link to="/" className="absolute top-5 left-5">
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
      <img
        src={image}
        alt="Login"
        className="h-[100vh] w-[70%] lg:w-[60%] -ml-36 lg:ml-0 hidden md:block"
      />
      <article className="text-center py-10 px-5 lg:px-10 w-full md:w-1/2">
        <h2 className="text-3xl">Prijavi se</h2>
        <p className="text-sm mt-2 mb-5 lg:mb-9 text-[#A1A1A1]">
          -------- Auto Diler --------
        </p>
        {message && (
          <div
            className={`text-sm mb-4 p-3 rounded-md ${
              isError
                ? "bg-red-200 text-red-700"
                : "bg-green-200 text-green-700"
            }`}
          >
            {message}
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-4 [&_input]:bg-body [&_input]:text-text [&_label]:text-start"
        >
          <label className="w-full">
            <span>E-mail:</span>
            <input
              type="email"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="E-mail"
              className="py-2 px-2 border-2 border-[#A1A1A1]/50 rounded-md w-full"
            />
          </label>
          <label className="w-full">
            <span>Lozinka:</span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Lozinka"
              className="py-2 px-2 border-2 border-[#A1A1A1]/50 rounded-md w-full"
            />
          </label>
          <button
            type="submit"
            className="bg-[#EA3C3C] text-white w-full rounded-md py-2 lg:mt-5"
            disabled={isPending}
          >
            {isPending ? "Prijavljivanje..." : "Prijavi se"}
          </button>
        </form>
        <div className="w-full text-start mt-3">
          <Link to="/register" className="text-red-500">
            Nemate nalog?
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Login;
