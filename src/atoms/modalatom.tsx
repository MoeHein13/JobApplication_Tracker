import { atom } from "jotai";
import { type ApplicationForm } from "../types/applicationType";

type uiModalType = {
  modal: null | boolean;
  toast: null;
};

export const uiModal = atom<uiModalType>({
  modal: null,
  toast: null,
});

export const jobApplications = atom<ApplicationForm>({
  company: "",
  position: "",
  status: "Applied",
  dataApplied: "",
  salary: "",
  location: "",
  url: "",
  notes: "",
});
