import PageHeader from "@/app/components/ui/PageHeader";
import React, { ReactNode } from "react";

function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="w-full h-full bg-white flex flex-col max-h-screen">
      <PageHeader title="New activity" />

      <div className="grow w-full">{children}</div>
    </div>
  );
}

export default Layout;
