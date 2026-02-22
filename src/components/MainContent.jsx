import { useState, useEffect } from 'react';
import Header from './Header';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const dummyResponses = {
 1: [
  { 
    isUser: true, 
    message: "Hey, can you suggest a good way to stay productive while coding?" 
  },
  { 
    isUser: false, 
    message: "Sure! One of the most effective techniques is the Pomodoro technique — 25 minutes of focused coding followed by a 5-minute break. After 4 cycles, take a longer 15–20 minute break. It helps maintain focus without burnout." 
  },
  { 
    isUser: true, 
    message: "I’ve heard about that. But sometimes I still get distracted by my phone or random YouTube videos." 
  },
  { 
    isUser: false, 
    message: "That’s very common 😄 Try putting your phone in another room or using apps like Focus Mode or website blockers. Also, keep only necessary tabs open. A clean workspace reduces mental clutter." 
  },
  { 
    isUser: true, 
    message: "What about planning? I usually just start coding without a clear direction." 
  },
  { 
    isUser: false, 
    message: "Planning makes a huge difference. Before you start, write down 3–5 small, specific tasks. For example: 'Implement login API', 'Fix navbar alignment', or 'Write unit tests for user service.' Completing small tasks gives quick wins and keeps motivation high." 
  },
  { 
    isUser: true, 
    message: "Sometimes I feel stuck on a bug for hours. That kills my productivity." 
  },
  { 
    isUser: false, 
    message: "If you’re stuck for more than 30–40 minutes, step away for 5 minutes. Walk around or explain the problem out loud — rubber duck debugging works surprisingly well. You can also break the problem into smaller parts and debug step by step." 
  },
  { 
    isUser: true, 
    message: "That makes sense. Any tips for long-term consistency?" 
  },
  { 
    isUser: false, 
    message: "Yes. Try these:\n\n1. Code at the same time every day to build a habit.\n2. Track your progress weekly.\n3. Avoid multitasking — single-tasking improves deep work.\n4. Sleep properly — productivity depends heavily on mental clarity.\n\nConsistency beats intensity. Even 2–3 hours of deep focus daily is powerful." 
  },
  { 
    isUser: true, 
    message: "Thanks! I think I’ll try structured task planning with Pomodoro from tomorrow." 
  },
  { 
    isUser: false, 
    message: "Great choice! Start small, stay consistent, and adjust based on what works for you. Productivity is about systems, not motivation 🚀" 
  }
],

  2: [
    { isUser: true, message: "What’s the difference between REST and GraphQL?" },
    { isUser: false, message: "REST uses multiple endpoints and returns fixed data structures, while GraphQL uses a single endpoint and lets the client request exactly the data it needs." },
  ],

  3: [
    { isUser: true, message: "I'm learning Go. Is it good for backend development?" },
    { isUser: false, message: "Yes! Go is excellent for backend development. It’s fast, has built-in concurrency (goroutines), and is widely used for microservices and cloud-native apps." },
  ],

  4: [
    { isUser: true, message: "Any tips to improve problem-solving for coding interviews?" },
    { isUser: false, message: "Practice data structures daily, solve problems by pattern (like sliding window, two pointers), and always analyze time & space complexity." },
  ],

  5: [
    { isUser: true, message: "How do I center a div using Flexbox?" },
    { isUser: false, message: "Use `display: flex; justify-content: center; align-items: center;` on the parent container to perfectly center the div." },
  ],

  6: [
    { isUser: true, message: "What’s better: SQL or NoSQL?" },
    { isUser: false, message: "It depends on your use case. SQL is great for structured data and relationships. NoSQL is better for flexible schemas and high scalability." },
  ],

  7: [
    { isUser: true, message: "Why is Docker useful in development?" },
    { isUser: false, message: "Docker ensures your app runs the same in every environment by packaging dependencies into containers. It avoids 'works on my machine' issues." },
  ],

  8: [
    { isUser: true, message: "What is middleware in Express?" },
    { isUser: false, message: "Middleware functions run between the request and response cycle. They can modify req/res objects, handle authentication, logging, etc." },
  ],

  9: [
    { isUser: true, message: "How can I improve my English speaking skills?" },
    { isUser: false, message: "Speak daily, think in English, record yourself, and practice mock interviews. Consistency matters more than perfection." },
  ],

  10: [
    { isUser: true, message: "What is the difference between let, var, and const in JavaScript?" },
    { isUser: false, message: "`var` is function-scoped, `let` and `const` are block-scoped. `const` cannot be reassigned, while `let` can." },
  ],

  11: [
    { isUser: true, message: "How does JWT authentication work?" },
    { isUser: false, message: "User logs in → server creates a signed token → client stores it → token is sent with each request → server verifies signature before granting access." },
  ],

  12: [
    { isUser: true, message: "What’s the best way to learn system design?" },
    { isUser: false, message: "Start with basics like scalability, load balancing, caching, databases, then practice designing real systems like chat apps or URL shorteners." },
  ],
};

export default function MainContent({ selectedChatId }) {
  const [messages, setMessages] = useState(dummyResponses[selectedChatId] || []);

  useEffect(() => {
    setMessages(dummyResponses[selectedChatId] || []);
  }, [selectedChatId]);

  const handleSendMessage = (text) => {
    const newMessages = [
      ...messages,
      { isUser: true, message: text },
    ];
    setMessages(newMessages);

    setTimeout(() => {
      const aiResponse = `This is a dummy response to: "${text}". In a real application, this would be generated by an AI API.`;
      setMessages([...newMessages, { isUser: false, message: aiResponse }]);
    }, 1000);
  };

return (
  <div className="flex-1 flex flex-col bg-[#212121] h-screen overflow-y-auto scroll-bar relative">
    <div className='sticky top-0 z-50'>
      <Header />
    </div>


    <div className="flex-1">
      {messages.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center px-6">
          <h1 className="text-4xl font-semibold text-white mb-8">What's on your mind today?</h1>
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      ) : (
        <div className="max-w-3xl mx-auto py-8 px-4">
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg.message} isUser={msg.isUser} />
          ))}
        </div>
      )}
    </div>

    {
      messages.length > 0 && (
        <div className="bg-[#212121] py-4 sticky bottom-0 z-50">
          <div className="max-w-3xl mx-auto px-4">
            <ChatInput onSendMessage={handleSendMessage} />
          </div>
        </div>
      )
    }
  </div>
);
}
