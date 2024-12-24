'use client'

import { useState } from 'react'
import Post from './Post'
import PostInput from './PostInput'

interface Comment {
  id: number
  author: string
  content: string
}

interface PostData {
  id: number
  author: string
  content: string
  likes: number
  comments: Comment[]
}

const initialPosts: PostData[] = [
  { id: 1, author: 'John Doe', content: 'Hello, world!', likes: 5, comments: [] },
  { id: 2, author: 'Jane Smith', content: 'React is awesome!', likes: 10, comments: [] },
  { id: 3, author: 'Bob Johnson', content: 'Next.js is the future!', likes: 8, comments: [] },
]

export default function Feed() {
  const [posts, setPosts] = useState(initialPosts)

  const handleNewPost = (content: string) => {
    const newPost: PostData = {
      id: Date.now(),
      author: 'Current User',
      content,
      likes: 0,
      comments: [],
    }
    setPosts([newPost, ...posts])
  }

  return (
    <div>
      <PostInput onSubmit={handleNewPost} />
      <div className="space-y-4">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}

