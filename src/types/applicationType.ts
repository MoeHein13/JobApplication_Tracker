export type Application = {
  id: string;
  company: string;
  position: string;
  status: ApplicationStatus;
  dataApplied: string;
  salary?: string;
  location?: string;
  notes?: string;
  url?: string;
};

export type ApplicationStatus =
  | "Applied"
  | "Interview"
  | "Offer"
  | "Rejected"
  | "Wishlist";

export type ApplicationForm = Omit<Application, "id">;
