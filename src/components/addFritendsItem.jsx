import React from "react";
import { BiSolidUser } from "react-icons/bi";

export default function AddFriendsItem() {
  return (
    <li>
      <div className="flex items-center justify-between px-3 py-3 text-white border border-zinc-800 rounded-xl hover:bg-zinc-800">
        <p>John</p>
        <button className="p-1 rounded-lg bg-zinc-300">
          <i className="text-2xl text-zinc-900">
            <BiSolidUser size={20} />
          </i>
        </button>
      </div>
    </li>
  );
}
