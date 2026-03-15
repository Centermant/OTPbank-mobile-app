import { useState } from "react";
import { Send, Bot, User } from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Здравствуйте! Я ваш финансовый помощник. Как я могу вам помочь сегодня?",
    sender: "bot",
    timestamp: new Date(),
  },
];

const suggestions = [
  "Как открыть вклад?",
  "Показать мои расходы",
  "Рекомендации по экономии",
  "Подобрать кредитную карту",
];

export function Assistant() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: "Я обработал ваш запрос. Для открытия вклада вам нужно выбрать продукт в разделе «Продукты» и нажать «Подключить». Минимальная сумма от 10 000 ₽.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleSuggestion = (suggestion: string) => {
    sendMessage(suggestion);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-white px-4 py-4 border-b border-gray-100">
        <h1 className="text-2xl font-semibold">Помощник</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: message.sender === "bot" ? "#F0F9F0" : "#E5E7EB" }}
            >
              {message.sender === "bot" ? (
                <Bot className="w-5 h-5" style={{ color: "#28A745" }} />
              ) : (
                <User className="w-5 h-5 text-gray-600" />
              )}
            </div>
            <div
              className="max-w-[75%] rounded-2xl px-4 py-3"
              style={{
                backgroundColor: message.sender === "bot" ? "#F0F9F0" : "#E5E7EB",
                borderRadius: message.sender === "bot" ? "0 16px 16px 16px" : "16px 0 16px 16px",
              }}
            >
              <p className="text-sm">{message.text}</p>
              <span className="text-xs text-gray-500 mt-1 block">
                {message.timestamp.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
          </div>
        ))}

        {/* Suggestions */}
        {messages.length === 1 && (
          <div className="space-y-2 mt-6">
            <p className="text-sm text-gray-600 mb-3">Популярные вопросы:</p>
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestion(suggestion)}
                className="w-full text-left px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm">{suggestion}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-100">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage(input)}
            placeholder="Введите ваш вопрос..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={() => sendMessage(input)}
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "#28A745" }}
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
