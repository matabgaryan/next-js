"use client";
import React from "react";
import FiltersCard from "@/components/Filters/FiltersCard";
import TableTwo from "@/components/Tables/TableTwo";
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import SearchInput from "@/components/FormElements/Inputs/SearchInput";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";

const Index: React.FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <FiltersCard>
          <div className="relative">
            <div className="mb-4.5">
              <SelectGroupOne />
            </div>
            <div className="mb-4.5">
              <SelectGroupOne />
            </div>
            <div className="mb-4.5">
              <SelectGroupOne />
            </div>
            <div className="mb-4.5">
              <SelectGroupOne />
            </div>
            <div className="mb-4.5">
              <SearchInput />
            </div>
            <div className="mb-4.5">
              <DatePickerOne />
            </div>
          </div>
        </FiltersCard>
        <div className="col-span-12 xl:col-span-8">
          <TableTwo />
        </div>
      </div>
    </>
  );
};

export default Index;
