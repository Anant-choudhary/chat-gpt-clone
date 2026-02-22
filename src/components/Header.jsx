const chatgptIcon = "/assets/chatgpticon.svg";
import ChatGPTStyleSelect from "./SimpleSelect";
import { useState } from "react";

export default function Header() {
  const [getPlus , setPlus] = useState(true);
  return (
    <div className="w-full bg-[#212121] border-b border-gray-700 px-6 py-3 flex items-center justify-between">
      <ChatGPTStyleSelect />

      {
        getPlus && (
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-400 hover:bg-purple-500 rounded-full text-white text-sm font-medium transition-colors">
        <svg className="w-4 h-4 cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span>Get Plus</span>
        <svg
          className="w-4 h-4 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          onClick={() => setPlus(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6L18 18M6 18L18 6"
          />
        </svg>
      </button>
        )
      }

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer">
          <svg
            className="w-5 h-5 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer">
          <svg
            className="w-5 h-5 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
