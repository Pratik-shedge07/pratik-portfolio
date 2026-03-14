import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

type Message = {
  role: "user" | "bot"
  text: string
}

const knowledgeBase: { question: string; answer: string }[] = [
  {
    question: "projects",
    answer:
      "Pratik has built projects like DSA Master Tracker, StudySense AI, Emoticonix, and Dairy Clouds."
  },
  {
    question: "skills",
    answer:
      "Pratik specializes in React, UI Engineering, Java, Backend development, and Data Structures."
  },
  {
    question: "contact",
    answer:
      "You can contact Pratik via email or LinkedIn using the contact section of this website."
  },
  {
    question: "who",
    answer:
      "Pratik is a frontend developer focused on building modern interactive web applications."
  }
]

function getBotReply(input: string) {
  const text = input.toLowerCase()

  const found = knowledgeBase.find(item =>
    text.includes(item.question)
  )

  if (found) return found.answer

  return "I'm not sure about that yet, but you can explore the portfolio sections to learn more about Pratik."
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi! Ask me about Pratik, his projects, or skills." }
  ])

  const sendMessage = () => {
    if (!input.trim()) return

    const userMessage: Message = { role: "user", text: input }
    const botMessage: Message = { role: "bot", text: getBotReply(input) }

    setMessages([...messages, userMessage, botMessage])
    setInput("")
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-indigo-600 p-4 rounded-full shadow-lg hover:bg-indigo-500"
      >
        {open ? <X /> : <MessageCircle />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-gray-900 border border-white/10 rounded-xl shadow-xl flex flex-col">

          <div className="p-4 border-b border-white/10 font-semibold">
            AI Assistant
          </div>

          <div className="p-4 flex-1 overflow-y-auto space-y-2 text-sm">

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.role === "user"
                    ? "bg-indigo-600 ml-auto"
                    : "bg-gray-700"
                }`}
              >
                {msg.text}
              </div>
            ))}

          </div>

          <div className="flex border-t border-white/10">

            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 bg-transparent p-3 outline-none"
            />

            <button
              onClick={sendMessage}
              className="px-4 bg-indigo-600 hover:bg-indigo-500"
            >
              Send
            </button>

          </div>

        </div>
      )}
    </>
  )
}