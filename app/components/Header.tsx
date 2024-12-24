import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center max-w-2xl">
        <Link href="/" className="text-blue-600 text-2xl font-bold">
          ModernSocial
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/profile" className="text-gray-600 hover:text-blue-600">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

