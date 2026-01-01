import { createPortal } from "react-dom";
import JobModal from "../components/JobModal";
import { useAtom } from "jotai";
import { uiModal } from "../atoms/modalatom";

const mountElement = document.getElementById("portal");

const Modal = () => {
  const [ui] = useAtom(uiModal);

  return createPortal(<> {ui.modal && <JobModal />}</>, mountElement!);
};

export default Modal;
