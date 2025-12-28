import { createPortal } from "react-dom";
import JobModal from "../components/JobModal";

const mountElement = document.getElementById("portal");

const Modal = () => {
  return <div>{createPortal(<JobModal />, mountElement!)}</div>;
};

export default Modal;
