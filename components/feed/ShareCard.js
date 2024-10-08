import { api } from "@/service/api";
import Media from "../icons/Media";
import Profile from "../icons/Profile";
import { useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { io } from "socket.io-client";
import GeneralDialog from "../global/GeneralDialog";
import { setDialogValue } from "@/store/globalActions";
import AddMediaContent from "./AddMediaContent";

const ShareCard = () => {
  const socket = io("http://localhost:3001");
  const { user } = useSelector((state) => state.globalState);
  const [text, setText] = useState(null);
  const sendUpdateRequest = async () => {
    await socket.emit("createPostData");
  };
  const createPost = async () => {
    if (text) {
      const body = {
        user: user?._id,
        content: text,
      };
      const { response, error } = await api({
        url: "createUserPost",
        body,
        type: "post",
      });

      if (!error) {
        await sendUpdateRequest();
        toast.success(response?.message);
      } else {
        toast.error(err);
      }
      setText("");
    }
  };
  return (
    <>
      <div className="w-full flex flex-col gap-y-4 bg-white rounded-normal h-[154px] border border-gray-30 px-7 py-5">
        <div className="flex items-start gap-x-4 h-16">
          <Profile width={40} height={40} />
          <textarea
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text || ""}
            placeholder="What's on your mind?"
            className="border-b border-gray-40 placeholder:text-black-30 text-sm text-black-30 w-full outline-none pb-5 mt-4 resize-none"
          />
        </div>
        <div className="flex items-center justify-between pl-14 mt-3 ">
          <button
            className="flex items-center gap-x-2"
            onClick={() => setDialogValue("addMedia")}
          >
            <Media />
            <p className="text-black-80 text-sm">Add Media</p>
          </button>
          <button
            disabled={!text}
            type="button"
            onClick={createPost}
            className="bg-blue-90 lowercase hover:cursor-pointer px-3 text-white text-sm rounded-xl flex justify-center items-center  h-8"
          >
            Share
          </button>
        </div>
      </div>
      <GeneralDialog openKey="addMedia" title="Upload a media">
        <AddMediaContent />
      </GeneralDialog>
    </>
  );
};

export default ShareCard;
