import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Nueva Lista",
    path: "/",
    icon: <FaIcons.FaList />,
    cName: "nav-text",
  },
  {
    title: "Completadas",
    path: "/",
    icon: <FaIcons.FaCheckDouble />,
    cName: "nav-text",
  },
  {
    title: "Historial",
    path: "/",
    icon: <FaIcons.FaHistory />,
    cName: "nav-text",
  },
  {
    title: "Mis Tableros",
    path: "products",
    icon: <IoIcons.IoMdClipboard />,
    cName: "nav-text",
  }
];