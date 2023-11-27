import Image from "next/image";
import React from "react";
import GithubLink from "./githubLink";
import Link from "next/link";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function RecoverPassword() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="col-span-12 ">
      <div className="grid h-full grid-cols-12">
        <div className="grid col-span-6">
          <div className="grid w-3/5 h-full col-span-6  max-md:hidden translate-x-[30%]">
            <form action="" className="grid w-full gap-5 m-auto">
              <div>
                <h1 className="text-3xl font-bold">Registrate</h1>
              </div>
              <div className="grid gap-2">
                <input
                  type="email"
                  className="w-full px-3 py-3 rounded-lg outline-none bg-zinc-100"
                  placeholder="Nombre de usuario"
                />
              </div>
              <div className="grid gap-2">
                <input
                  type="email"
                  className="w-full px-3 py-3 rounded-lg outline-none bg-zinc-100"
                  placeholder="Correo electronico"
                />
              </div>
              <div className="grid bg-zinc-100 ">
                <div className="flex items-center">
                  <input
                    type={toggle ? "text" : "password"}
                    className="w-full px-4 py-3 pr-12 transition duration-200 outline-none bg-zinc-100"
                    placeholder="Contraseña"
                  />
                  <div className="px-1 bg-zinc-100 ">
                    <div
                      className="p-2 transition duration-200 rounded-full cursor-pointer select-none right-10 hover:bg-zinc-300 hover:text-zinc-900"
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                    >
                      {toggle ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="transition duraiton-200 inline-flex justify-center p-4 text-sm font-medium text-[#e8e8e8] bg-zinc-800 rounded-xl hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 "
              >
                Inicia sesión
              </button>
              <div className="flex justify-between">
                <Link href="/" className="font-medium text-zinc-700">
                  Inicia sesión
                </Link>
                <Link
                  href="/auth/recoverPassword"
                  className="font-medium text-zinc-700"
                >
                  Olvide mi contraseña
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="grid items-center justify-center h-full col-span-6 bg-zinc-900">
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
