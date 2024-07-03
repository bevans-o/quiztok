"use client";

import React from "react";
import Heading from "./typography/Heading";
import { useRouter } from "next/navigation";

function PageHeader({ title }: { title?: string }) {
  const router = useRouter();

  return (
    <div className="w-full p-4 border-b-2 border-neutral-200 bg-white flex justify-center relative">
      <Heading>{title}</Heading>

      <button
        className="absolute left-4 top-0 bottom-0 m-auto h-6 w-6 hover:opacity-80 transition-opacity"
        onClick={() => router.back()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <mask id="mask0_30_520" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
            <rect x="0.397461" y="0.460968" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_30_520)">
            <path
              d="M7.8514 14.5827L13.9492 20.6494L12.3975 22.166L3.6864 13.4994L12.3975 4.8327L13.9492 6.34937L7.8514 12.416H21.1086V14.5827H7.8514Z"
              fill="#374151"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}

export default PageHeader;
