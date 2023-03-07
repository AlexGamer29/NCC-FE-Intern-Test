import React from "react";
import "./SideBar.css"

function SideBar() {
  return (
    <aside class="aside navbar__active">
      <ul>
        <li class="tag__link active">Home</li>
        <li class="tag__link">Services</li>
        <li class="tag__link">News</li>
        <li class="tag__link">Blog</li>
        <li class="tag__link">Contact</li>
      </ul>
    </aside>
  );
}

export default SideBar;
