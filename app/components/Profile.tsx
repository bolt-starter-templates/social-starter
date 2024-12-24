'use client'

import { useState } from 'react'
import { User, Mail, MapPin, Briefcase, Calendar, Edit2 } from 'lucide-react'

interface ProfileProps {
  initialData: {
    name: string
    email: string
    location: string
    occupation: string
    joinDate: string
    bio: string
    avatar: string
  }
}

export default function Profile({ initialData }: ProfileProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState(initialData)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfileData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsEditing(false)
    // Here you would typically send the updated data to your backend
    console.log('Updated profile data:', profileData)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-start mb-4">
        <img src={profileData.avatar} alt={profileData.name} className="w-24 h-24 rounded-full" />
        <button onClick={() => setIsEditing(!isEditing)} className="btn">
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" value={profileData.name} onChange={handleInputChange} className="input" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" value={profileData.email} onChange={handleInputChange} className="input" />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input type="text" id="location" name="location" value={profileData.location} onChange={handleInputChange} className="input" />
          </div>
          <div>
            <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">Occupation</label>
            <input type="text" id="occupation" name="occupation" value={profileData.occupation} onChange={handleInputChange} className="input" />
          </div>
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea id="bio" name="bio" value={profileData.bio} onChange={handleInputChange} className="input" rows={3}></textarea>
          </div>
          <button type="submit" className="btn">Save Changes</button>
        </form>
      ) : (
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">{profileData.name}</h2>
          <p className="flex items-center text-gray-600"><Mail size={16} className="mr-2" /> {profileData.email}</p>
          <p className="flex items-center text-gray-600"><MapPin size={16} className="mr-2" /> {profileData.location}</p>
          <p className="flex items-center text-gray-600"><Briefcase size={16} className="mr-2" /> {profileData.occupation}</p>
          <p className="flex items-center text-gray-600"><Calendar size={16} className="mr-2" /> Joined {profileData.joinDate}</p>
          <p className="mt-4 text-gray-700">{profileData.bio}</p>
        </div>
      )}
    </div>
  )
}

