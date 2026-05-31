import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Cart } from "./types";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { TrackingPage } from "./pages/Trackingpage";
import "./App.css";

function App() {
  const [cart, setCart] = useState<Cart>([]);

  const loadCartData = async () => {
    try {
      const response = await axios.get<Cart>(
        "/api/cart-items?expand=product",
      );
      setCart(Array.isArray(response.data) ? response.data : []);
    } catch {
      setCart([]);
    }
  };
  useEffect(() => {
    loadCartData();
  }, []);

  return (
    <Routes>
      <Route
        index
        element={<HomePage cart={cart} loadCartData={loadCartData} />}
      />
      <Route
        path="checkout"
        element={<CheckoutPage cart={cart} loadCartData={loadCartData} />}
      />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route
        path="tracking/:orderId/:productId"
        element={<TrackingPage cart={cart} />}
      />
    </Routes>
  );
}

export default App;
