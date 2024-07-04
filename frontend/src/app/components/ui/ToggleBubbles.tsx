"use client";

import { cn } from "@/app/lib/util";
import React, { useState } from "react";

function ToggleBubbles({ options, onSelect = () => {} }: { options: string[]; onSelect?: (a: string) => void }) {
  if (options.length < 1) return null;

  const [selected, setSelected] = useState<string>(options[0]);

  return (
    <div className="w-full overflow-x-scroll py-4">
      <div className="flex gap-2 px-6 w-fit">
        {options.map((option, index) => (
          <button
            className={cn(
              "text-sm py-1 px-3 rounded-full border transition-colors",
              selected === option
                ? "text-white bg-neutral-800 border-neutral-800"
                : "text-neutral-700 bg-white border-neutral-200"
            )}
            key={index}
            onClick={() => {
              setSelected(option);
              onSelect(option);
            }}
          >
            <span className=" text-nowrap">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ToggleBubbles;
