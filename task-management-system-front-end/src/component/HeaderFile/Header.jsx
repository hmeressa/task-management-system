/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import React from "react";
import SidebarHeader from "../Sidebar/SidebarHeader";
import NavComponent from "../NavComponent";
export function Header({}) {
  return <div className="flex items-center text-gray-800 font-serif text-lg bg-gray-200 fixed z-20 shadow-md  w-full">
              <div className=' w-1/6 bg-gradient-to-br from-gray-700 cursor-pointer to-gray-900'>
                <SidebarHeader  />
              </div>
              <div className='w-5/6 bg-white p-5 '>
                <NavComponent/>
              </div>
        </div>;
}
  