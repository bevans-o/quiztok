import PageHeader from "@/app/components/ui/PageHeader";
import React, { ReactNode } from "react";

function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="w-full h-full bg-white flex flex-col ">
      <PageHeader title="New activity" />

      <div className="grow w-full min-h-0">{children}</div>
    </div>
  );
}

export default Layout;
