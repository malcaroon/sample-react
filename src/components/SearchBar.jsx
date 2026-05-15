// SearchBar Component
// Lesson 8: Conditional rendering — show "clear" button only when query is not empty
// Lesson 9: Tailwind — border, rounded-lg, px-4, py-2, focus:ring, transition

import { useState } from 'react'

function SearchBar() {
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    // Event handling: alert (Lesson instruction)
    if (query.trim()) {
      alert(`Searching for: "${query}"`)
      setQuery('')
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
          🔍
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search orders or products..."
          className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-52 transition duration-200"
        />
      </div>

      {/* Lesson 8: && — show Search button only when query has text */}
      {query.trim() && (
        <button
          type="submit"
          className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Search
        </button>
      )}

      {/* Lesson 8: && — show Clear button only when there is input */}
      {query && (
        <button
          type="button"
          onClick={() => setQuery('')}
          className="text-gray-400 hover:text-red-500 text-sm transition duration-200"
        >
          ✕
        </button>
      )}
    </form>
  )
}

export default SearchBar
