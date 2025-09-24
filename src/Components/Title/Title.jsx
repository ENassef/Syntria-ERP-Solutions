import React from "react";
import { useLocation } from "react-router-dom";

export default function Title() {
  const location = useLocation();
  const currentPathname = location.pathname;
  const pageName = currentPathname.replace("/", "");
  const formattedPageName = pageName
    ? pageName.charAt(0).toUpperCase() + pageName.slice(1)
    : "Home";

  return (
    <div>
      <div className="text-center bg-Dark-Blue text-white p-10">
        <h1 className="text-Peach-Red text-4xl font-bold">
          {formattedPageName}
        </h1>
        <p>Home / {formattedPageName} </p>
      </div>
    </div>
  );
}
