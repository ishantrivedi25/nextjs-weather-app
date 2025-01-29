"use client";

import React from "react";

import ThemeSwitchButton from "./ThemeSwitchButton/ThemeSwitchButton";
import SearchDialog from "./SearchDialog/SearchDialog";

function Navbar() {
  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />

        <div className="btn-group flex items-center gap-2">
          <ThemeSwitchButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
