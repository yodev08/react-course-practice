export interface Rating {
  stars: number;
  count: number;
}

export interface Product {
  id: string;
  image: string;
  name: string;
  rating: Rating;
  priceCents: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
  deliveryOptionId: string;
  product: Product;
}

export type Cart = CartItem[];

export type LoadCartData = () => Promise<void>;

export interface DeliveryOption {
  id: string;
  deliveryDays: number;
  priceCents: number;
  estimatedDeliveryTimeMs: number;
}

export interface PaymentSummaryData {
  totalItems: number;
  productCostCents: number;
  shippingCostCents: number;
  totalCostBeforeTaxCents: number;
  taxCents: number;
  totalCostCents: number;
}

export interface OrderProduct {
  product: Product;
  quantity: number;
  estimatedDeliveryTimeMs: number;
}

export interface Order {
  id: string;
  orderTimeMs: number;
  totalCostCents: number;
  products: OrderProduct[];
}
