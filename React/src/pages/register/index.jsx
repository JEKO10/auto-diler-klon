import { useState } from "react";
import image from "../../assets/register.jpg";

const Register = () => {
  const [formData, setFormData] = useState({
    ime: "",
    prezime: "",
    email: "",
    password: "",
    broj: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data submitted:", formData);
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
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-4 [&_label]:text-start"
        >
          <div className="flex gap-4 w-full">
            <label className="flex-1">
              <span>Ime:</span>
              <input
                type="text"
                name="ime"
                value={formData.ime}
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
                name="prezime"
                value={formData.prezime}
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
          </label>
          <label className="w-full">
            <span>Broj telefona:</span>
            <input
              type="tel"
              name="broj"
              value={formData.broj}
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
