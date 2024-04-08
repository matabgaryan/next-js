import { useState } from "react";
import { getDomains } from "@/core/services/requests/domains";
import { useQuery } from "react-query";

export const useDomains = () => {
  const [filterQuery, setFilterQuery] = useState({
    type: null,
    name: null,
    country: null,
    search: null,
  });
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["domainsList", { ...filterQuery }],
    queryFn: () => getDomains(filterQuery),
  });

  const handleChangeFilterQuery = (name: string, value: any) => {
    setFilterQuery((prevState) => ({ ...prevState, [name]: value }));
  };

  return {
    domains: data,
    isLoading,
    isFetching,
    isError,
    handleChangeFilterQuery,
  };
};
