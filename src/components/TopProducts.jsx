function TopProducts({ products }) {
  const max = Math.max(...products.map(p => p.sales))

  return (
    <div className="bg-[#181c27] border border-[#252a3a] rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display font-bold text-white text-lg">Top Products</h2>
        <button
          onClick={() => alert('Exporting product report...')}
          className="px-3 py-1.5 rounded-lg bg-[#252a3a] hover:bg-[#2e3448] text-slate-400 hover:text-white text-xs font-medium transition-colors"
        >
          Export ↓
        </button>
      </div>

      <div className="space-y-4">
        {products.map((product, i) => (
          <div key={product.name} className="group">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-600 w-4">{i + 1}</span>
                <span className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">
                  {product.name}
                </span>
              </div>
              <div className="flex items-center gap-3 text-right">
                <span className="text-xs text-slate-500">{product.sales} sold</span>
                <span className="text-sm font-mono text-white">{product.revenue}</span>
              </div>
            </div>
            {/* Progress bar */}
            <div className="h-1.5 rounded-full bg-[#252a3a] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-500 to-violet-500 transition-all"
                style={{ width: `${(product.sales / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopProducts
