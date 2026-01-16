import { useAtomValue } from "jotai";
import { jobApplications } from "../atoms/modalatom";

const JobList = () => {
  const applications = useAtomValue(jobApplications);

  if (applications.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center text-gray-500">
        No applications yet. Add one to get started.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {applications.map((app) => (
        <div
          key={app.id}
          className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-sm text-gray-500">Company</div>
              <div className="font-semibold text-gray-900">
                {app.company || "Not set"}
              </div>
            </div>
            <div className="text-sm text-gray-500">{app.status}</div>
          </div>
          <div className="mt-2 grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
            <div>
              <div className="text-xs text-gray-500">Position</div>
              <div>{app.position || "Not set"}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Date Applied</div>
              <div>{app.dataApplied || "Not set"}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Salary</div>
              <div>{app.salary || "Not set"}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Location</div>
              <div>{app.location || "Not set"}</div>
            </div>
            <div className="sm:col-span-2">
              <div className="text-xs text-gray-500">Job URL</div>
              <div className="break-words">{app.url || "Not set"}</div>
            </div>
            <div className="sm:col-span-2">
              <div className="text-xs text-gray-500">Notes</div>
              <div className="whitespace-pre-wrap">
                {app.notes || "Not set"}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
