# ShopEase — E-Commerce Dashboard UI Prototype

A React UI draft prototype for DCIT 26 — applying concepts from Lesson 8 and Lesson 9.

## Lessons Applied

### Lesson 8 — Conditional Rendering & Lists
| Concept       | Where Used |
|---------------|------------|
| `if / else`   | `App.jsx` — shows Dashboard or "under construction" page |
| Ternary `? :` | `StatCard`, `Sidebar`, `OrderTable` — active styles, badge colors |
| `&&`          | `SearchBar` (show Search/Clear buttons), `Header` (notification dot), `AddProductForm` (success banner) |
| `.map()` + `key` | `Sidebar` nav items, `StatCard` grid, `OrderTable` rows + filter buttons + table headers, `ActionButtons` grid, form category options |

### Lesson 9 — Styling in React with Tailwind CSS
| Category      | Classes Used |
|---------------|-------------|
| Text          | `text-xl`, `text-sm`, `font-bold`, `font-medium`, `text-blue-700`, `text-gray-500` |
| Background    | `bg-white`, `bg-blue-600`, `bg-gray-100`, `bg-green-50` |
| Padding       | `px-6`, `py-4`, `p-5`, `p-6` |
| Margin        | `mb-5`, `mt-auto`, `gap-4` |
| Border        | `border`, `rounded-lg`, `rounded-xl`, `rounded-full` |
| Layout        | `flex`, `grid`, `grid-cols-2`, `lg:grid-cols-4`, `h-screen`, `w-full` |
| Shadow        | `shadow-sm`, `shadow-md` |
| Hover         | `hover:bg-blue-700`, `hover:text-white`, `hover:shadow-md` |
| Responsive    | `sm:grid-cols-2`, `lg:grid-cols-4`, `sm:flex-row` |
| Transition    | `transition`, `duration-200` |

## Project Structure
```
ecom-dashboard/
├── src/
│   ├── components/
│   │   ├── Header.jsx        ← Header with SearchBar + notification bell
│   │   ├── Sidebar.jsx       ← Collapsible nav with active state
│   │   ├── SearchBar.jsx     ← Controlled input with conditional buttons
│   │   ├── StatCard.jsx      ← KPI card, receives stat as prop
│   │   ├── OrderTable.jsx    ← Filterable table, empty list state
│   │   ├── AddProductForm.jsx← Form UI with validation + success state
│   │   ├── ActionButtons.jsx ← Quick action grid
│   │   └── Dashboard.jsx     ← Dashboard page layout
│   ├── data/
│   │   └── mockData.js       ← All dummy/mock data
│   ├── App.jsx               ← Root: useState, conditional rendering
│   ├── index.css             ← Tailwind base import
│   └── main.jsx              ← React entry point
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Getting Started
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)
