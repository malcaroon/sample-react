// Dashboard Page Component
// Props: receives stats and orders from App.jsx
// Lesson 8: .map() with key to render StatCards list
// Lesson 9: Tailwind — grid, gap, responsive sm/lg breakpoints

import StatCard      from './StatCard'
import ActionButtons from './ActionButtons'
import AddProductForm from './AddProductForm'
import OrderTable    from './OrderTable'

function Dashboard({ stats, orders }) {
  return (
    <main className="flex-1 p-6 space-y-6 overflow-y-auto">

      {/* Section 1 — Dashboard: Stats overview */}
      <section>
        <h2 className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-3">Overview</h2>
        {/* Lesson 8: .map() with key={stat.id} to render stats list */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </section>

      {/* Section 2 — Action Buttons */}
      <section>
        <ActionButtons />
      </section>

      {/* Section 3 — Form UI: Add Product */}
      <section>
        <AddProductForm />
      </section>

      {/* Section 4 — Data Table: Orders */}
      <section>
        <OrderTable orders={orders} />
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 pb-4">
        ShopEase Dashboard · UI Prototype · React + Vite + Tailwind CSS
      </footer>
    </main>
  )
}

export default Dashboard
