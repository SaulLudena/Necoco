import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { useUserData } from "../helpers/useUserData";
import axios from "axios";
import Loader from "./loader";

export default function PostForm() {
  const { user } = useUserData();
  const [isOpen, setIsOpen] = useState(false);
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [descripcionPost, setDescripcionPost] = useState("");

  const {
    user: {
      userInfo: { nombreUsuario },
    },
  } = useUserData();

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  const handlePost = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/post/createPost",
        {
          idUsuario: user.userInfo.idUsuario,
          descripcionPost: descripcionPost,
        }
      );

      setIsOpen(false);
      setLoading(true);

      if (window !== undefined) {
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlingDisableButton = (e) => {
    e.target.value.trim().length > 0 && e.target.value.trim().length < 3000
      ? setDisable(false)
      : setDisable(true);
  };

  return (
    <div className="grid justify-center py-10">
      <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-2">
        <p className="grid items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-zinc-600">
          {nombreUsuario[0]}
        </p>
        <div className="w-full md:w-96">
          <div
            className="px-5 py-3 rounded-full cursor-pointer text-zinc-900 bg-zinc-300 hover:bg-zinc-400"
            onClick={openModal}
          >
            <p className="">¿En qué estás pensando?</p>
          </div>
        </div>
      </div>

      <>
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
                  <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      <div className="flex items-center gap-2 ">
                        <p className="grid items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-zinc-600">
                          {nombreUsuario[0]}
                        </p>
                        <p>{nombreUsuario}</p>
                      </div>
                    </Dialog.Title>
                    <form action="" className="mt-5 mb-5">
                      <textarea
                        className="w-full text-2xl outline-none h-52 text-zinc-900 scrollbarCustom"
                        placeholder="Qué estás pensando ?"
                        cols={50}
                        onChange={(e) => {
                          setDescripcionPost(e.target.value);
                          handlingDisableButton(e);
                        }}
                      />
                    </form>

                    <div className="mt-4">
                      <button
                        type="button"
                        className={`px-5 py-3 w-full flex justify-center rounded-lg ${
                          disable
                            ? "bg-zinc-400 text-white"
                            : "bg-zinc-900 text-white"
                        }`}
                        disabled={
                          descripcionPost.trim().length > 0 ? false : true
                        }
                        onClick={() => {
                          handlePost();
                        }}
                      >
                        {loading ? <Loader /> : "Publicar"}
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    </div>
  );
}
