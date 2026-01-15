import { atom } from "jotai";
import { type Application } from "../types/applicationType";

type uiModalType = {
  modal: null | boolean;
  toast: null;
};

export const uiModal = atom<uiModalType>({
  modal: null,
  toast: null,
});

export const jobApplications = atom<Application[]>([]);
