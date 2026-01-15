import { useSetAtom } from "jotai";
import { jobApplications, uiModal } from "../atoms/modalatom";
import { X } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  type Application,
  type ApplicationForm,
  type ApplicationStatus,
} from "../types/applicationType";

const JobModal = () => {
  const setModal = useSetAtom(uiModal);
  const setJobApplications = useSetAtom(jobApplications);
  const closeModal = () => {
    setModal((prev) => ({ ...prev, modal: false }));
  };

  const initialForm: ApplicationForm = {
    company: "",
    position: "",
    status: "Applied",
    dataApplied: "",
    salary: "",
    location: "",
    url: "",
    notes: "",
  };

  const [applicationForm, setApplicationForm] =
    useState<ApplicationForm>(initialForm);
  const statusOption: ApplicationStatus[] = [
    "Interview",
    "Applied",
    "Rejected",
    "Offer",
    "Wishlist",
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setApplicationForm((prev) => ({
      ...prev,
      [name]: name === "status" ? (value as ApplicationStatus) : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newApplication: Application = {
      id: crypto.randomUUID(),
      ...applicationForm,
    };
    setJobApplications((prev) => [newApplication, ...prev]);
    setApplicationForm(initialForm);
    closeModal();
  };

  const statusRender = (
    <select
      id="status"
      name="status"
      className="outline-1 border-gray-300 rounded-md p-2 text-gray-400"
      value={applicationForm.status}
      onChange={handleChange}
    >
      {statusOption.map((status) => {
        return (
          <option key={status} value={status}>
            {status}
          </option>
        );
      })}
    </select>
  );

  return (
    <form
      className="flex justify-center items-center z-10 inset-0 fixed "
      onClick={closeModal}
      onSubmit={handleSubmit}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-xl flex flex-col justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h1>Job Application Adding</h1>
          <button
            onClick={closeModal}
            className="cursor-pointer  p-2 hover:bg-gray-200 hover:rounded-full"
          >
            <X />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-center gap-2 w-full m-3">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              placeholder="eg.Acme Corp"
              id="company"
              name="company"
              className="outline-1 border-gray-300 rounded-md p-2 text-gray-400"
              value={applicationForm.company}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col justify-center gap-2 w-full m-3">
            <label htmlFor="position">Position</label>
            <input
              value={applicationForm.position}
              onChange={handleChange}
              type="text"
              placeholder="eg.Frontend Engineer"
              id="position"
              name="position"
              className="outline-1 border-gray-300 rounded-md p-2 text-gray-400"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-center gap-2 w-full m-3">
            <label htmlFor="status">Status</label>
            {statusRender}
          </div>
          <div className="flex flex-col justify-center gap-2 w-full m-3">
            <label htmlFor="date">Date Applied</label>
            <input
              value={applicationForm.dataApplied}
              onChange={handleChange}
              type="date"
              placeholder="eg.Frontend Engineer"
              id="date"
              name="dataApplied"
              className="outline-1 border-gray-300 rounded-md p-2 text-gray-400"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-center gap-2 w-full m-3">
            <label htmlFor="salary">Salary(Optional)</label>
            <input
              value={applicationForm.salary}
              onChange={handleChange}
              type="text"
              placeholder="eg.Acme Corp"
              id="salary"
              name="salary"
              className="outline-1 border-gray-300 rounded-md p-2 text-gray-400"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 w-full m-3">
            <label htmlFor="location">Location(Optional)</label>
            <input
              value={applicationForm.location}
              onChange={handleChange}
              type="text"
              placeholder="eg.Frontend Engineer"
              id="location"
              name="location"
              className="outline-1 border-gray-300 rounded-md p-2 text-gray-400"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 w-full m-3">
          <label htmlFor="joburl">Job URL(Optional)</label>
          <input
            value={applicationForm.url}
            onChange={handleChange}
            type="text"
            placeholder="https://"
            id="joburl"
            name="url"
            className="outline-1 border-gray-300 rounded-md p-2 text-gray-400"
          />
        </div>
        <div className="flex flex-col justify-center gap-2 w-full m-3">
          <label htmlFor="notes">Notes</label>
          <textarea
            value={applicationForm.notes}
            onChange={handleChange}
            placeholder="Interview Details,contact,etc"
            id="notes"
            name="notes"
            className="outline-1 border-gray-300 rounded-md p-2 text-gray-400"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={closeModal}
            className="px-3 py-2 border border-gray-400 rounded-md cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-3 py-2 border border-gray-400 rounded-md text-white bg-black cursor-pointer"
          >
            Add Application
          </button>
        </div>
      </div>
      {/* <div className="rounded-xl p-5 border border-gray-400 max-w-72 ">
      </div> */}
    </form>
  );
};

export default JobModal;
