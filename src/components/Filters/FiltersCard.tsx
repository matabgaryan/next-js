import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import SearchInput from "@/components/FormElements/Inputs/SearchInput";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";

const FiltersCard = ({ children }: { children: any }) => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-3">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        Filters
      </h4>
      <div className="px-7.5">{children}</div>
    </div>
  );
};

export default FiltersCard;
