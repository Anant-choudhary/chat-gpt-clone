import { useState } from 'react';

export default function ChatInput({ onSendMessage }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <div className="px-6 py-4 bg-[#212121] min-w-[60%]">
      <form onSubmit={handleSubmit} className="relative bg-[#212121]">
        <div className="flex items-center gap-2 bg-[#212122] rounded-full px-4 py-3 border border-gray-700 focus-within:border-gray-600">
          <button
            type="button"
            className="p-1 hover:bg-gray-700 rounded transition-colors"
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything."
            className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-sm"
          />
          
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="p-1 hover:bg-gray-700 rounded transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>
            
            <button
              type="button"
              className="p-1 hover:bg-gray-700 rounded transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
