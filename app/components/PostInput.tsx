'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

interface PostInputProps {
  onSubmit: (content: string) => void
}

export default function PostInput({ onSubmit }: PostInputProps) {
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (content.trim()) {
      onSubmit(content)
      setContent('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center bg-white rounded-lg shadow p-2">
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="flex-grow px-2 py-1 outline-none"
        />
        <button
          type="submit"
          className="ml-2 text-blue-600 hover:text-blue-800"
          aria-label="Send post"
        >
          <Send size={20} />
        </button>
      </div>
    </form>
  )
}

