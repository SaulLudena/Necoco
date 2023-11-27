import { Fragment, useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineComment,
  AiOutlineExpandAlt,
  AiOutlineClose,
} from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

import CommentItem from "./commentItem";
import ReplyPostForm from "./replyPostForm";
import { useUserData } from "../helpers/useUserData";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";

export default function PostItem({ post }) {
  const {
    user: { userInfo },
  } = useUserData();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isMine, setIsMine] = useState(false);
  const [liked, setLiked] = useState(false);
  const [counter, setCounter] = useState(post.likes.length);
  const [showComments, setShowComments] = useState(false);
  const [disable, setDisable] = useState(true);
  const [postEdit, setPostEdit] = useState(post.descripcionPost);
  const firstLetter = post.usuarios.nombreUsuario[0];
  const [showMore, setShowMore] = useState(false);
  const maxLength = 250;
  const showSomeMoreCharacters = post.descripcionPost.slice(0, maxLength);

  const showSomeMoreCharactersWithEllipsis =
    post.descripcionPost.length > maxLength && showSomeMoreCharacters;

  const handleLike = async () => {
    setLiked(!liked);
    if (liked) {
      setCounter(counter - 1);
    } else {
      setCounter(counter + 1);
    }
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  function closeModalDelete() {
    setIsOpenDelete(false);
  }
  function openModalDelete() {
    setIsOpenDelete(true);
  }
  useEffect(() => {
    // Verificar si el usuario actual ha dado like al post
    const hasLiked = post.likes.some(
      (like) => like.usuarios.nombreUsuario === userInfo.nombreUsuario
    );

    if (hasLiked) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [post.likes, userInfo.nombreUsuario]);

  useEffect(() => {
    if (userInfo.idUsuario === post.fkIdUsuario) {
      setIsMine(true);
    } else {
      setIsMine(false);
    }
  }, [userInfo.idUsuario, post.fkIdUsuario, post, userInfo]);

  const handleDisableButton = (e) => {
    e.target.value.trim().length > 0 && e.target.value.trim().length < 3000
      ? setDisable(false)
      : setDisable(true);
  };

  const submitLike = async () => {
    await axios.post(" http://localhost:3001/like/likePost", {
      idUsuario: userInfo.idUsuario,
      idPost: post.idPost,
    });
  };

  const submitDislike = async () => {
    await axios.post(" http://localhost:3001/like/dislikePost", {
      idUsuario: userInfo.idUsuario,
      idPost: post.idPost,
    });
  };

  const handleEdit = async () => {
    await axios.post("http://localhost:3001/post/editPost", {
      idPost: post.idPost,
      descripcionPost: postEdit,
    });
    closeModal();
    window !== undefined && window.location.reload();
  };

  const handleDelete = async () => {
    await axios.post("http://localhost:3001/post/deletePost", {
      idPost: post.idPost,
    });
    closeModalDelete();
    window !== undefined && window.location.reload();
  };
  return (
    <>
      <li className="grid gap-4 p-5 border w-full md:w-[45rem] rounded-2xl border-zinc-300">
        <div className="flex items-center justify-between md:flex-row md:items-start">
          <div className="flex items-center gap-2">
            <p className="grid items-center justify-center w-10 h-10 text-white uppercase rounded-full select-none bg-gradient-to-br from-blue-500 to-purple-500">
              {firstLetter}
            </p>

            <p className="text-xl font-bold text-zinc-800">
              {post.usuarios.nombreUsuario}
            </p>
          </div>

          {isMine && (
            <div className="flex mt-2 ">
              <div
                className="p-3 rounded-full cursor-pointer select-none hover:bg-zinc-300 text-zinc-500"
                onClick={() => {
                  openModal();
                }}
              >
                <MdEdit />
              </div>
              <div
                className="p-3 rounded-full cursor-pointer select-none hover:bg-zinc-300 text-zinc-500"
                onClick={() => {
                  openModalDelete();
                }}
              >
                <IoMdTrash />
              </div>
            </div>
          )}
        </div>

        <div className="overflow-hidden font-normal break-words text-zinc-900">
          {showMore ? post.descripcionPost : showSomeMoreCharacters}
          {showSomeMoreCharactersWithEllipsis && (
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={toggleShowMore}
            >
              {showMore ? " Mostrar menos" : " Mostrar más"}
            </span>
          )}
        </div>

        <ul className="flex items-center text-zinc-900">
          <li
            className="flex items-center gap-1 px-3 py-2 rounded-full cursor-pointer select-none hover:bg-zinc-300"
            onClick={() => {
              handleLike();
              liked ? submitDislike() : submitLike();
            }}
          >
            {liked ? (
              <div className="text-red-500 ">
                <AiFillHeart size={20} className="scale-125 " />
              </div>
            ) : (
              <div className="text-zinc-900">
                <AiOutlineHeart size={20} className="scale-100" />
              </div>
            )}
            <p>{counter}</p>
          </li>

          <li
            className="flex items-center gap-1 px-3 py-2 rounded-full cursor-pointer select-none hover:bg-zinc-300"
            onClick={() => {
              handleShowComments();
            }}
          >
            <AiOutlineComment size={20} />
            <p>{post.respuestapost.length}</p>
            <AiOutlineExpandAlt size={20} />
          </li>
        </ul>

        <div
          className={`w-full md:w-[90%] max-w-[1600px] m-auto overflow-hidden ${
            showComments ? "max-h-auto grid" : "max-h-0"
          } `}
        >
          {post.respuestapost.map((respuestaPost) => {
            return (
              <CommentItem
                key={respuestaPost.idRespuestaPost}
                respuestaPost={respuestaPost}
              />
            );
          })}
          <ReplyPostForm
            replayTo={post.usuarios.nombreUsuario}
            postParentInfo={post}
          />
        </div>
      </li>

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
                    <div className="flex items-center">
                      <div className="flex items-center gap-2">
                        <p className="grid items-center justify-center w-10 h-10 text-white uppercase rounded-full select-none bg-gradient-to-br from-blue-500 to-purple-500">
                          {post.usuarios.nombreUsuario[0]}
                        </p>
                        <p>{post.usuarios.nombreUsuario}</p>
                      </div>

                      <AiOutlineClose
                        className="absolute text-2xl cursor-pointer top-2 right-2"
                        onClick={() => {
                          closeModal();
                        }}
                      />
                    </div>
                  </Dialog.Title>
                  <form action="" className="mt-5 mb-5">
                    <textarea
                      className="w-full text-2xl outline-none h-52 text-zinc-900 scrollbarCustom"
                      placeholder="Qué estás pensando ?"
                      cols={50}
                      onChange={(e) => {
                        setPostEdit(e.target.value);
                        handleDisableButton(e);
                      }}
                      defaultValue={post.descripcionPost}
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
                      disabled={postEdit.trim().length > 0 ? false : true}
                      onClick={() => {
                        handleEdit();
                      }}
                    >
                      {"Editar"}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
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
                    <p className="">¿Deseas eliminar tu publicación?</p>
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
