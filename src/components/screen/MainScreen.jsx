import MainContent from "../MainContent";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";

export default function MainScreen() {
  const [selectedChatId, setSelectedChatId] = useState(1);

  const handleNewChat = () => {
    setSelectedChatId(null);
  };

  const handleSelectChat = (chatId) => {
    setSelectedChatId(chatId);
  };

  return (
    <div className="flex h-screen bg-[#171717]">
      <Sidebar
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
        selectedChatId={selectedChatId}
      />
      <MainContent selectedChatId={selectedChatId} />
    </div>
  );
}
