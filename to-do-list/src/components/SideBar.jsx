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
    path: "Completadas",
    icon: <FaIcons.FaCheckDouble />,
    cName: "nav-text",
  },
  {
    title: "Historial",
    path: "Historial",
    icon: <FaIcons.FaHistory />,
    cName: "nav-text",
  },
  {
    title: "Mis Tableros",
    path: "MisTableros",
    icon: <IoIcons.IoMdClipboard />,
    cName: "nav-text",
  }
];