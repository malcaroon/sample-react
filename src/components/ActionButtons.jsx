// ActionButtons Component
// Lesson 8: .map() with key prop to render the list of action buttons
// Lesson 9: Tailwind — grid, gap, rounded-lg, hover effects, transition, shadow

// Action data list — rendered with .map() per Lesson 8
const ACTIONS = [
  { id: 1, label: 'New Order',      icon: '📦', color: 'bg-blue-600 hover:bg-blue-700 text-white',                       msg: 'Opening new order form...'      },
  { id: 2, label: 'Add Customer',   icon: '👤', color: 'bg-violet-600 hover:bg-violet-700 text-white',                   msg: 'Opening add customer panel...'  },
  { id: 3, label: 'Generate Report',icon: '📊', color: 'bg-emerald-600 hover:bg-emerald-700 text-white',                 msg: 'Generating monthly report...'   },
  { id: 4, label: 'Export CSV',     icon: '📁', color: 'bg-gray-100 hover:bg-gray-200 text-gray-700',                    msg: 'Exporting data as CSV...'       },
  { id: 5, label: 'Print Invoice',  icon: '🖨️', color: 'bg-gray-100 hover:bg-gray-200 text-gray-700',                   msg: 'Opening print dialog...'        },
  { id: 6, label: 'Archive Orders', icon: '🗂️', color: 'border border-red-300 hover:bg-red-50 text-red-500',            msg: 'Archiving completed orders...'  },
]

function ActionButtons() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>

      {/* Lesson 8: .map() with key={action.id} — renders list of buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {ACTIONS.map((action) => (
          <button
            key={action.id}
            onClick={() => alert(action.msg)}
            className={`
              flex flex-col items-center gap-2 py-4 px-3
              rounded-xl text-sm font-medium text-center
              transition duration-200 active:scale-95
              ${action.color}
            `}
          >
            <span className="text-2xl">{action.icon}</span>
            <span className="text-xs leading-tight">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ActionButtons
