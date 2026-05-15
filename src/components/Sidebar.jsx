// Sidebar Component
// Lesson 8: Conditional rendering — highlight the active nav item using ternary operator
// Lesson 9: Tailwind — bg-blue-700, text-white, w-56, h-screen, flex, flex-col, py-6, px-4

// Nav items list — Lesson 8: will be rendered using .map() with keys
const navItems = [
  { id: 1, icon: '📊', label: 'Dashboard'  },
  { id: 2, icon: '📦', label: 'Orders'     },
  { id: 3, icon: '🏷️', label: 'Products'  },
  { id: 4, icon: '👤', label: 'Customers'  },
  { id: 5, icon: '📈', label: 'Analytics'  },
  { id: 6, icon: '⚙️', label: 'Settings'  },
]

function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="bg-blue-700 text-white w-56 min-h-screen flex flex-col py-6">
      {/* Brand */}
      <div className="px-6 mb-8">
        <p className="text-xs text-blue-300 uppercase tracking-widest mb-1">E-Commerce</p>
        <h2 className="text-lg font-bold">ShopEase</h2>
      </div>

      {/* Navigation — Lesson 8: .map() with key prop to render list */}
      <nav className="flex flex-col gap-1 px-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.label)}
            className={
              // Lesson 8: ternary operator for conditional class styling
              activePage === item.label
                ? 'flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white text-blue-700 font-semibold text-sm text-left transition duration-200'
                : 'flex items-center gap-3 px-4 py-2.5 rounded-lg text-blue-100 hover:bg-blue-600 text-sm text-left transition duration-200'
            }
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Logout at bottom */}
      <div className="mt-auto px-3">
        <button
          onClick={() => alert('Logging out...')}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-blue-200 hover:bg-blue-600 text-sm transition duration-200"
        >
          <span>🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
