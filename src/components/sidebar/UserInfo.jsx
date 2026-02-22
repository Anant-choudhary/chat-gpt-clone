export default function () {
  return (
    <div className="p-4 border-t border-gray-700 shrink-0 ">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium truncate">Anant choudh...</div>
          <div className="text-xs text-gray-400">Free</div>
        </div>
      </div>
      <button className="w-full px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
        Upgrade
      </button>
    </div>
  );
}
