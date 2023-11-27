import React from "react";

export default function PostSkeleton() {
  return (
    <ul className="grid gap-3">
      <li className="grid gap-4 p-5 border w-full md:w-[45rem] rounded-2xl border-zinc-300 animate-pulse">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center gap-2">
            <div className="grid w-10 h-10 md:w-[3rem] md:h-[3rem] rounded-full bg-zinc-800"></div>
            <div className="w-20 h-6 md:w-[5rem] md:h-[1.5rem] text-xl font-bold rounded-lg text-zinc-800 bg-zinc-800"></div>
          </div>
          <div className="flex mt-2 md:mt-0">
            <div className="p-3 rounded-full cursor-pointer select-none hover:bg-zinc-300 text-zinc-500"></div>
            <div className="p-3 rounded-full cursor-pointer select-none hover:bg-zinc-300 text-zinc-500"></div>
          </div>
        </div>

        <div className="overflow-hidden font-normal break-words text-zinc-900">
          <div className="w-full h-4 mb-2 rounded-lg md:w-4/5 bg-zinc-800 "></div>
          <div className="w-full h-4 rounded-lg md:w-1/2 bg-zinc-800 "></div>
        </div>

        <ul className="flex items-center text-zinc-900">
          <li className="flex items-center gap-1 px-3 py-2 rounded-full cursor-pointer select-none hover:bg-zinc-300">
            <div className="text-zinc-900">
              <div className="w-6 h-4 md:w-[2rem] md:h-[1rem] rounded-lg bg-zinc-800 "></div>
            </div>
            <div className="w-6 h-4 md:w-[2rem] md:h-[1rem] rounded-lg bg-zinc-800 "></div>
          </li>
        </ul>

        <div className="w-full md:w-[90%] max-w-[1600px] m-auto overflow-hidden max-h-0"></div>
      </li>
      <li className="grid gap-4 p-5 border w-full md:w-[45rem] rounded-2xl border-zinc-300 animate-pulse">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center gap-2">
            <div className="grid w-10 h-10 md:w-[3rem] md:h-[3rem] rounded-full bg-zinc-800"></div>
            <div className="w-20 h-6 md:w-[5rem] md:h-[1.5rem] text-xl font-bold rounded-lg text-zinc-800 bg-zinc-800"></div>
          </div>
          <div className="flex mt-2 md:mt-0">
            <div className="p-3 rounded-full cursor-pointer select-none hover:bg-zinc-300 text-zinc-500"></div>
            <div className="p-3 rounded-full cursor-pointer select-none hover:bg-zinc-300 text-zinc-500"></div>
          </div>
        </div>

        <div className="overflow-hidden font-normal break-words text-zinc-900">
          <div className="w-full h-4 mb-2 rounded-lg md:w-4/5 bg-zinc-800 "></div>
          <div className="w-full h-4 rounded-lg md:w-1/2 bg-zinc-800 "></div>
        </div>

        <ul className="flex items-center text-zinc-900">
          <li className="flex items-center gap-1 px-3 py-2 rounded-full cursor-pointer select-none hover:bg-zinc-300">
            <div className="text-zinc-900">
              <div className="w-6 h-4 md:w-[2rem] md:h-[1rem] rounded-lg bg-zinc-800 "></div>
            </div>
            <div className="w-6 h-4 md:w-[2rem] md:h-[1rem] rounded-lg bg-zinc-800 "></div>
          </li>
        </ul>

        <div className="w-full md:w-[90%] max-w-[1600px] m-auto overflow-hidden max-h-0"></div>
      </li>
      <li className="grid gap-4 p-5 border w-full md:w-[45rem] rounded-2xl border-zinc-300 animate-pulse">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center gap-2">
            <div className="grid w-10 h-10 md:w-[3rem] md:h-[3rem] rounded-full bg-zinc-800"></div>
            <div className="w-20 h-6 md:w-[5rem] md:h-[1.5rem] text-xl font-bold rounded-lg text-zinc-800 bg-zinc-800"></div>
          </div>
          <div className="flex mt-2 md:mt-0">
            <div className="p-3 rounded-full cursor-pointer select-none hover:bg-zinc-300 text-zinc-500"></div>
            <div className="p-3 rounded-full cursor-pointer select-none hover:bg-zinc-300 text-zinc-500"></div>
          </div>
        </div>

        <div className="overflow-hidden font-normal break-words text-zinc-900">
          <div className="w-full h-4 mb-2 rounded-lg md:w-4/5 bg-zinc-800 "></div>
          <div className="w-full h-4 rounded-lg md:w-1/2 bg-zinc-800 "></div>
        </div>

        <ul className="flex items-center text-zinc-900">
          <li className="flex items-center gap-1 px-3 py-2 rounded-full cursor-pointer select-none hover:bg-zinc-300">
            <div className="text-zinc-900">
              <div className="w-6 h-4 md:w-[2rem] md:h-[1rem] rounded-lg bg-zinc-800 "></div>
            </div>
            <div className="w-6 h-4 md:w-[2rem] md:h-[1rem] rounded-lg bg-zinc-800 "></div>
          </li>
        </ul>

        <div className="w-full md:w-[90%] max-w-[1600px] m-auto overflow-hidden max-h-0"></div>
      </li>
    </ul>
  );
}
