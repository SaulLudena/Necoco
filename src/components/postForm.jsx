import React from "react";

export default function PostForm() {
  return (
    <div className="grid justify-center py-10">
      <form action="" className="flex items-center gap-2">
        <p className="grid items-center justify-center w-10 h-10 font-bold rounded-full bg-zinc-200">
          J
        </p>
        <div className="px-5 py-3 text-white rounded-full cursor-pointer bg-zinc-600 hover:bg-zinc-500 w-96">
          <p>¿En qué estás pensando?</p>
        </div>
      </form>
    </div>
  );
}
