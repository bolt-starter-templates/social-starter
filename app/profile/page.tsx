'use client'

import Profile from '../components/Profile'

const initialProfileData = {
  name: "John Doe",
  email: "john.doe@example.com",
  location: "New York, NY",
  occupation: "Software Developer",
  joinDate: "January 2023",
  bio: "I'm a software developer passionate about building web applications and exploring new technologies.",
  avatar: "/placeholder.svg?height=96&width=96"
}

export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-800">My Profile</h1>
      <Profile initialData={initialProfileData} />
    </div>
  )
}

