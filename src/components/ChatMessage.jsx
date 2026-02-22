export default function ChatMessage({ message, isUser }) {
  return (
    <div className={`flex gap-4 px-6 py-4 ${isUser ? 'bg-[#212121]' : 'bg-[#171717] rounded-lg'}`}>
      <div className="shrink-0">
        {isUser ? (
          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex-1 text-gray-100">
        <div className="font-semibold mb-1 text-sm">{isUser ? 'You' : 'ChatGPT'}</div>
        <div className="text-sm leading-relaxed whitespace-pre-wrap">{message}</div>
      </div>
    </div>
  );
}
