import { useSetAtom } from "jotai";
import { uiModal } from "../atoms/modalatom";
import { X } from "lucide-react";
import { useState } from "react";
import {
  type ApplicationForm,
  type ApplicationStatus,
} from "../types/applicationType";

const JobModal = () => {
  const setModal = useSetAtom(uiModal);
  const closeModal = () => {
    setModal((prev) => ({ ...prev, modal: false }));
  };

  const [applicationForm, setApplicationForm] = useState<ApplicationForm>({
    company: "",
    position: "",
    status: "Applied",
    dataApplied: "",
    salary: "",
    location: "",
    url: "",
    notes: "",
  });
  const statusOption = ["Interview", "Applied", "Rejected", "Offer"];

  const statusRender = (
    <select
      id="status"
      className="outline-1 border-gray-300 rounded-md p-2 text-gray-400"
      value={applicationForm.status}
      onChange={(e) => {
        setApplicationForm({
          ...applicationForm,
          status: e.target.value as ApplicationStatus,
        });
      }}
    >
      {statusOption.map((status) => {
        return <option key={status}> {status}</option>;
      })}
    </select>
  );

  return (
    <form
      className="flex justify-center items-center z-10 inset-0 fixed "
      onClick={closeModal}
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
              className="outline-1 border-gray-300 rounded-md p-2 text-gray-400"
              value={applicationForm.company}
              onChange={(e) =>
                setApplicationForm({
                  ...applicationForm,
                  company: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col justify-center gap-2 w-full m-3">
            <label htmlFor="position">Position</label>
            <input
              value={applicationForm.position}
              onChange={(e) => {
                setApplicationForm({
                  ...applicationForm,
                  position: e.target.value,
                });
              }}
              type="text"
              placeholder="eg.Frontend Engineer"
              id="position"
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
              onChange={(e) => {
                setApplicationForm({
                  ...applicationForm,
                  dataApplied: e.target.value,
                });
              }}
              type="date"
              placeholder="eg.Frontend Engineer"
              id="date"
              className="outline-1 border-gray-300 rounded-md p-2 text-gray-400"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-center gap-2 w-full m-3">
            <label htmlFor="salary">Salary(Optional)</label>
            <input
              value={applicationForm.salary}
              onChange={(e) => {
                setApplicationForm({
                  ...applicationForm,
                  salary: e.target.value,
                });
              }}
              type="text"
              placeholder="eg.Acme Corp"
              id="salary"
              className="outline-1 border-gray-300 rounded-md p-2 text-gray-400"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 w-full m-3">
            <label htmlFor="location">Location(Optional)</label>
            <input
              value={applicationForm.location}
              onChange={(e) => {
                setApplicationForm({
                  ...applicationForm,
                  location: e.target.value,
                });
              }}
              type="text"
              placeholder="eg.Frontend Engineer"
              id="location"
              className="outline-1 border-gray-300 rounded-md p-2 text-gray-400"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 w-full m-3">
          <label htmlFor="joburl">Job URL(Optional)</label>
          <input
            value={applicationForm.url}
            onChange={(e) => {
              setApplicationForm({
                ...applicationForm,
                url: e.target.value,
              });
            }}
            type="text"
            placeholder="https://"
            id="joburl"
            className="outline-1 border-gray-300 rounded-md p-2 text-gray-400"
          />
        </div>
        <div className="flex flex-col justify-center gap-2 w-full m-3">
          <label htmlFor="notes">Notes</label>
          <textarea
            value={applicationForm.notes}
            onChange={(e) => {
              setApplicationForm({
                ...applicationForm,
                notes: e.target.value,
              });
            }}
            placeholder="Interview Details,contact,etc"
            id="notes"
            className="outline-1 border-gray-300 rounded-md p-2 text-gray-400"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button className="px-3 py-2 border border-gray-400 rounded-md cursor-pointer">
            Cancel
          </button>
          <button className="px-3 py-2 border border-gray-400 rounded-md text-white bg-black cursor-pointer">
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
