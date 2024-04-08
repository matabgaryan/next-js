import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import Image from "next/image";
const ErrorPage = () => {
  return (
    <DefaultLayout>
      <div className="flex justify-center">
        <h1>Error Page 404</h1>
      </div>
    </DefaultLayout>
  );
};

export default ErrorPage;
