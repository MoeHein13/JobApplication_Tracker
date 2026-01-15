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
          <div className="flex items-center justify-between">
            <div className="font-semibold text-gray-900">{app.company}</div>
            <div className="text-sm text-gray-500">{app.status}</div>
          </div>
          <div className="text-sm text-gray-600">{app.position}</div>
          <div className="mt-2 text-xs text-gray-500">
            Applied: {app.dataApplied || "Not set"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
