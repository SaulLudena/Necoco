import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineComment,
  AiOutlineExpandAlt,
} from "react-icons/ai";

import CommentItem from "./commentItem";
export default function RandomPostItem() {
  const [liked, setLiked] = useState(false);
  const [counter, setCounter] = useState(132);
  const [showComments, setShowComments] = useState(false);
  return (
    <li className="grid gap-4 p-5 border w-[45rem] rounded-xl bg-zinc-850 border-zinc-800">
      <div className="flex items-center gap-2">
        <p className="grid items-center justify-center w-10 h-10 bg-white rounded-full">
          S
        </p>
        <p className="text-xl font-bold text-zinc-200">Sofia</p>
      </div>

      <div className="text-white ">
        <p>
          Hoy fue un excelente día, lástitima que no siempre es así xDtima que
          no siempre es así xDtima que no siempre es así xDma que no siempre es
          así xD. no siempre es así xDtima que no siempre es así xDma que no
          siempre es así xD. no siempre es así xDtima que no siempre es así xDma
        </p>
      </div>

      <ul className="flex items-center text-white">
        <li
          className="flex items-center gap-1 px-3 py-2 rounded-full cursor-pointer select-none hover:bg-zinc-600"
          onClick={() => {
            setLiked(!liked);
            if (liked) {
              setCounter(counter - 1);
            } else {
              setCounter(counter + 1);
            }
          }}
        >
          {liked ? (
            <div className="text-red-500">
              <AiFillHeart size={20} className="scale-125 " />
            </div>
          ) : (
            <div className="text-zinc-200 ">
              <AiOutlineHeart size={20} className="scale-100" />
            </div>
          )}
          <p>{counter}</p>
        </li>
        <li className="flex items-center gap-1 px-3 py-2 rounded-full cursor-pointer select-none hover:bg-zinc-600">
          <AiOutlineComment size={20} />
          <p>4</p>
        </li>
        <li
          className="flex items-center gap-1 px-3 py-2 rounded-full cursor-pointer select-none hover:bg-zinc-600"
          onClick={() => {
            setShowComments(!showComments);
          }}
        >
          <AiOutlineExpandAlt size={20} />
        </li>
      </ul>

      <div
        className={`w-[80%] max-w-[1600px] m-auto gap-1  ${
          showComments ? "grid" : "hidden"
        }`}
      >
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
    </li>
  );
}
