import { cn } from "@/app/lib/util";
import React from "react";

function IconButton({ label, icon, highlight = false }: { label: string; icon: string; highlight?: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center gap-1 w-8",
        highlight ? "text-rose-400 fill-rose-400" : "text-neutral-50/30 fill-neutral-50/30"
      )}
    >
      <div className="w-8 h-8 flex justify-center items-center">
        {icon === "dual" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <mask id="mask0_19_357" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
              <rect width="30" height="30" fill="white" />
            </mask>
            <g mask="url(#mask0_19_357)">
              <path
                d="M15 21.3941C16.4344 21.3941 17.6503 20.8953 18.6478 19.8978C19.6453 18.9003 20.1441 17.6844 20.1441 16.25C20.1441 14.8156 19.6453 13.5997 18.6478 12.6022C17.6503 11.6047 16.4344 11.1059 15 11.1059C13.5656 11.1059 12.3497 11.6047 11.3522 12.6022C10.3547 13.5997 9.85594 14.8156 9.85594 16.25C9.85594 17.6844 10.3547 18.9003 11.3522 19.8978C12.3497 20.8953 13.5656 21.3941 15 21.3941ZM15 19.5194C14.0769 19.5194 13.3013 19.2052 12.6731 18.5769C12.0448 17.9487 11.7306 17.1731 11.7306 16.25C11.7306 15.3269 12.0448 14.5512 12.6731 13.9231C13.3013 13.2948 14.0769 12.9806 15 12.9806C15.9231 12.9806 16.6988 13.2948 17.3269 13.9231C17.9552 14.5512 18.2694 15.3269 18.2694 16.25C18.2694 17.1731 17.9552 17.9487 17.3269 18.5769C16.6988 19.2052 15.9231 19.5194 15 19.5194ZM5.38469 25.625C4.75323 25.625 4.21875 25.4062 3.78125 24.9688C3.34375 24.5312 3.125 23.9968 3.125 23.3653V9.13469C3.125 8.50323 3.34375 7.96875 3.78125 7.53125C4.21875 7.09375 4.75323 6.875 5.38469 6.875H9.20187L11.5144 4.375H18.4856L20.7981 6.875H24.6153C25.2468 6.875 25.7812 7.09375 26.2188 7.53125C26.6562 7.96875 26.875 8.50323 26.875 9.13469V23.3653C26.875 23.9968 26.6562 24.5312 26.2188 24.9688C25.7812 25.4062 25.2468 25.625 24.6153 25.625H5.38469ZM15 23.75H24.6153C24.7276 23.75 24.8198 23.714 24.8919 23.6419C24.964 23.5698 25 23.4776 25 23.3653V9.13469C25 9.0224 24.964 8.93021 24.8919 8.85813C24.8198 8.78604 24.7276 8.75 24.6153 8.75H19.9616L17.6681 6.25H15V23.75Z"
                fill="currentColor"
              />
            </g>
          </svg>
        )}
        {icon === "enhance" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
            <mask id="mask0_19_360" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="30">
              <rect x="0.75" width="30" height="30" fill="white" />
            </mask>
            <g mask="url(#mask0_19_360)">
              <path
                d="M15.7259 26.875C14.1057 26.875 12.5753 26.5629 11.1347 25.9387C9.69385 25.3146 8.43583 24.4648 7.36062 23.3894C6.28521 22.3142 5.43542 21.0542 4.81125 19.6094C4.18708 18.1646 3.875 16.6281 3.875 15C3.875 13.351 4.19552 11.8042 4.83656 10.3594C5.4776 8.91458 6.34823 7.65781 7.44844 6.58906C8.54844 5.5201 9.83531 4.67552 11.3091 4.05531C12.7826 3.4351 14.3543 3.125 16.0241 3.125C17.5866 3.125 19.0673 3.39146 20.4662 3.92438C21.8654 4.45729 23.0942 5.1949 24.1525 6.13719C25.211 7.07948 26.0544 8.19927 26.6825 9.49656C27.3108 10.7936 27.625 12.2002 27.625 13.7162C27.625 15.8798 26.982 17.5721 25.6959 18.7931C24.4099 20.0144 22.7612 20.625 20.75 20.625H18.4856C18.1298 20.625 17.8453 20.7411 17.6322 20.9734C17.4191 21.2059 17.3125 21.4808 17.3125 21.7981C17.3125 22.1844 17.4688 22.5858 17.7812 23.0025C18.0938 23.4192 18.25 23.8975 18.25 24.4375C18.25 25.2627 18.0217 25.8753 17.565 26.2753C17.1081 26.6751 16.4951 26.875 15.7259 26.875ZM8.875 15.9375C9.32042 15.9375 9.69219 15.7884 9.99031 15.4903C10.2884 15.1922 10.4375 14.8204 10.4375 14.375C10.4375 13.9296 10.2884 13.5578 9.99031 13.2597C9.69219 12.9616 9.32042 12.8125 8.875 12.8125C8.42958 12.8125 8.05781 12.9616 7.75969 13.2597C7.46156 13.5578 7.3125 13.9296 7.3125 14.375C7.3125 14.8204 7.46156 15.1922 7.75969 15.4903C8.05781 15.7884 8.42958 15.9375 8.875 15.9375ZM12.625 10.9375C13.0704 10.9375 13.4422 10.7884 13.7403 10.4903C14.0384 10.1922 14.1875 9.82042 14.1875 9.375C14.1875 8.92958 14.0384 8.55781 13.7403 8.25969C13.4422 7.96156 13.0704 7.8125 12.625 7.8125C12.1796 7.8125 11.8078 7.96156 11.5097 8.25969C11.2116 8.55781 11.0625 8.92958 11.0625 9.375C11.0625 9.82042 11.2116 10.1922 11.5097 10.4903C11.8078 10.7884 12.1796 10.9375 12.625 10.9375ZM18.875 10.9375C19.3204 10.9375 19.6922 10.7884 19.9903 10.4903C20.2884 10.1922 20.4375 9.82042 20.4375 9.375C20.4375 8.92958 20.2884 8.55781 19.9903 8.25969C19.6922 7.96156 19.3204 7.8125 18.875 7.8125C18.4296 7.8125 18.0578 7.96156 17.7597 8.25969C17.4616 8.55781 17.3125 8.92958 17.3125 9.375C17.3125 9.82042 17.4616 10.1922 17.7597 10.4903C18.0578 10.7884 18.4296 10.9375 18.875 10.9375ZM22.625 15.9375C23.0704 15.9375 23.4422 15.7884 23.7403 15.4903C24.0384 15.1922 24.1875 14.8204 24.1875 14.375C24.1875 13.9296 24.0384 13.5578 23.7403 13.2597C23.4422 12.9616 23.0704 12.8125 22.625 12.8125C22.1796 12.8125 21.8078 12.9616 21.5097 13.2597C21.2116 13.5578 21.0625 13.9296 21.0625 14.375C21.0625 14.8204 21.2116 15.1922 21.5097 15.4903C21.8078 15.7884 22.1796 15.9375 22.625 15.9375ZM15.7259 25C15.9295 25 16.0885 24.9499 16.2031 24.8497C16.3177 24.7495 16.375 24.6121 16.375 24.4375C16.375 24.1458 16.2188 23.8181 15.9062 23.4544C15.5938 23.0906 15.4375 22.5209 15.4375 21.7453C15.4375 20.8543 15.7396 20.1323 16.3438 19.5794C16.9479 19.0265 17.6875 18.75 18.5625 18.75H20.75C22.2213 18.75 23.4224 18.319 24.3534 17.4569C25.2845 16.5946 25.75 15.3477 25.75 13.7162C25.75 11.1875 24.7804 9.1026 22.8412 7.46156C20.9023 5.82052 18.6299 5 16.0241 5C13.1668 5 10.7401 5.96875 8.74406 7.90625C6.74802 9.84375 5.75 12.2083 5.75 15C5.75 17.7708 6.72396 20.1302 8.67188 22.0781C10.6198 24.026 12.9711 25 15.7259 25Z"
                fill="currentColor"
              />
            </g>
          </svg>
        )}
        {icon === "activities" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
            <mask id="mask0_19_405" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="30">
              <rect x="0.5" width="30" height="30" fill="white" />
            </mask>
            <g mask="url(#mask0_19_405)">
              <path
                d="M8.32688 16.6347L15.3078 20.6613C15.3718 20.7013 15.4358 20.7213 15.5 20.7213C15.5642 20.7213 15.6282 20.7013 15.6922 20.6613L22.6612 16.6347L16.4375 13.0384V17.1875H14.5625V13.0384L8.32688 16.6347ZM14.5625 10.8847V9.8725C13.7421 9.66583 13.0682 9.22948 12.5409 8.56344C12.0136 7.89719 11.75 7.12604 11.75 6.25C11.75 5.21 12.115 4.325 12.845 3.595C13.575 2.865 14.46 2.5 15.5 2.5C16.54 2.5 17.425 2.865 18.155 3.595C18.885 4.325 19.25 5.21 19.25 6.25C19.25 7.12604 18.9864 7.89719 18.4591 8.56344C17.9318 9.22948 17.2579 9.66583 16.4375 9.8725V10.8847L24.995 15.8078C25.3529 16.0143 25.6307 16.2911 25.8284 16.6384C26.0261 16.9857 26.125 17.3658 26.125 17.7788V19.7213C26.125 20.1342 26.0261 20.5143 25.8284 20.8616C25.6307 21.2089 25.3529 21.4857 24.995 21.6922L16.6297 26.5072C16.2714 26.7124 15.8942 26.815 15.4981 26.815C15.1019 26.815 14.7259 26.7124 14.3703 26.5072L6.005 21.6922C5.64708 21.4857 5.36927 21.2089 5.17156 20.8616C4.97385 20.5143 4.875 20.1342 4.875 19.7213V17.7788C4.875 17.3658 4.97385 16.9857 5.17156 16.6384C5.36927 16.2911 5.64708 16.0143 6.005 15.8078L14.5625 10.8847ZM14.3703 22.2766L6.75 17.8919V19.7213C6.75 19.7852 6.76604 19.8473 6.79812 19.9075C6.83021 19.9675 6.87823 20.0176 6.94219 20.0578L15.3078 24.8919C15.3718 24.9319 15.4358 24.9519 15.5 24.9519C15.5642 24.9519 15.6282 24.9319 15.6922 24.8919L24.0578 20.0578C24.1218 20.0176 24.1698 19.9675 24.2019 19.9075C24.234 19.8473 24.25 19.7852 24.25 19.7213V17.8919L16.6297 22.2766C16.2714 22.4816 15.8942 22.5841 15.4981 22.5841C15.1019 22.5841 14.7259 22.4816 14.3703 22.2766ZM15.5 8.125C16.0208 8.125 16.4635 7.94271 16.8281 7.57813C17.1927 7.21354 17.375 6.77083 17.375 6.25C17.375 5.72917 17.1927 5.28646 16.8281 4.92188C16.4635 4.55729 16.0208 4.375 15.5 4.375C14.9792 4.375 14.5365 4.55729 14.1719 4.92188C13.8073 5.28646 13.625 5.72917 13.625 6.25C13.625 6.77083 13.8073 7.21354 14.1719 7.57813C14.5365 7.94271 14.9792 8.125 15.5 8.125Z"
                fill="currentColor"
              />
            </g>
          </svg>
        )}
        {icon === "effects" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
            <mask id="mask0_19_363" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="30">
              <rect x="0.25" width="30" height="30" fill="white" />
            </mask>
            <g mask="url(#mask0_19_363)">
              <path
                d="M15.3006 26.2259C14.2091 26.2259 13.2452 25.8569 12.4087 25.1187C11.572 24.3808 11.1033 23.4967 11.0025 22.4662C10.0345 22.8765 9.02413 22.9177 7.97121 22.59C6.9183 22.2623 6.10976 21.6329 5.54559 20.7019C4.97684 19.774 4.80184 18.7527 5.02059 17.6381C5.23934 16.5235 5.79903 15.6432 6.69965 14.9972C5.82465 14.3676 5.27455 13.5116 5.04934 12.4291C4.82413 11.3466 4.97673 10.3414 5.50715 9.41344C6.03757 8.48552 6.83653 7.83375 7.90403 7.45812C8.97132 7.08229 9.99132 7.09948 10.964 7.50969C11.0649 6.46323 11.5336 5.575 12.3703 4.845C13.2067 4.115 14.1706 3.75 15.2618 3.75C16.3533 3.75 17.3173 4.115 18.1537 4.845C18.9904 5.575 19.4591 6.46323 19.56 7.50969C20.5583 7.09948 21.5743 7.0726 22.6081 7.42906C23.6416 7.78573 24.4365 8.44719 24.9928 9.41344C25.5232 10.367 25.6823 11.3754 25.47 12.4387C25.2575 13.5021 24.7009 14.3558 23.8003 15C24.7009 15.6442 25.2638 16.5172 25.489 17.6191C25.7142 18.7207 25.5616 19.7483 25.0312 20.7019C24.467 21.6842 23.6722 22.3264 22.6465 22.6284C21.6209 22.9305 20.6049 22.8765 19.5984 22.4662C19.4976 23.4967 19.0288 24.3808 18.1922 25.1187C17.3557 25.8569 16.3918 26.2259 15.3006 26.2259ZM15.3006 24.3509C16.2798 24.3509 17.0141 23.9291 17.5037 23.0853C17.9933 22.2416 17.9881 21.4134 17.4881 20.6009L16.6131 19.1634C16.3839 19.238 16.1652 19.2939 15.9568 19.3309C15.7485 19.3682 15.5298 19.3869 15.3006 19.3869C15.0923 19.3869 14.8807 19.3693 14.6659 19.3341C14.4511 19.2989 14.2252 19.2459 13.9881 19.1753L13.1131 20.6009C12.6131 21.4134 12.6079 22.2416 13.0975 23.0853C13.587 23.9291 14.3214 24.3509 15.3006 24.3509ZM7.09746 19.6875C7.5933 20.5256 8.32726 20.9447 9.29934 20.9447C10.2712 20.9447 10.9976 20.5256 11.4784 19.6875L12.3028 18.2378C12.1282 18.0711 11.968 17.898 11.8222 17.7184C11.6763 17.5386 11.5513 17.3489 11.4472 17.1491C11.343 16.9616 11.2512 16.7669 11.1718 16.565C11.0925 16.3629 11.0256 16.1538 10.9712 15.9375H9.2909C8.32778 15.9375 7.60257 16.3529 7.11528 17.1838C6.62819 18.0148 6.62226 18.8494 7.09746 19.6875ZM19.0215 19.6875C19.4928 20.5177 20.2167 20.9348 21.1934 20.9388C22.1703 20.9427 22.9066 20.5256 23.4025 19.6875C23.8777 18.8494 23.8717 18.0148 23.3847 17.1838C22.8974 16.3529 22.1722 15.9375 21.209 15.9375H19.5297C19.4874 16.1538 19.4254 16.3629 19.3437 16.565C19.262 16.7669 19.1691 16.9597 19.065 17.1434C18.9608 17.3474 18.8337 17.5392 18.6837 17.7188C18.5339 17.8981 18.3717 18.0711 18.1972 18.2378L19.0215 19.6875ZM10.9712 14.0625C11.0277 13.836 11.0983 13.6148 11.1831 13.3988C11.2677 13.1827 11.363 12.9809 11.469 12.7934C11.5749 12.6059 11.6966 12.4289 11.8343 12.2622C11.972 12.0955 12.1282 11.9289 12.3028 11.7622L11.4784 10.3125C10.9992 9.46646 10.2733 9.04135 9.30059 9.03719C8.32767 9.03323 7.59528 9.45833 7.1034 10.3125C6.63215 11.1506 6.63819 11.9852 7.12153 12.8162C7.60465 13.6471 8.32778 14.0625 9.2909 14.0625H10.9712ZM21.209 14.0625C22.1722 14.0625 22.8953 13.6471 23.3784 12.8162C23.8617 11.9852 23.8678 11.1506 23.3965 10.3125C22.9047 9.45833 22.1723 9.03323 21.1993 9.03719C20.2266 9.04135 19.5007 9.46646 19.0215 10.3125L18.1972 11.7622C18.373 11.9289 18.5323 12.0955 18.675 12.2622C18.8179 12.4289 18.9414 12.6059 19.0456 12.7934C19.1498 12.9809 19.2427 13.1827 19.3243 13.3988C19.4062 13.6148 19.4743 13.836 19.5287 14.0625H21.209ZM13.9303 10.8247C14.1674 10.7461 14.3924 10.6912 14.6053 10.66C14.8182 10.6287 15.0362 10.6131 15.2593 10.6131C15.4823 10.6131 15.7017 10.6307 15.9178 10.6659C16.134 10.7011 16.3554 10.7541 16.5818 10.8247L17.4493 9.375C17.9366 8.5625 17.9387 7.73438 17.4556 6.89062C16.9723 6.04688 16.241 5.625 15.2618 5.625C14.2827 5.625 13.5535 6.04365 13.0743 6.88094C12.5952 7.71844 12.5952 8.54979 13.0743 9.375L13.9303 10.8247ZM11.4472 17.1491C11.343 16.9616 11.2512 16.7669 11.1718 16.565C11.2512 16.7669 11.343 16.9597 11.4472 17.1434C11.5513 17.3474 11.6763 17.5389 11.8222 17.7184C11.6763 17.5386 11.5513 17.3489 11.4472 17.1491ZM11.1831 13.3988C11.2677 13.1827 11.363 12.9809 11.469 12.7934C11.5749 12.6059 11.6966 12.4289 11.8343 12.2622C11.972 12.0955 12.1282 11.9289 12.3028 11.7622C12.1313 11.9289 11.9758 12.0955 11.8362 12.2622C11.6968 12.4289 11.5735 12.6059 11.4662 12.7934C11.362 12.9809 11.2677 13.1827 11.1831 13.3988ZM15.3006 19.3869C15.0923 19.3869 14.8807 19.3693 14.6659 19.3341C14.4511 19.2989 14.2252 19.2459 13.9881 19.1753C14.2252 19.2459 14.452 19.2989 14.6687 19.3341C14.8856 19.3693 15.0973 19.3869 15.3037 19.3869C15.5308 19.3869 15.7485 19.3682 15.9568 19.3309C15.7485 19.3682 15.5298 19.3869 15.3006 19.3869ZM18.1972 18.2378C18.3717 18.0711 18.5334 17.898 18.6822 17.7184C18.8309 17.5386 18.9585 17.3489 19.065 17.1491C19.1691 16.9616 19.262 16.7669 19.3437 16.565C19.262 16.7669 19.1691 16.9597 19.065 17.1434C18.9608 17.3474 18.8337 17.5392 18.6837 17.7188C18.5339 17.8981 18.3717 18.0711 18.1972 18.2378ZM15.25 17.5C15.9375 17.5 16.526 17.2552 17.0156 16.7656C17.5052 16.276 17.75 15.6875 17.75 15C17.75 14.3125 17.5052 13.724 17.0156 13.2344C16.526 12.7448 15.9375 12.5 15.25 12.5C14.5625 12.5 13.9739 12.7448 13.4843 13.2344C12.9948 13.724 12.75 14.3125 12.75 15C12.75 15.6875 12.9948 16.276 13.4843 16.7656C13.9739 17.2552 14.5625 17.5 15.25 17.5Z"
                fill="currentColor"
              />
            </g>
          </svg>
        )}
        {icon === "settings" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <mask id="mask0_19_366" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
              <rect width="30" height="30" fill="white" />
            </mask>
            <g mask="url(#mask0_19_366)">
              <path
                d="M12.1153 26.875L11.6394 23.0672C11.3046 22.9551 10.9613 22.7981 10.6094 22.5963C10.2577 22.3942 9.94323 22.1778 9.66594 21.9472L6.13938 23.4375L3.255 18.4375L6.30532 16.1322C6.27657 15.9464 6.25615 15.7597 6.24407 15.5722C6.23198 15.3847 6.22594 15.1979 6.22594 15.0119C6.22594 14.8342 6.23198 14.6535 6.24407 14.47C6.25615 14.2865 6.27657 14.0857 6.30532 13.8678L3.255 11.5625L6.13938 6.58656L9.65376 8.065C9.95521 7.82625 10.277 7.60792 10.6191 7.41C10.9612 7.21208 11.2973 7.05302 11.6275 6.93281L12.1153 3.125H17.8847L18.3606 6.94469C18.7356 7.08094 19.0749 7.24 19.3784 7.42188C19.6822 7.60375 19.9888 7.81813 20.2981 8.065L23.8606 6.58656L26.745 11.5625L23.6466 13.9038C23.6914 14.1056 23.7158 14.2944 23.72 14.47C23.724 14.6454 23.7259 14.8221 23.7259 15C23.7259 15.1698 23.7219 15.3425 23.7138 15.5181C23.7058 15.6935 23.6771 15.8943 23.6275 16.1203L26.7019 18.4375L23.8172 23.4375L20.2981 21.935C19.9888 22.1819 19.673 22.4002 19.3509 22.59C19.0289 22.78 18.6988 22.9351 18.3606 23.0553L17.8847 26.875H12.1153ZM13.75 25H16.2069L16.6563 21.6516C17.2942 21.4849 17.8771 21.2481 18.405 20.9412C18.9331 20.6342 19.4424 20.2395 19.9328 19.7572L23.0384 21.0625L24.2694 18.9375L21.5578 16.8944C21.662 16.5706 21.7328 16.2532 21.7703 15.9422C21.808 15.6314 21.8269 15.3173 21.8269 15C21.8269 14.6746 21.808 14.3605 21.7703 14.0578C21.7328 13.7549 21.662 13.4455 21.5578 13.1297L24.2931 11.0625L23.0625 8.9375L19.9206 10.2619C19.5023 9.81479 19.0012 9.41979 18.4172 9.07688C17.833 8.73396 17.2421 8.49115 16.6444 8.34844L16.25 5H13.7694L13.3556 8.33656C12.7179 8.48719 12.1291 8.71792 11.5891 9.02875C11.0489 9.33979 10.5335 9.74042 10.0431 10.2306L6.9375 8.9375L5.70688 11.0625L8.40625 13.0744C8.30209 13.371 8.22917 13.6796 8.1875 14C8.14584 14.3204 8.125 14.6577 8.125 15.0119C8.125 15.3373 8.14584 15.6563 8.1875 15.9688C8.22917 16.2813 8.29813 16.5898 8.39438 16.8944L5.70688 18.9375L6.9375 21.0625L10.0313 19.75C10.5056 20.2371 11.0128 20.6361 11.5528 20.9472C12.093 21.258 12.69 21.4968 13.3438 21.6634L13.75 25ZM15.0144 18.75C16.0544 18.75 16.9394 18.385 17.6694 17.655C18.3994 16.925 18.7644 16.04 18.7644 15C18.7644 13.96 18.3994 13.075 17.6694 12.345C16.9394 11.615 16.0544 11.25 15.0144 11.25C13.9615 11.25 13.0732 11.615 12.3497 12.345C11.6262 13.075 11.2644 13.96 11.2644 15C11.2644 16.04 11.6262 16.925 12.3497 17.655C13.0732 18.385 13.9615 18.75 15.0144 18.75Z"
                fill="currentColor"
              />
            </g>
          </svg>
        )}
        {icon === "share" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <mask id="mask0_19_369" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
              <rect width="30" height="30" fill="white" />
            </mask>
            <g mask="url(#mask0_19_369)">
              <path
                d="M22.5016 27.1875C21.547 27.1875 20.7352 26.8533 20.0662 26.185C19.3971 25.5165 19.0625 24.7048 19.0625 23.75C19.0625 23.594 19.0749 23.4324 19.0997 23.2653C19.1247 23.098 19.162 22.9439 19.2116 22.8028L9.96625 17.3894C9.63625 17.7179 9.26052 17.9747 8.83906 18.1597C8.4176 18.3449 7.97125 18.4375 7.5 18.4375C6.54521 18.4375 5.73354 18.1034 5.065 17.4353C4.39667 16.7672 4.0625 15.9559 4.0625 15.0016C4.0625 14.047 4.39667 13.2352 5.065 12.5662C5.73354 11.8971 6.54521 11.5625 7.5 11.5625C7.97125 11.5625 8.4176 11.6551 8.83906 11.8403C9.26052 12.0253 9.63625 12.2821 9.96625 12.6106L19.2116 7.19719C19.162 7.05615 19.1247 6.90198 19.0997 6.73469C19.0749 6.5676 19.0625 6.40604 19.0625 6.25C19.0625 5.29521 19.3966 4.48354 20.0647 3.815C20.7328 3.14667 21.5441 2.8125 22.4984 2.8125C23.453 2.8125 24.2648 3.14656 24.9338 3.81469C25.6029 4.48281 25.9375 5.29406 25.9375 6.24844C25.9375 7.20302 25.6033 8.01479 24.935 8.68375C24.2665 9.35292 23.4548 9.6875 22.5 9.6875C22.0287 9.6875 21.5824 9.5949 21.1609 9.40969C20.7395 9.22469 20.3638 8.96792 20.0338 8.63938L10.7884 14.0528C10.838 14.1939 10.8753 14.3477 10.9003 14.5144C10.9251 14.681 10.9375 14.8421 10.9375 14.9975C10.9375 15.1529 10.9251 15.3148 10.9003 15.4831C10.8753 15.6515 10.838 15.8061 10.7884 15.9472L20.0338 21.3606C20.3638 21.0321 20.7395 20.7753 21.1609 20.5903C21.5824 20.4051 22.0287 20.3125 22.5 20.3125C23.4548 20.3125 24.2665 20.6466 24.935 21.3147C25.6033 21.9828 25.9375 22.7941 25.9375 23.7484C25.9375 24.703 25.6034 25.5148 24.9353 26.1838C24.2672 26.8529 23.4559 27.1875 22.5016 27.1875ZM22.5 7.8125C22.9344 7.8125 23.3033 7.66062 23.6069 7.35687C23.9106 7.05333 24.0625 6.68438 24.0625 6.25C24.0625 5.81562 23.9106 5.44667 23.6069 5.14313C23.3033 4.83938 22.9344 4.6875 22.5 4.6875C22.0656 4.6875 21.6967 4.83938 21.3931 5.14313C21.0894 5.44667 20.9375 5.81562 20.9375 6.25C20.9375 6.68438 21.0894 7.05333 21.3931 7.35687C21.6967 7.66062 22.0656 7.8125 22.5 7.8125ZM7.5 16.5625C7.93438 16.5625 8.30333 16.4106 8.60688 16.1069C8.91063 15.8033 9.0625 15.4344 9.0625 15C9.0625 14.5656 8.91063 14.1967 8.60688 13.8931C8.30333 13.5894 7.93438 13.4375 7.5 13.4375C7.06562 13.4375 6.69667 13.5894 6.39313 13.8931C6.08938 14.1967 5.9375 14.5656 5.9375 15C5.9375 15.4344 6.08938 15.8033 6.39313 16.1069C6.69667 16.4106 7.06562 16.5625 7.5 16.5625ZM22.5 25.3125C22.9344 25.3125 23.3033 25.1606 23.6069 24.8569C23.9106 24.5533 24.0625 24.1844 24.0625 23.75C24.0625 23.3156 23.9106 22.9467 23.6069 22.6431C23.3033 22.3394 22.9344 22.1875 22.5 22.1875C22.0656 22.1875 21.6967 22.3394 21.3931 22.6431C21.0894 22.9467 20.9375 23.3156 20.9375 23.75C20.9375 24.1844 21.0894 24.5533 21.3931 24.8569C21.6967 25.1606 22.0656 25.3125 22.5 25.3125Z"
                fill="currentColor"
              />
            </g>
          </svg>
        )}
        {icon === "live" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
            <mask id="mask0_19_372" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="30">
              <rect x="0.75" width="30" height="30" fill="white" />
            </mask>
            <g mask="url(#mask0_19_372)">
              <path
                d="M12.0962 21.0097H17.0963C17.3823 21.0097 17.6221 20.9129 17.8156 20.7194C18.009 20.5258 18.1056 20.286 18.1056 20V18.4616L20.5097 19.7259V15.2741L18.1056 16.5384V15C18.1056 14.714 18.009 14.4742 17.8156 14.2806C17.6221 14.0871 17.3823 13.9903 17.0963 13.9903H12.0962C11.8102 13.9903 11.5704 14.0871 11.3769 14.2806C11.1833 14.4742 11.0866 14.714 11.0866 15V20C11.0866 20.286 11.1833 20.5258 11.3769 20.7194C11.5704 20.9129 11.8102 21.0097 12.0962 21.0097ZM6.375 25.625V11.5625L15.75 4.51938L25.125 11.5625V25.625H6.375ZM8.25 23.75H23.25V12.5L15.75 6.875L8.25 12.5V23.75Z"
                fill="currentColor"
              />
            </g>
          </svg>
        )}
        {icon === "business" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
            <mask id="mask0_19_393" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="30">
              <rect x="0.5" width="30" height="30" fill="white" />
            </mask>
            <g mask="url(#mask0_19_393)">
              <path
                d="M26.4566 13.7162V23.6778C26.4566 24.3093 26.2379 24.8438 25.8004 25.2812C25.3629 25.7188 24.8285 25.9375 24.1972 25.9375H6.8413C6.21005 25.9375 5.67568 25.7188 5.23818 25.2812C4.80068 24.8438 4.58193 24.3093 4.58193 23.6778V13.6922C4.07859 13.2789 3.70078 12.7424 3.44849 12.0828C3.19599 11.4234 3.19078 10.7116 3.43287 9.94719L4.69724 5.81719C4.86391 5.29156 5.14672 4.86771 5.54568 4.54563C5.94484 4.22354 6.42162 4.0625 6.97599 4.0625H24.0385C24.5931 4.0625 25.0666 4.21635 25.4591 4.52406C25.8518 4.83177 26.1379 5.2549 26.3172 5.79344L27.6057 9.94719C27.8478 10.7116 27.8426 11.421 27.5901 12.0756C27.3378 12.7304 26.9599 13.2773 26.4566 13.7162ZM18.2694 12.8125C18.9521 12.8125 19.4654 12.6038 19.8091 12.1863C20.1529 11.7688 20.2935 11.3204 20.231 10.8412L19.4713 5.9375H16.4566V10.875C16.4566 11.4006 16.6345 11.855 16.9904 12.2381C17.3462 12.621 17.7726 12.8125 18.2694 12.8125ZM12.6444 12.8125C13.2196 12.8125 13.6863 12.621 14.0444 12.2381C14.4028 11.855 14.5819 11.4006 14.5819 10.875V5.9375H11.5672L10.8079 10.8894C10.7404 11.3333 10.8797 11.7649 11.226 12.1841C11.5722 12.603 12.0451 12.8125 12.6444 12.8125ZM7.08193 12.8125C7.54505 12.8125 7.94328 12.651 8.27662 12.3281C8.60995 12.0052 8.81589 11.5994 8.89443 11.1106L9.62974 5.9375H6.97599C6.83974 5.9375 6.73162 5.9675 6.65162 6.0275C6.57141 6.08771 6.5113 6.17792 6.4713 6.29812L5.26912 10.3653C5.10412 10.9022 5.18193 11.4443 5.50255 11.9916C5.82297 12.5389 6.34943 12.8125 7.08193 12.8125ZM23.9569 12.8125C24.6332 12.8125 25.1508 12.5469 25.5097 12.0156C25.8687 11.4844 25.9553 10.9343 25.7694 10.3653L24.5047 6.27406C24.4647 6.15385 24.4047 6.06771 24.3247 6.01562C24.2445 5.96354 24.1363 5.9375 24.0001 5.9375H21.4088L22.1441 11.1106C22.2227 11.5994 22.4286 12.0052 22.7619 12.3281C23.0953 12.651 23.4936 12.8125 23.9569 12.8125ZM6.8413 24.0625H24.1972C24.3093 24.0625 24.4014 24.0265 24.4735 23.9544C24.5458 23.8823 24.5819 23.7901 24.5819 23.6778V14.5769C24.4457 14.6267 24.3318 14.6575 24.2404 14.6694C24.1491 14.6815 24.0546 14.6875 23.9569 14.6875C23.3944 14.6875 22.8996 14.5857 22.4726 14.3822C22.0455 14.1786 21.6315 13.8525 21.2307 13.4037C20.8798 13.7948 20.4648 14.1066 19.9857 14.3391C19.5065 14.5714 18.9601 14.6875 18.3463 14.6875C17.8159 14.6875 17.3159 14.5773 16.8463 14.3569C16.3767 14.1367 15.9344 13.819 15.5194 13.4037C15.1332 13.819 14.6957 14.1367 14.2069 14.3569C13.718 14.5773 13.2228 14.6875 12.7213 14.6875C12.1571 14.6875 11.6283 14.5853 11.1347 14.3809C10.6412 14.1766 10.2069 13.8508 9.83193 13.4037C9.3061 13.9294 8.82162 14.2748 8.37849 14.44C7.93557 14.605 7.50339 14.6875 7.08193 14.6875C6.98401 14.6875 6.88297 14.6815 6.7788 14.6694C6.67464 14.6575 6.56724 14.6267 6.45662 14.5769V23.6778C6.45662 23.7901 6.49276 23.8823 6.56505 23.9544C6.63714 24.0265 6.72922 24.0625 6.8413 24.0625Z"
                fill="currentColor"
              />
            </g>
          </svg>
        )}
        {icon === "subscription" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
            <mask id="mask0_19_375" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="30">
              <rect x="0.25" width="30" height="30" fill="white" />
            </mask>
            <g mask="url(#mask0_19_375)">
              <path
                d="M11.8702 19.8797L15.2499 17.8294L18.6296 19.8797L17.733 16.0359L20.7305 13.4519L16.7859 13.1203L15.2499 9.49529L13.714 13.1203L9.7693 13.4519L12.7668 16.0359L11.8702 19.8797ZM15.2499 28.2597L11.3268 24.375H5.87492V18.9231L1.99023 15L5.87492 11.0769V5.62498H11.3268L15.2499 1.7403L19.173 5.62498H24.6249V11.0769L28.5096 15L24.6249 18.9231V24.375H19.173L15.2499 28.2597ZM15.2499 25.625L18.3749 22.5H22.7499V18.125L25.8749 15L22.7499 11.875V7.49998H18.3749L15.2499 4.37498L12.1249 7.49998H7.74992V11.875L4.62492 15L7.74992 18.125V22.5H12.1249L15.2499 25.625Z"
                fill="currentColor"
              />
            </g>
          </svg>
        )}
        {icon === "promote" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <mask id="mask0_19_378" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
              <rect width="30" height="30" fill="white" />
            </mask>
            <g mask="url(#mask0_19_378)">
              <path
                d="M7.5 17.5C7.5 18.7596 7.80094 19.9319 8.40281 21.0169C9.00448 22.1019 9.83177 22.9769 10.8847 23.6419C10.7918 23.4656 10.7252 23.2897 10.685 23.1141C10.645 22.9387 10.625 22.7548 10.625 22.5625C10.625 21.984 10.736 21.4391 10.9581 20.9278C11.18 20.4166 11.4984 19.9535 11.9134 19.5385L15 16.5025L18.0984 19.5385C18.5136 19.9535 18.8302 20.4166 19.0481 20.9278C19.266 21.4391 19.375 21.984 19.375 22.5625C19.375 22.7548 19.355 22.9387 19.315 23.1141C19.2748 23.2897 19.2082 23.4656 19.1153 23.6419C20.1682 22.9769 20.9955 22.1019 21.5972 21.0169C22.1991 19.9319 22.5 18.7596 22.5 17.5C22.5 16.4583 22.3073 15.474 21.9219 14.5469C21.5365 13.6198 20.9792 12.7917 20.25 12.0625C19.8333 12.3333 19.3958 12.5365 18.9375 12.6719C18.4792 12.8073 18.0104 12.875 17.5313 12.875C16.2317 12.875 15.1079 12.4479 14.16 11.5938C13.2121 10.7396 12.6692 9.67949 12.5312 8.41345C11.7188 9.09304 11 9.80262 10.375 10.5422C9.75 11.2818 9.22396 12.0357 8.79688 12.8041C8.36979 13.5726 8.04688 14.3527 7.82812 15.1444C7.60938 15.9361 7.5 16.7213 7.5 17.5ZM15 19.125L13.2188 20.875C12.9896 21.1042 12.8125 21.3646 12.6875 21.6563C12.5625 21.9479 12.5 22.25 12.5 22.5625C12.5 23.2292 12.7448 23.8021 13.2344 24.2813C13.724 24.7604 14.3125 25 15 25C15.6875 25 16.276 24.7604 16.7656 24.2813C17.2552 23.8021 17.5 23.2292 17.5 22.5625C17.5 22.2292 17.4375 21.9219 17.3125 21.6406C17.1875 21.3594 17.0104 21.1042 16.7812 20.875L15 19.125ZM14.375 4.86783V7.87502C14.375 8.7596 14.6799 9.50158 15.2897 10.101C15.8995 10.7003 16.6467 11 17.5313 11C17.9142 11 18.2792 10.9279 18.6263 10.7838C18.9731 10.6396 19.2917 10.4272 19.5819 10.1466L20.1322 9.59158C21.4495 10.4345 22.4859 11.5591 23.2416 12.9653C23.9972 14.3716 24.375 15.8831 24.375 17.5C24.375 20.1154 23.4664 22.3318 21.6491 24.1491C19.8318 25.9664 17.6154 26.875 15 26.875C12.3846 26.875 10.1682 25.9664 8.35094 24.1491C6.53365 22.3318 5.625 20.1154 5.625 17.5C5.625 15.085 6.41187 12.7613 7.98562 10.5288C9.55937 8.29647 11.6892 6.4095 14.375 4.86783Z"
                fill="currentColor"
              />
            </g>
          </svg>
        )}
      </div>
      <div className="text-xs font-semibold text-center text-nowrap select-none">{label}</div>
    </div>
  );
}

export default IconButton;