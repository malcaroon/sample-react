// StatCard Component
// Props usage: receives { stat } from parent (Dashboard)
// Lesson 8: ternary operator — green if up, red if down
// Lesson 9: Tailwind — bg-white, rounded-xl, shadow-sm, p-5, text-2xl, font-bold

function StatCard({ stat }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-3 hover:shadow-md transition duration-200">
      <p className="text-sm text-gray-500 uppercase tracking-wide">{stat.label}</p>

      <p className="text-2xl font-bold text-gray-800">{stat.value}</p>

      {/* Lesson 8: ternary — different color based on whether change is positive */}
      <span
        className={
          stat.up
            ? 'text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full w-fit'
            : 'text-xs font-medium text-red-600 bg-red-100 px-2 py-0.5 rounded-full w-fit'
        }
      >
        {stat.up ? '▲' : '▼'} {stat.change}
      </span>
    </div>
  )
}

export default StatCard
