import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function SignUp() {
  let [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="px-3 py-2 rounded-lg text-[#00FFFF] bg-zinc-900"
      >
        Registrate
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="grid w-full max-w-md gap-4 p-8 overflow-hidden text-left align-middle transition-all transform shadow-xl bg-[#1a1a1a] rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-4xl font-medium leading-6 text-white"
                  >
                    Registrate
                  </Dialog.Title>
                  <div className="mt-2">
                    <form action="" className="grid gap-5">
                      <div className="grid gap-2">
                        <h1 className="text-white text-md">
                          Nombre de usuario
                        </h1>
                        <input
                          type="email"
                          className="w-full p-3 text-white rounded-lg outline-none bg-zinc-800 "
                        />
                      </div>
                      <div className="grid gap-2">
                        <h1 className="text-white text-md">
                          Correo electronico
                        </h1>
                        <input
                          type="email"
                          className="w-full p-3 text-white rounded-lg outline-none bg-zinc-800 "
                        />
                      </div>

                      <div className="grid gap-2">
                        <h1 className="text-white text-md">
                          Crea tu contraseña
                        </h1>
                        <div className="flex items-center">
                          <input
                            type={toggle ? "text" : "password"}
                            className="w-full px-3 py-3 pr-12 text-white rounded-lg outline-none bg-zinc-800"
                          />
                          <div
                            className="fixed p-2 text-white transition duration-200 rounded-full cursor-pointer select-none right-10 hover:bg-zinc-300 hover:text-zinc-900"
                            onClick={() => {
                              setToggle(!toggle);
                            }}
                          >
                            {toggle ? <AiFillEyeInvisible /> : <AiFillEye />}
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-4 text-sm font-medium text-[#00FFFF] bg-zinc-950 rounded-lg "
                        onClick={closeModal}
                      >
                        Registrarme
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
