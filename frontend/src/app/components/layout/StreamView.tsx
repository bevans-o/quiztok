import React from "react";

function StreamView({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-full h-full">
      <div className="absolute w-full h-full inset-0 z-10">{children}</div>
      <div className="absolute w-full h-full bg-gradient-to-t from-neutral-900 to-neutral-800">
        <img src={"/background.png"} className="brightness-90 w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default StreamView;
