import React from "react";

function Layout({ children, select }: { children: React.ReactNode; select: React.ReactNode }) {
  return (
    <>
      {children}
      {select}
    </>
  );
}

export default Layout;
