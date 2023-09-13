import React from "react";
import "./Alert.css";
import { BiError } from "react-icons/bi";
import { AiFillWarning } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

export default function Alert({ children, type }) {
  const getData = (type) => {
    switch (type) {
      case "success":
        return { type: "success", icon: <TiTick size={24} /> };
      case "error":
        return { type: "error", icon: <BiError size={24} /> };
      case "warning":
        return { type: "warning", icon: <AiFillWarning size={24} /> };
      default:
        return { type: "success", icon: <TiTick size={24} /> };
    }
  };
  return (
    <div className={getData(type)?.type}>
      {getData(type)?.icon}
      <span>{children}</span>
    </div>
  );
}
