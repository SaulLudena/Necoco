import React from "react";
import RandomPostItem from "./randomPostItem";

export default function FeedRandomPosts() {
  return (
    <div className="grid justify-center">
      <ul className="grid w-full gap-5 pb-5 list-none">
        <RandomPostItem />
        <RandomPostItem />
        <RandomPostItem />
      </ul>
    </div>
  );
}
