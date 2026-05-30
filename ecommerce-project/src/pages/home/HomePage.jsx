import axios from "axios";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { ProductsGrid } from "./productsGrid";
import "./HomePage.css";

export function HomePage({ cart, loadCartData }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  useEffect(() => {
    const getHomeData = async () => {
      const url = search ? `/api/products?search=${search}` : "/api/products";
      const response = await axios.get(url);
      setProducts(response.data);
    };
    getHomeData();
  }, [search]);

  return (
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCartData={loadCartData} />
      </div>
    </>
  );
}
