import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BiSolidUser } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import { useUserData } from "../helpers/useUserData";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
export default function SignedHeader() {
  const {
    user: {
      userInfo: { nombreUsuario },
    },
  } = useUserData();
  const Router = useRouter();
  const HandlingLogOut = () => {
    Cookies.remove("token");
    Router.push("/");
  };

  return (
    <div className="w-56 text-right top-16">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex items-center justify-center w-full gap-2 p-3 font-medium rounded-md shadow-lg text-zinc-900 text-md bg-opacity-20 hover:bg-zinc-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <p>{nombreUsuario}</p>
            <BiSolidUser className="" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right rounded-md shadow-lg bg-zinc-100 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-zinc-300 text-black transition duration-200"
                        : "text-black"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => {
                      HandlingLogOut();
                    }}
                  >
                    {active ? (
                      <AiOutlineLogout
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <AiOutlineLogout
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )}
                    Salir
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
