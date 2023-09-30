import React from "react";
import { BiSolidUser } from "react-icons/bi";
import AddFriendsItem from "./addFritendsItem";
export default function AddFriends() {
  return (
    <div className="h-full px-3 py-10 shadow-xl">
      <p className="mb-5 text-xl font-medium text-white">Nuevos usuarios</p>
      <ul className="grid h-40 gap-2 ">
        <AddFriendsItem />
        <AddFriendsItem />
        <AddFriendsItem />
      </ul>
    </div>
  );
}
