import { requestService } from "../RequestService";
import { Package } from "@/types/package";

const fakeDomains: Package[] = [
  {
    name: "Free package",
    price: 0.0,
    invoiceDate: `Jan 13,2023`,
    status: "Paid",
  },
  {
    name: "Standard Package",
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: "Paid",
  },
  {
    name: "Business Package",
    price: 99.0,
    invoiceDate: `Jan 13,2023`,
    status: "Unpaid",
  },
  {
    name: "Standard Package",
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: "Pending",
  },
];

export const getDomains = async (filterQuery: any) => {
  console.log(filterQuery, "filterQuery");
  const response = await requestService.get("/products?limit=20");
  return fakeDomains;
};
