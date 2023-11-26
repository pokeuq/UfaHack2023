import { useState } from "react";
import { useAuth } from "../authContext";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import logo from "../assets/images/_Softcode.svg";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = () => {
    axios
      .post("http://213.171.5.251/authorization", { email, password })
      .then((response) => {
        const token = response.data.token;
        login(token);
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/">
            <img
              className="mx-auto h-10 w-auto"
              src={logo}
              alt="Your Company"
            />
          </Link>
          <h2 className="mt-40 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Авторизация
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Почта
              </label>
              <div className="mb-2">
                <input
                  ref={emailRef}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="email@gmail.com"
                  required
                  className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Пароль
              </label>
              <div>
                <input
                  ref={passwordRef}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
            </div>

            <button
              onClick={handleLogin}
              type="submit"
              className="w-full mt-10 rounded-md bg-indigo-600 px-4 py-2 text-l font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 first-letter:"
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
