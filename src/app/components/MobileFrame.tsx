import React from "react";

// layout frame that restricts large screens to mobile size
function MobileFrame({ children }: { children?: React.ReactNode }) {
  return (
    <main className="bg-gray-950 w-screen h-screen flex justify-center items-center">
      <div className="bg-gray-900 border-gray-800 sm:p-4 sm:rounded-lg sm:border">
        <div className="w-screen h-screen sm:max-w-[393px] sm:max-h-[852px] sm:rounded-md">{children}</div>
      </div>
    </main>
  );
}

export default MobileFrame;
