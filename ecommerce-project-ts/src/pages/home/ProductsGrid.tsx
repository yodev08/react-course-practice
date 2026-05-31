import { Product } from "./Product";
import type { LoadCartData, Product as ProductType } from "../../types";

export function ProductsGrid({
  products,
  loadCartData,
}: {
  products: ProductType[];
  loadCartData: LoadCartData;
}) {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            loadCartData={loadCartData}
          />
        );
      })}
    </div>
  );
}
