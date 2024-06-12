import React from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="flex justify-end mt-auto">
      {!loading ? (
        <RiLogoutBoxRLine
          className=" mr-4 h-10 text-2xl cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
