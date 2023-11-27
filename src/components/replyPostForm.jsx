import React, { useEffect, useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { useUserData } from "../helpers/useUserData";
import axios from "axios";
export default function ReplyPostForm({ replayTo, postParentInfo }) {
  const { user } = useUserData();
  const [reply, setReply] = useState("");

  const addReply = async () => {
    await axios.post("http://localhost:3001/reply/replyPost", {
      idPost: postParentInfo.idPost,
      idUsuario: user.userInfo.idUsuario,
      descripcionRespuesta: reply,
    });
    window !== undefined && window.location.reload();
  };
  return (
    <div className="px-5 ">
      <div className="flex items-center gap-2">
        <p className="grid items-center justify-center w-10 h-10 text-white rounded-full bg-zinc-800">
          {user.userInfo.nombreUsuario[0]}
        </p>
        <div className="flex items-center pr-3 rounded-lg cursor-pointer w-96 bg-zinc-200 group">
          <textarea
            rows="auto"
            placeholder={`Responder a ${replayTo}`}
            className="w-full px-5 py-3 rounded-md outline-none cursor-pointer bg-zinc-200 text-zinc-900 "
            onChange={(e) => {
              setReply(e.target.value);
            }}
          ></textarea>
          {reply.length > 0 ? (
            <div
              className="p-3 text-blue-700 rounded-full hover:bg-zinc-300 "
              onClick={() => {
                addReply();
              }}
            >
              <BsSendFill />
            </div>
          ) : (
            <div className="p-3 rounded-full cursor-not-allowed text-zinc-700 hover:bg-zinc-300">
              <BsSendFill />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
