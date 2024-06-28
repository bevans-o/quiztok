import React from "react";

function Subheading({ children }: { children?: React.ReactNode }) {
  return <h2 className="font-semibold tracking-[-0.0125em] text-neutral-800 truncate">{children}</h2>;
}

export default Subheading;
