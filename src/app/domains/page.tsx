"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableThree from "@/components/Tables/TableThree";
import FiltersCard from "@/components/Filters/FiltersCard";
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import SearchInput from "@/components/FormElements/Inputs/SearchInput";
import React from "react";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import { useDomains } from "@/hooks/data/useDomains";
import DataLoader from "@/components/common/DataLoader";
import ErrorPage from "@/components/common/ErrorPage";

const filterOptions = [
  { label: "Option1", value: "value1" },
  { label: "Option2", value: "value2" },
  { label: "Option3", value: "value3" },
  { label: "Option4", value: "value4" },
];

const DomainsPage = () => {
  const { domains, isError, isFetching, handleChangeFilterQuery } =
    useDomains();

  if (isError) {
    return <ErrorPage />;
  }
  return (
    <DefaultLayout>
      <>
        <Breadcrumb pageName="Domains" />
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <FiltersCard>
            <div className="relative">
              <div className="mb-4.5">
                <SelectGroupOne
                  name="type"
                  placeholder="Select Type"
                  onChange={handleChangeFilterQuery}
                  options={filterOptions}
                />
              </div>
              <div className="mb-4.5">
                <SelectGroupOne
                  name="name"
                  placeholder="Select Name"
                  onChange={handleChangeFilterQuery}
                  options={filterOptions}
                />
              </div>
              <div className="mb-4.5">
                <SelectGroupOne
                  name="Category"
                  placeholder="Select Category"
                  onChange={handleChangeFilterQuery}
                  options={filterOptions}
                />
              </div>
              <div className="mb-4.5">
                <SearchInput name="search" onChange={handleChangeFilterQuery} />
              </div>
              <div className="mb-4.5">
                <DatePickerOne />
              </div>
            </div>
          </FiltersCard>
          <div className="col-span-12 xl:col-span-8">
            {isFetching ? (
              <DataLoader />
            ) : domains ? (
              <TableThree data={domains} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </>
    </DefaultLayout>
  );
};

export default DomainsPage;
