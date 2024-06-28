"use client";

import { useRouter } from "next/navigation";
import React from "react";

function ModalWindow({ children }: { children?: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="absolute z-50 w-full h-full bg-neutral-950/60 flex justify-center items-center inset-0 p-2 pb-24">
      <dialog className="w-80 bg-white rounded-xl p-4 z-50" open>
        {children}
      </dialog>

      <div className="z-0 w-full h-full absolute inset-0 cursor-pointer" onClick={() => router.back()}></div>
    </div>
  );
}

export default ModalWindow;
