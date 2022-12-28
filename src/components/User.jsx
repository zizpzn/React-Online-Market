import React from "react";

const User = ({ user }) => {
  return (
    <div className="flex items-center">
      <img
        className="w-10 h-10 rounded-full-mr-2"
        src={user.photoURL}
        alt={user.displayName}
      />
      <span className="hidden mb:block">{user.displayName}</span>
    </div>
  );
};

export default User;
