import Link from "next/link";
import { useState } from "react";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import srcLogo from "../../public/logo.png";
import GithubLink from "../components/githubLink";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import Loader from "./loader";
export default function DedicatedLogin() {
  const [loginData, setLoginData] = useState({});
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [toggleToText, setToggleToText] = useState(false);
  const Router = useRouter();
  const [credentials, setCredentials] = useState({
    correoUsuario: "",
    contraseniaUsuario: "",
  });

  const HandlingLogin = async () => {
    const response = await axios.post(
      "http://localhost:3001/login/loginUser",
      credentials
    );

    response.data.status === 200
      ? (setLoginData(response.data),
        setLoading(true),
        Cookies.set("token", response.data.token),
        Router.push("/mainFeed"))
      : (setLoginError(true),
        setTimeout(() => {
          setLoginError(false);
        }, 4000));
  };

  return (
    <div className="col-span-12 ">
      {loginError ? (
        <div className="fixed grid justify-center w-full py-5 transition duration-300 ease-in-out">
          <div className="flex items-center gap-3 p-3 bg-pink-300 rounded-lg w-72 text-pink-950">
            <BsArrowCounterclockwise />
            Email o contraseña incorrecta
          </div>
        </div>
      ) : null}
      {loginData.status === 200 ? (
        <div className="fixed grid justify-center w-full py-5 transition duration-300 ease-in-out">
          <div className="flex items-center gap-3 p-3 bg-green-300 rounded-lg w-72 text-green-950">
            <FaCheck />
            {loginData.message}
          </div>
        </div>
      ) : null}
      <div className="grid h-full grid-cols-12">
        <div className="grid col-span-6 max-lg:col-span-12">
          <div className="grid w-3/5 h-full col-span-6   translate-x-[30%]">
            <form method="post" className="grid w-full gap-5 m-auto">
              <h1 className="text-3xl font-bold">
                Disfruta de nuevos momentos
              </h1>
              <div className="grid gap-2">
                <input
                  type="email"
                  className="w-full px-3 py-3 rounded-lg outline-none bg-zinc-100"
                  placeholder="Ingrese su correo electronico"
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      correoUsuario: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="grid bg-zinc-100 ">
                <div className="flex items-center">
                  <input
                    type={toggleToText ? "text" : "password"}
                    className="w-full px-4 py-3 pr-12 transition duration-200 outline-none bg-zinc-100"
                    placeholder="Ingrese su contraseña"
                    onChange={(e) => {
                      setCredentials({
                        ...credentials,
                        contraseniaUsuario: e.target.value,
                      });
                    }}
                  />
                  <div className="px-1 bg-zinc-100 ">
                    <div
                      className="p-2 transition duration-200 rounded-full cursor-pointer select-none right-10 hover:bg-zinc-300 hover:text-zinc-900"
                      onClick={() => {
                        setToggleToText(!toggleToText);
                      }}
                    >
                      {toggleToText ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="transition duraiton-200 inline-flex justify-center p-4 text-sm font-medium text-[#e8e8e8] bg-zinc-800 rounded-xl hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 "
                onClick={() => {
                  HandlingLogin();
                }}
              >
                {loading ? <Loader /> : "Iniciar sesión"}
              </button>
              <div className="flex justify-between">
                <Link href="/signUp" className="font-medium text-zinc-700">
                  Registrate
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="grid items-center justify-center h-full col-span-6 bg-zinc-900 max-lg:hidden">
          <div className="grid items-center justify-center text-center">
            <div className="grid justify-center ">
              <Image
                src={srcLogo}
                width={200}
                height={50}
                alt="something"
                className="rounded-lg"
              />
            </div>
            <div className="grid gap-2">
              <p className="text-3xl font-medium text-white">
                Bienvenido a necoco
              </p>
              <p className="text-white">Disfruta de una gran comunidad</p>
              <div className="grid justify-center ">
                <GithubLink />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
