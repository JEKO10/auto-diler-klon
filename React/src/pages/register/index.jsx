import { useState } from "react";
import image from "../../assets/register.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    has_viber: true,
    has_whatsapp: true,
    is_active: true,
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password.length < 6) {
      setMessage("Lozinka mora imati najmanje 6 karaktera.");
      setIsError(true);
      return;
    }

    try {
      const response = await axios.post(
        "https://ce1d-79-140-150-179.ngrok-free.app/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { access_token } = response.data;

      if (access_token) {
        localStorage.setItem("access_token", access_token);
        setMessage("Korisnik je uspješno kreiran!");
        setIsError(false);

        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setMessage("E-mail već postoji.");
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
  };

  return (
    <section className="flex flex-col md:flex-row">
      <img
        src={image}
        alt="Register"
        className="h-[100vh] w-1/2 hidden md:block"
      />
      <article className="text-center py-10 px-5 lg:px-10 w-full md:w-1/2">
        <h2 className="text-3xl">Kreiraj nalog</h2>
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
          <div className="flex gap-4 w-full">
            <label className="flex-1">
              <span>Ime:</span>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
                placeholder="Ime"
                className="py-2 px-2 border-2 border-[#A1A1A1]/50 rounded-md w-full"
              />
            </label>
            <label className="flex-1">
              <span>Prezime:</span>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
                placeholder="Prezime"
                className="py-2 px-2 border-2 border-[#A1A1A1]/50 rounded-md w-full"
              />
            </label>
          </div>
          <label className="w-full">
            <span>E-mail:</span>
            <input
              type="email"
              name="email"
              value={formData.email}
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
            <p className="text-xs text-[#EA3C3C]">Najmanje 6 karaktera</p>
          </label>
          <label className="w-full">
            <span>Broj telefona:</span>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
              placeholder="+38268112221"
              className="py-2 px-2 border-2 border-[#A1A1A1]/50 rounded-md w-full"
            />
          </label>
          <button
            type="submit"
            className="bg-[#EA3C3C] text-white w-full rounded-md py-2 lg:mt-5"
          >
            Registruj se
          </button>
        </form>
      </article>
    </section>
  );
};

export default Register;
