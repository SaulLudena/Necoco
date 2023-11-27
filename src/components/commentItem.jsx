import { IoMdTrash } from "react-icons/io";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { useUserData } from "../helpers/useUserData";

export default function CommentItem({ respuestaPost }) {
  const {
    user: { userInfo },
  } = useUserData();
  const [isMineComment, setIsMineComment] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const maxLength = 165;
  const description = respuestaPost.descripcionRespuesta;

  const showSomeWords =
    description.length > maxLength
      ? description.slice(0, maxLength)
      : description;

  const showSomeWordsWithEllipsis = description.length > maxLength;

  const toggleShowComment = () => {
    setShowMore(!showMore);
  };

  const closeModalDelete = () => setIsOpenDelete(false);
  const openModalDelete = () => setIsOpenDelete(true);

  const handleDelete = async () => {
    const response = await axios.post(
      "http://localhost:3001/reply/deleteReply",
      {
        idRespuestaPost: respuestaPost.idRespuestaPost,
      }
    );
    closeModalDelete();
    window !== undefined && window.location.reload();
  };

  useEffect(() => {
    respuestaPost.usuarios.nombreUsuario === userInfo.nombreUsuario
      ? setIsMineComment(true)
      : setIsMineComment(false);
  }, [respuestaPost.usuarios.nombreUsuario, userInfo.nombreUsuario]);

  return (
    <>
      <div className="flex items-center gap-2 px-5 py-2 rounded-lg ">
        <div className="flex items-start gap-2 rounded-md bg-zinc-850 border-zinc-800">
          <div className="">
            <p className="grid items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-zinc-200">
              {respuestaPost.usuarios.nombreUsuario[0]}
            </p>
          </div>
          <div className="overflow-hidden font-normal break-words">
            <div className="p-3 overflow-hidden text-sm font-normal break-words rounded-lg text-zinc-900 bg-zinc-200 w-96">
              <p className="font-bold ">
                {respuestaPost.usuarios.nombreUsuario}
              </p>
              {showMore ? description : showSomeWords}
              {showSomeWordsWithEllipsis && (
                <div
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={toggleShowComment}
                >
                  {showMore ? " Mostrar menos" : " Mostrar más"}
                </div>
              )}
            </div>
          </div>
        </div>

        {isMineComment && (
          <div
            className="p-3 rounded-full cursor-pointer select-none hover:bg-zinc-300 text-zinc-500"
            onClick={() => {
              openModalDelete();
            }}
          >
            <IoMdTrash />
          </div>
        )}
      </div>
      <Transition appear show={isOpenDelete} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalDelete}>
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
                  ></Dialog.Title>
                  <div className="mt-3">
                    <p className="">¿Deseas eliminar tu comentario?</p>
                  </div>

                  <div className="flex gap-5 mt-4">
                    <button
                      type="button"
                      className="flex justify-center w-full px-5 py-3 text-white rounded-lg bg-rose-500 "
                      onClick={() => {
                        handleDelete();
                      }}
                    >
                      Borrar
                    </button>
                    <button
                      type="button"
                      className="flex justify-center w-full px-5 py-3 text-white rounded-lg bg-zinc-600 "
                      onClick={() => {
                        closeModalDelete();
                      }}
                    >
                      Cancelar
                    </button>
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
