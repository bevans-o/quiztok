import React from "react";

function UserCapsule({ user, detail }: { user: string; detail?: string }) {
  return (
    <div className="p-[3px] bg-neutral-950/40 rounded-full flex gap-[6px] pr-4 items-center text-white ">
      <div className="w-10 h-10 rounded-full border-2 border-white flex items-center overflow-hidden">
        <img src="/background.png" className="-translate-y-2" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center text-sm gap-1">
          <span>@{user}</span>
          <div className="w-3 h-3 rounded-full bg-sky-400 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12px"
              viewBox="0 -960 960 960"
              width="12px"
              fill="currentColor"
            >
              <path d="M389-235 163-460l84-85 142 142 324-323 84 84-408 407Z" />
            </svg>
          </div>
        </div>

        {detail && <div className="text-[10px] font-light">{detail}</div>}
      </div>
    </div>
  );
}

export default UserCapsule;
