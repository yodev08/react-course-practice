# 🛍️ E-Commerce Project

A fully-featured React e-commerce website featuring product display, search, shopping cart, order management, and real-time delivery tracking.

## ✨ Key Features

### Core Features
- 📱 **Product Display** - Responsive grid layout, scales from 8 columns to fluid display
- 🔍 **Search Functionality** - Real-time product search with URL parameter persistence
- 🛒 **Shopping Cart Management**
  - Add/remove items
  - Modify quantities
  - Auto-update delivery options
  - Real-time payment summary updates

### Advanced Features
- 📦 **Delivery Options** - Multiple shipping method choices
- 💳 **Checkout Flow** - Two-column layout (order summary + payment summary)
- 📋 **Order Management** - View order history sorted by date
- 📍 **Delivery Tracking** - Dynamic progress bar with real-time status (Preparing → Shipped → Delivered)
- ✅ **Automated Testing** - 13+ unit and integration tests

## 🛠 Tech Stack

| Technology | Description |
|------|------|
| **React 19** | Frontend framework |
| **Vite 6** | Build tool |
| **React Router 7** | Routing management |
| **Axios** | HTTP client |
| **Vitest** | Unit testing framework |
| **React Testing Library** | Component testing library |
| **CSS3** | Styling (Grid, Flexbox) |

## 📦 Project Structure

```
src/
├── components/          # Shared components
│   └── Header.jsx       # Navigation (search + cart + orders)
├── pages/
│   ├── home/           # Home page
│   │   ├── HomePage.jsx
│   │   ├── product.jsx
│   │   ├── productsGrid.jsx
│   │   └── *.test.jsx
│   ├── checkout/       # Checkout page
│   │   ├── CheckoutPage.jsx
│   │   ├── OrderSummary.jsx
│   │   ├── CartItemDetails.jsx
│   │   ├── DeliveryOptions.jsx
│   │   ├── paymentSummary.jsx
│   │   └── PaymentSummary.test.jsx
│   ├── orders/         # Orders page
│   │   ├── OrdersPage.jsx
│   │   ├── OrdersGrid.jsx
│   │   ├── OrderHeader.jsx
│   │   └── OrderDetailsGrid.jsx
│   └── Trackingpage.jsx # Delivery tracking page
├── utils/
│   └── money.js        # Currency formatting utility
├── App.jsx             # Route configuration
└── main.jsx            # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Visit `http://localhost:5173`

### Production Build
```bash
npm run build
npm run preview
```

### Run Tests
```bash
npm test              # Run tests in watch mode
npm test -- --run     # Run tests once
```

## 📸 Project Screenshots

### Home Page - Product Display & Search
![Home Page](./screenshots/home-page.png)

### Checkout Page - Shopping Cart
![Checkout Page](./screenshots/checkout-page.png)

### Tracking Page - Real-time Delivery Progress
![Tracking Page](./screenshots/tracking-page.png)

## 📋 Course Exercises Completion

### Lesson 8 - Core Features
- ✅ 8a-8d: Add to cart, Added message
- ✅ 8e-8i: Quantity edit functionality
- ✅ 8j-8l: Search implementation

### Lesson 9 - Automated Testing
- ✅ 9a: formatMoney(0) → '$0.00'
- ✅ 9b: Negative number format → '-$9.99'
- ✅ 9c-9e: Product component tests
- ✅ 9f: userEvent reuse
- ✅ 9g-9h: HomePage Add to Cart tests
- ✅ 9i-9j: PaymentSummary integration tests

**Test Coverage**: 13/13 tests ✓

## 📝 Implementation Notes

### Key Implementation Details
- Search uses URL parameter `?search=query` for persistence
- Delivery tracking retrieves `:orderId/:productId` via `useParams()`
- Progress calculation: `(timePassedMs / totalTimeMs) * 100`
- Payment summary auto-refreshes when cart is updated

### Important Files
- `money.js` - Handles currency formatting for positive and negative numbers
- `CartItemDetails.jsx` - Reusable component for quantity editing
- `PaymentSummary.jsx` - Payment summary using `useNavigate`

## 🤝 Backend API

Works with the `ecommerce-backend` project:
- `GET /api/products` - Get product list
- `GET /api/products?search=` - Search products
- `POST /api/cart-items` - Add to cart
- `PUT /api/cart-items/:productId` - Update quantity
- `DELETE /api/cart-items/:productId` - Delete item
- `GET /api/orders` - Get order list
- `GET /api/orders/:orderId` - Get single order
- `POST /api/orders` - Create order
- `GET /api/delivery-options` - Get delivery options
- `GET /api/payment-summary` - Get payment summary

## 📖 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [Vitest Documentation](https://vitest.dev)

## 📄 License

MIT License

---

**Author**: yoyo | **Last Updated**: May 2026
