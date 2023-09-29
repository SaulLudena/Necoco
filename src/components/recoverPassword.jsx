import React from "react";

export default function RecoverPassword() {
  return (
    <div className="grid items-center justify-center w-full col-span-12 ">
      <form action="" className="grid gap-5 w-96">
        <div className="grid gap-2">
          <h1 className="text-2xl font-bold text-white">Ingresa tu email</h1>
          <h1 className="text-sm text-zinc-300">
            Te enviaremos un correo electronico con tu nueva contraseña,
            asegurate de tener un correo electronico registrado válido
          </h1>
          <input
            type="email"
            className="w-full px-3 py-3 text-white rounded-lg outline-none bg-zinc-800 "
            required
          />
          <button
            type="submit"
            className="inline-flex justify-center px-4 py-4 text-sm font-medium text-[#00FFFF] bg-zinc-950 rounded-lg "
          >
            Enviar correo
          </button>
        </div>
      </form>
    </div>
  );
}
