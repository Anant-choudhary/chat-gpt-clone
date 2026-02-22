import ChatGptLogo from "../../assets/OpenAI-logo.svg?react";

export default function SidebarMini({ onNewChat , setIsCollapsed, CollapseIcon }) {
  return (
        <div className="w-16 bg-[#171717] h-screen flex flex-col items-center py-4 justify-between text-white">
          <div className="flex flex-col items-center gap-6">
            <div
              className="group cursor-pointer"
              onClick={() => setIsCollapsed(false)}
            >
              <ChatGptLogo className="w-6 h-6 group-hover:hidden" />
              <div className="hidden group-hover:block">
                <CollapseIcon />
              </div>
            </div>
  
            <button onClick={onNewChat} className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
  
            <button className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
  
            <button className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
  
            <button className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
          </div>
  
          <div className="flex flex-col items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1118.879 6.196 9 9 0 015.12 17.804z" />
              </svg>
            </button>
          </div>
        </div>
      );
}