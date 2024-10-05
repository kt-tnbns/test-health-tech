import React from "react";

const Navbar = () => {
  return (
    <div className="flex space-x-2 py-4 justify-end px-4">
      <nav className="space-x-2 border-b-2 ">
        <button className="hover:text-blue-600  ">
          <a href="/">Home</a>
        </button>
        <button className="hover:text-blue-600  ">
          <a href="/pages/coupon">Coupon</a>
        </button>
        <button className="hover:text-blue-600  ">
          <a href="/pages/notification">Notification</a>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
