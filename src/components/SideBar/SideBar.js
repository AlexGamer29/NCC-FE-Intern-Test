import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <aside className="aside navbar__active">
      <ul>
        <li className="tag__link active">Home</li>
        <li className="tag__link">Services</li>
        <li className="tag__link">News</li>
        <li className="tag__link">Blog</li>
        <li className="tag__link">Contact</li>
      </ul>
    </aside>
  );
}

export default SideBar;
