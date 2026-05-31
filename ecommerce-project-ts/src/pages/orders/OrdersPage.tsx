import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./OrdersPage.css";
import { OrdersGrid } from "./OrdersGrid";
import type { Cart, Order } from "../../types";

export function OrdersPage({ cart }: { cart: Cart }) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const loadOrders = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    loadOrders();
  }, []);

  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} />
      </div>
    </>
  );
}
