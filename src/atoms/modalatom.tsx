import { atom } from "jotai";

type uiModalType = {
  modal: null | boolean;
  toast: null;
};

export const uiModal = atom<uiModalType>({
  modal: null,
  toast: null,
});
