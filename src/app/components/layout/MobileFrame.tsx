import React from "react";

// layout frame that restricts large screens to mobile size
function MobileFrame({ children }: { children?: React.ReactNode }) {
  return (
    <main className="bg-neutral-950 w-screen h-screen flex justify-center items-center">
      <div className="bg-gradient-to-b from-neutral-800 to-neutral-900 border-neutral-800 shadow-md sm:p-1 sm:rounded-[48px] sm:border">
        <div className="w-screen h-screen sm:max-w-[393px] sm:max-h-[852px] sm:rounded-[44px] overflow-hidden sm:p-[2px] bg-neutral-950">
          <div className="w-full h-full overflow-hidden sm:rounded-[42px] relative">{children}</div>
        </div>
      </div>

      <div className="hidden sm:block absolute top-2 left-2 text-neutral-600">
        <div className="font-bold">QuizTok</div>
        <div className="flex flex-col gap-[2px] pt-2">
          <div className="text-xs">Laura Yang</div>
          <div className="text-xs">James Lee</div>
          <div className="text-xs">Cathy Wang</div>
          <div className="text-xs">Bobo Lau</div>
          <div className="text-xs">Ben Evans</div>
        </div>
      </div>
    </main>
  );
}

export default MobileFrame;
