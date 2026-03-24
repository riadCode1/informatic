import { logoutAccount } from "@/lib/actions/user.action";
import React from "react";

const Modal = ({
  username,
  avatar,
  isOpen,
  onClose,
}: {
  username: string;
  avatar: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="  absolute rounded-md  px-4 py-4 right-25 top-30 bg-[#0d0e0df3]     items-center justify-center z-999">
      <div className=" flex flex-row gap-2">
        <img
          style={{
            width: 30,
            height: 30,
            objectFit: "cover",
            borderRadius: 50,
          }}
          src={avatar}
          alt="Avatar"
        />
        <h2 className=" text-xl font-bold mb-4">{username}</h2>
      </div>

      <div className=" flex flex-col gap-3">
        <h2 className=" ">Account Settings</h2>
        <h2 className=" ">Language: English</h2>
        <h2 className=" ">Theme: Light</h2>
        <h2>Help</h2>
        <h2>Contact Us</h2>
        <button
          onClick={logoutAccount}
          className=" bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      
    </div>
  );
};

export default Modal;
