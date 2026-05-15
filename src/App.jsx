// App.jsx — Root Component
// useState: tracks which sidebar page is active
// Lesson 8: conditional rendering — show Dashboard or "coming soon" for other pages
// Lesson 9: Tailwind — flex, h-screen, overflow-hidden

import { useState } from 'react'
import Header    from './components/Header'
import Sidebar   from './components/Sidebar'
import Dashboard from './components/Dashboard'

import { stats, orders } from './data/mockData'

function App() {
  // useState: controls which nav page is active (Lesson 8: conditional rendering)
  const [activePage, setActivePage] = useState('Dashboard')

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">

      {/* Sidebar — passes activePage and setter as props */}
      <Sidebar activePage={activePage} onNavigate={setActivePage} />

      {/* Main column */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Header */}
        <Header />

        {/* Lesson 8: Conditional rendering — if/else
            Show Dashboard page content, or a placeholder for other pages */}
        {activePage === 'Dashboard' ? (
          // Props: passing mock data down to Dashboard
          <Dashboard stats={stats} orders={orders} />
        ) : (
          // Conditional render: placeholder for non-dashboard pages
          <div className="flex flex-col items-center justify-center flex-1 text-gray-400">
            <p className="text-5xl mb-4">🚧</p>
            <p className="text-xl font-semibold text-gray-500">{activePage}</p>
            <p className="text-sm mt-2">This page is under construction.</p>
            <button
              onClick={() => setActivePage('Dashboard')}
              className="mt-6 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition duration-200"
            >
              ← Back to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
