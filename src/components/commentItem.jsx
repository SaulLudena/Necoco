import React from "react";
import { SlOptions } from "react-icons/sl";
export default function CommentItem() {
  return (
    <div className="flex items-center gap-2 p-5 border rounded-lg border-zinc-800">
      <div className="flex items-start gap-2 rounded-md bg-zinc-850 border-zinc-800">
        <div className="">
          <p className="grid items-center justify-center w-10 h-10 bg-white rounded-full">
            S
          </p>
        </div>
        <p className="p-3 text-sm rounded-lg text-zinc-200 bg-zinc-800">
          Hoy fue un excelente día, lástitima que no siempre es así xDtima que
        </p>
      </div>
      <div className="p-2 text-white rounded-full cursor-pointer hover:bg-zinc-200 hover:text-zinc-800 ">
        <SlOptions className="" />
      </div>
    </div>
  );
}
