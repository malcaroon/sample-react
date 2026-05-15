// AddProductForm Component
// useState: controls each input field
// Event handling: submit → console.log + alert, reset → clears form
// Lesson 8: conditional rendering — show success message after submit
// Lesson 9: Tailwind — form styling, grid, rounded-lg, focus:ring, transition

import { useState } from 'react'
import { categories } from '../data/mockData'

const EMPTY_FORM = { name: '', category: '', price: '', stock: '', description: '' }

function AddProductForm() {
  const [form, setForm]       = useState(EMPTY_FORM)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Basic validation
    if (!form.name.trim() || !form.price) {
      alert('Please fill in Product Name and Price.')
      return
    }
    // Event handling: log to console (per instructions)
    console.log('Product submitted:', form)
    alert(`Product "${form.name}" added successfully!\n(Check browser console for data)`)
    // Lesson 8: conditional rendering — show success state
    setSuccess(true)
    setForm(EMPTY_FORM)
    setTimeout(() => setSuccess(false), 3000)
  }

  const handleReset = () => {
    setForm(EMPTY_FORM)
    setSuccess(false)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-5">Add New Product</h2>

      {/* Lesson 8: && — show success banner only when submitted successfully */}
      {success && (
        <div className="mb-4 px-4 py-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium">
          ✅ Product added successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Product Name */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">
            Product Name <span className="text-red-400">*</span>
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Wireless Headphones"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">
            Category
          </label>
          {/* Lesson 8: .map() with key to render dropdown options from list */}
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-white"
          >
            <option value="">Select category...</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">
            Price (USD) <span className="text-red-400">*</span>
          </label>
          <input
            name="price"
            type="number"
            min="0"
            step="0.01"
            value={form.price}
            onChange={handleChange}
            placeholder="0.00"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">
            Stock Quantity
          </label>
          <input
            name="stock"
            type="number"
            min="0"
            value={form.stock}
            onChange={handleChange}
            placeholder="0"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          />
        </div>

        {/* Description */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={3}
            placeholder="Brief product description..."
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 resize-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="sm:col-span-2 flex flex-wrap gap-3 pt-1">
          <button
            type="submit"
            className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Add Product
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-5 py-2.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-200 transition duration-200"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => alert('Form cancelled. No changes saved.')}
            className="px-5 py-2.5 border border-gray-300 text-gray-500 text-sm font-medium rounded-lg hover:border-red-300 hover:text-red-500 transition duration-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm
