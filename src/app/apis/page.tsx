"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableThree from "@/components/Tables/TableThree";
import FiltersCard from "@/components/Filters/FiltersCard";
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import SearchInput from "@/components/FormElements/Inputs/SearchInput";
import React from "react";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";

const ApisPage = () => {
  return (
    <DefaultLayout>
      <>
        <Breadcrumb pageName="API's" />
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
            <TableThree />
          </div>
        </div>
      </>
    </DefaultLayout>
  );
};

export default ApisPage;
