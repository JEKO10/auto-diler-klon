import { useState, useTransition } from "react";
import image from "../../assets/login.jpg";
import { useAuthContext } from "../../contexts/AuthContext";
import { loginUser } from "../../sevices/authService";

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

    if (formData.password.length < 6) {
      setMessage("Lozinka mora imati najmanje 6 karaktera.");
      setIsError(true);
      return;
    }

    startTransition(async () => {
      try {
        const body = new URLSearchParams({
          username: formData.username,
          password: formData.password,
        });

        const response = await loginUser(body);
        const { access_token } = response.data;

        if (access_token) {
          login(access_token);
          setMessage("Uspješno ste se prijavili!");
          setIsError(false);
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
            setMessage("Pogrešan e-mail ili lozinka.");
          } else if (error.response.status === 500) {
            setMessage("Greška na serveru. Pokušajte kasnije.");
          } else {
            setMessage("Nešto je pošlo po zlu. Pokušajte ponovo.");
          }
        } else {
          setMessage("Nema odgovora sa servera. Provjerite vezu.");
        }
        setIsError(true);
      }
    });
  };

  return (
    <section className="flex flex-col md:flex-row">
      <img
        src={image}
        alt="Login"
        className="h-[100vh] w-1/2 hidden md:block"
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
          className="flex flex-col justify-center items-center gap-4 [&_label]:text-start"
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
      </article>
    </section>
  );
};

export default Login;
