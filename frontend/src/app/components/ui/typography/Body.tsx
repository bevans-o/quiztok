import React from "react";

function Body({ children }: { children?: React.ReactNode }) {
  return <p className="tracking-[-0.0125em] text-xs text-neutral-600">{children}</p>;
}

export default Body;
