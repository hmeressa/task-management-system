/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { CLIENT_SIDEBAR_LINKS } from "../../utils/constants";

const linkClasses ="flex items-center gap-2 px-3 py-2 font-medium hover:no-underline h-14";

const ClientSidebar = () => {
  return (
    <div className="hidden sm:flex flex-col col-span-1 md:col-span-2 px-2 md:px-4 py-6 bg-gradient-to-br from-gray-700 cursor-pointer to-gray-900 text-[#0F3A62] overflow-hidden scrollbar-hide">
      
      <div className="flex-1 py-8 px-8 flex-col gap-0.5 text-lg font-serif mt-16">
      <Link to={"/"}>
            <img
              className="w-[50px] h-[50px] text-white ml-10 mb-5"
              onClick={() => {
                setIsActive(1);
              }}
              src="https://scm.ienetworks.co/static/media/White.c831409c3eec4e852dfb.png"
              alt="IE Networks"
            />
          </Link>
        {CLIENT_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={`/${item.path}`}
      className={classNames(
        pathname.includes(item.path)
          ? "flex bg-gray-200 text-gray-950 rounded space-y-4 pr-60 "
          : "text-white",
        linkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      <span >{item.label}</span>
    </Link>
  );
}

export default ClientSidebar;
