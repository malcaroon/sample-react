// Mock data only — no real database or backend (per instructions)

export const stats = [
  { id: 1, label: 'Total Revenue',  value: '$84,320', change: '+12%', up: true  },
  { id: 2, label: 'Orders Today',   value: '1,284',   change: '+5%',  up: true  },
  { id: 3, label: 'Active Users',   value: '9,741',   change: '-2%',  up: false },
  { id: 4, label: 'Avg. Order Val', value: '$65.70',  change: '+3%',  up: true  },
]

export const orders = [
  { id: 1, orderId: '#ORD-001', customer: 'Mia Santos',      product: 'Air Max 2024',        status: 'Delivered', amount: '$129.00', date: '2025-04-28' },
  { id: 2, orderId: '#ORD-002', customer: 'Leo Reyes',        product: 'Wireless Earbuds',    status: 'Pending',   amount: '$89.99',  date: '2025-04-27' },
  { id: 3, orderId: '#ORD-003', customer: 'Clara Tan',        product: 'Bamboo Desk Lamp',    status: 'Shipped',   amount: '$44.50',  date: '2025-04-27' },
  { id: 4, orderId: '#ORD-004', customer: 'James Uy',         product: 'Smart Water Bottle',  status: 'Cancelled', amount: '$32.00',  date: '2025-04-26' },
  { id: 5, orderId: '#ORD-005', customer: 'Sophia Cruz',      product: 'Canvas Backpack',     status: 'Delivered', amount: '$74.00',  date: '2025-04-25' },
  { id: 6, orderId: '#ORD-006', customer: 'Nathan Lim',       product: 'Mechanical Keyboard', status: 'Pending',   amount: '$149.95', date: '2025-04-25' },
  { id: 7, orderId: '#ORD-007', customer: 'Aria Villanueva',  product: 'Yoga Mat Pro',        status: 'Shipped',   amount: '$55.00',  date: '2025-04-24' },
]

export const categories = ['Electronics', 'Apparel', 'Home & Living', 'Sports', 'Accessories']
