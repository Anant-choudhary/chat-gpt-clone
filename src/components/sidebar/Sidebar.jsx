import { useState } from "react";
import ChatGptLogo from "../../assets/OpenAI-logo.svg?react";
import UserInfo from "./UserInfo";
import SidebarMini from "./sidebarMini";

const dummyChats = [
  { id: 1, title: "Staying Productive While Coding" },
  { id: 2, title: "REST vs GraphQL Difference" },
  { id: 3, title: "Is Go Good for Backend?" },
  { id: 4, title: "Coding Interview Preparation Tips" },
  { id: 5, title: "Center Div Using Flexbox" },
  { id: 6, title: "SQL vs NoSQL Comparison" },
  { id: 7, title: "Why Use Docker?" },
  { id: 8, title: "Middleware in Express" },
  { id: 9, title: "Improve English Speaking Skills" },
  { id: 10, title: "let vs var vs const in JS" },
  { id: 11, title: "How JWT Authentication Works" },
  { id: 12, title: "How to Learn System Design" },
];

const CollapseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer">
    <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
  </svg>
);

export default function Sidebar({ onNewChat, onSelectChat, selectedChatId }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (isCollapsed) {
    return (
     <SidebarMini onNewChat={onNewChat} setIsCollapsed={setIsCollapsed} CollapseIcon={CollapseIcon}/>
    );
  }

  return (
    <div className="w-64 bg-[#171717] h-screen flex flex-col text-white overflow-y-auto relative scroll-bar">
      <div className="sticky top-0 z-50 bg-[#171717]">
        <div className="flex items-center gap-2 m-4 justify-between">
          <ChatGptLogo className="w-6 h-6 cursor-pointer" />
          <button onClick={() => setIsCollapsed(true)}>
            <CollapseIcon />
          </button>
        </div>

        <button onClick={onNewChat} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span className="text-sm">New chat</span>
        </button>

        <button className="w-full flex items-center gap-2 px-3 py-2 mt-2 rounded-lg hover:bg-gray-800 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-sm">Search chats</span>
        </button>

        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Images</span>
        </button>
      </div>

      <div className="flex flex-col gap-1 z-0">
        <div>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>Apps</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span>Codex</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span>Projects</span>
          </button>
        </div>

        <div className="flex-1 py-4">
          <h3 className="text-xs font-semibold text-gray-400 mb-2 px-2">Your chats</h3>
          <div className="space-y-1">
            {dummyChats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => onSelectChat(chat.id)}
                className={`w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm ${
                  selectedChatId === chat.id ? "bg-gray-800" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  {selectedChatId === chat.id && (
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  )}
                  <span className="truncate">{chat.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 z-50 bg-[#171717]">
        <UserInfo />
      </div>
    </div>
  );
}