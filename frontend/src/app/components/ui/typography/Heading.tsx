import React from "react";

function Heading({ children }: { children?: React.ReactNode }) {
  return <h1 className="font-bold tracking-[-0.0125em] text-lg text-neutral-900">{children}</h1>;
}

export default Heading;
