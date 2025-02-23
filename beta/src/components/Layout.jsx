// src/components/Layout.jsx
import { Link } from 'react-router-dom'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Portfolio
          </Link>
          <div className="space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-800">
              About
            </Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-white shadow-md mt-8 p-4">
        <div className="container mx-auto text-center text-gray-600">
          © 2024 Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Layout
