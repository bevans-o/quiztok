import React from "react";

function Detail({ children }: { children?: React.ReactNode }) {
  return (
    <p className="font-medium tracking-[-0.0125em] text-xs text-neutral-400 italic truncate pr-[1px]">{children}</p>
  );
}

export default Detail;
