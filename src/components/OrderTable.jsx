// OrderTable Component
// Lesson 8:
//   - .map() with key prop to render each order row
//   - Conditional rendering: show "empty" message when no orders match filter
//   - Ternary operator for status badge color
// Lesson 9: Tailwind — table, rounded-xl, shadow-sm, overflow-hidden, hover effects

import { useState } from 'react'

// Status badge color — Lesson 8: ternary / conditions
function getStatusClass(status) {
  if (status === 'Delivered') return 'bg-green-100 text-green-700'
  if (status === 'Shipped')   return 'bg-blue-100 text-blue-700'
  if (status === 'Pending')   return 'bg-yellow-100 text-yellow-700'
  if (status === 'Cancelled') return 'bg-red-100 text-red-700'
  return 'bg-gray-100 text-gray-600'
}

const FILTERS = ['All', 'Delivered', 'Shipped', 'Pending', 'Cancelled']

function OrderTable({ orders }) {
  const [activeFilter, setActiveFilter] = useState('All')

  // Filter orders — produces a new array (like .map produces a list)
  const filtered = activeFilter === 'All'
    ? orders
    : orders.filter((o) => o.status === activeFilter)

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Table header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-5 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>

        {/* Filter buttons — Lesson 8: .map() with key */}
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={
                // Lesson 8: ternary — active filter gets filled style
                activeFilter === f
                  ? 'px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white transition duration-200'
                  : 'px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition duration-200'
              }
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Lesson 8: Conditional rendering — if/else: empty list vs table */}
      {filtered.length === 0 ? (
        // Empty list state (Lesson 8: conditional rendering)
        <div className="flex flex-col items-center justify-center py-16 text-gray-400">
          <p className="text-4xl mb-3">📭</p>
          <p className="text-sm font-medium">No orders found for "{activeFilter}"</p>
          <p className="text-xs mt-1">Try selecting a different filter.</p>
        </div>
      ) : (
        // Data table (Lesson 8: .map() with key to render rows)
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wide">
              <tr>
                {['Order ID', 'Customer', 'Product', 'Date', 'Amount', 'Status', 'Action'].map((col) => (
                  <th key={col} className="text-left px-5 py-3 whitespace-nowrap">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Lesson 8: .map() with unique key={order.id} */}
              {filtered.map((order) => (
                <tr
                  key={order.id}
                  className="border-t border-gray-100 hover:bg-gray-50 transition duration-150"
                >
                  <td className="px-5 py-3 font-mono text-blue-600 text-xs whitespace-nowrap">{order.orderId}</td>
                  <td className="px-5 py-3 font-medium text-gray-800 whitespace-nowrap">{order.customer}</td>
                  <td className="px-5 py-3 text-gray-600 whitespace-nowrap">{order.product}</td>
                  <td className="px-5 py-3 text-gray-400 text-xs whitespace-nowrap">{order.date}</td>
                  <td className="px-5 py-3 font-medium text-gray-800">{order.amount}</td>
                  <td className="px-5 py-3">
                    {/* Lesson 8: ternary via function for status color */}
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusClass(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    {/* Event handling: button click → alert */}
                    <button
                      onClick={() => alert(`Viewing details for order ${order.orderId} — ${order.customer}`)}
                      className="px-3 py-1 text-xs rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition duration-200"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default OrderTable
