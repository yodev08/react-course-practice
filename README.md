# 🎓 React Practice Projects

A collection of React practice projects from a comprehensive web development course, featuring modern tools and best practices.

## 📚 Projects Overview

### 1. 🛍️ [E-Commerce Project](./ecommerce-project)

A fully-featured e-commerce website built with React, featuring:

- Product display with responsive grid layout
- Real-time search functionality
- Shopping cart management with quantity editing
- Checkout flow with delivery options
- Order management and history
- Real-time delivery tracking with progress bar
- **13+ automated tests** (Vitest + React Testing Library)

**Tech Stack**: React 19 | Vite 6 | React Router 7 | Axios  
**Status**: ✅ Complete with full test coverage

[View Full README →](./ecommerce-project/README.md)

---

### 2. 💬 [Chatbot Project](./chatbot-project)

A real-time chatbot application built with React and Vite.

**Tech Stack**: React 19 | Vite 6  
**Features**: Message display, user input, real-time chat interface

[View Project →](./chatbot-project)

---

### 3. 📦 [E-Commerce Backend](./ecommerce-backend)

Node.js backend server providing REST API for the e-commerce project.

**Tech Stack**: Node.js | Express | JSON (simulated database)  
**Endpoints**: Products, Cart Items, Orders, Delivery Options, Payment Summary

**API Documentation**:

- `GET /api/products` - Get product list
- `GET /api/products?search=` - Search products
- `POST /api/cart-items` - Add to cart
- `PUT /api/cart-items/:productId` - Update quantity
- `DELETE /api/cart-items/:productId` - Delete item
- `GET /api/orders` - Get orders
- `POST /api/orders` - Create order
- `GET /api/delivery-options` - Get delivery options
- `GET /api/payment-summary` - Get payment summary

[View Project →](./ecommerce-backend)

---

### 4. 📱 [E-Commerce Project TS](./ecommerce-project-ts)

TypeScript version of the e-commerce project with enhanced type safety.

**Tech Stack**: React 19 | Vite 6 | TypeScript | React Router 7

[View Project →](./ecommerce-project-ts)

---

## 🚀 Quick Start

### E-Commerce Project (Main)

**Frontend:**

```bash
cd ecommerce-project
npm install
npm run dev        # Development server
npm run build      # Production build
npm test -- --run  # Run tests
```

**Backend:**

```bash
cd ecommerce-backend
npm install
npm run dev        # Start backend server (port 3000)
```

### Chatbot Project

```bash
cd chatbot-project
npm install
npm run dev
```

---

## 📖 Course Learning Path

This repository represents a complete React learning journey:

### Phase 1: Fundamentals

- Component structure and JSX
- State management with hooks (useState, useEffect)
- Props and data flow

### Phase 2: E-Commerce Features

- **Lesson 8**: Core features (shopping cart, search, quantity editing)
  - Add to cart functionality
  - Real-time search with URL parameters
  - Quantity input and updates
- **Lesson 9**: Automated Testing
  - Unit tests with Vitest
  - Component testing with React Testing Library
  - Integration tests
  - 13+ tests covering core functionality

### Phase 3: Advanced Topics

- Routing with React Router
- API integration with Axios
- Component composition and reusability
- Performance optimization

---

## 🛠 Technology Stack

| Category               | Technologies                  |
| ---------------------- | ----------------------------- |
| **Frontend Framework** | React 19                      |
| **Build Tool**         | Vite 6                        |
| **Routing**            | React Router 7                |
| **HTTP Client**        | Axios                         |
| **Testing**            | Vitest, React Testing Library |
| **Styling**            | CSS3 (Grid, Flexbox)          |
| **Backend**            | Node.js, Express              |
| **Language**           | JavaScript, TypeScript        |

---

## 📊 Project Statistics

- **Total Projects**: 4
- **Test Coverage**: 13+ tests in main e-commerce project
- **API Endpoints**: 10+
- **Components**: 15+
- **Lines of Code**: 2000+

---

## 📸 E-Commerce Project Screenshots

### Home Page

![Home Page](./ecommerce-project/screenshots/home-page.png)

### Checkout Page

![Checkout](./ecommerce-project/screenshots/checkout-page.png)

### Delivery Tracking

![Tracking](./ecommerce-project/screenshots/tracking-page.png)

---

## 📝 Key Learnings

### Best Practices Implemented

- ✅ Component composition and reusability
- ✅ Hook usage patterns (useState, useEffect, useContext)
- ✅ URL-based state management for search persistence
- ✅ Proper error handling and loading states
- ✅ Responsive design with CSS Grid/Flexbox
- ✅ Comprehensive test coverage
- ✅ Clean code organization and structure

### Challenges & Solutions

**Search Persistence**

- Problem: Search query lost on navigation
- Solution: Store search in URL parameters using `useSearchParams()`

**Progress Calculation**

- Problem: Real-time delivery tracking updates
- Solution: Calculate percentage based on elapsed time vs. total time

**Component Extraction**

- Problem: Avoiding prop drilling and component bloat
- Solution: Extract reusable components (CartItemDetails, OrderHeader, etc.)

---

## 🔗 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router Guide](https://reactrouter.com)
- [Vitest Documentation](https://vitest.dev)
- [Axios Documentation](https://axios-http.com)

---

## 📄 License

MIT License - Free to use and modify

---

## 👤 Author

**yoyo**

- GitHub: [@yoyo08](https://github.com/yoyo08)
- Repository: [react-practice-projects](https://github.com/yoyo08/react-practice-projects)

---

**Last Updated**: May 2026  
**Total Commits**: 50+
