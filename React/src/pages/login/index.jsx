import { useState } from "react";
import image from "../../assets/login.jpg";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = new URLSearchParams({
        username: formData.username,
        password: formData.password,
      });

      const response = await axios.post(
        "https://ce1d-79-140-150-179.ngrok-free.app/login",
        body,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log("Submitted successfully: ", response.data);
    } catch (error) {
      console.error("Error: ", error);
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
        <h2 className="text-3xl">Prijavi se</h2>
        <p className="text-sm mt-2 mb-5 lg:mb-9 text-[#A1A1A1]">
          -------- Auto Diler --------
        </p>
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
          >
            Prijavi se
          </button>
        </form>
      </article>
    </section>
  );
};

export default Login;
