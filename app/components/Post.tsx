'use client'

import { useState } from 'react'
import { Heart, MessageCircle, Send } from 'lucide-react'

interface Comment {
  id: number
  author: string
  content: string
}

interface PostProps {
  id: number
  author: string
  content: string
  likes: number
  comments: Comment[]
}

export default function Post({ id, author, content, likes: initialLikes, comments: initialComments }: PostProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState('')
  const [showComments, setShowComments] = useState(false)

  const handleLike = () => {
    setLikes(likes + 1)
  }

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        author: 'Current User',
        content: newComment.trim()
      }
      setComments([...comments, comment])
      setNewComment('')
    }
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-bold text-gray-800">{author}</h3>
      <p className="mt-2 text-gray-600">{content}</p>
      <div className="mt-4 flex items-center space-x-4">
        <button
          onClick={handleLike}
          className="text-gray-500 hover:text-red-500 flex items-center"
        >
          <Heart size={20} className={likes > initialLikes ? 'fill-red-500 text-red-500' : ''} />
          <span className="ml-1">{likes}</span>
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="text-gray-500 hover:text-blue-500 flex items-center"
        >
          <MessageCircle size={20} />
          <span className="ml-1">{comments.length}</span>
        </button>
      </div>
      {showComments && (
        <div className="mt-4">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-gray-50 p-2 rounded mt-2">
              <span className="font-semibold">{comment.author}: </span>
              {comment.content}
            </div>
          ))}
          <form onSubmit={handleAddComment} className="mt-2 flex">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="input flex-grow"
            />
            <button type="submit" className="ml-2 text-blue-600 hover:text-blue-800">
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

