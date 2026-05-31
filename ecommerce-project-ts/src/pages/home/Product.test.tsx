import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent, { type UserEvent } from "@testing-library/user-event";
import { Product } from "./Product";
import axios from "axios";
import type { Mock } from "vitest";
import type { LoadCartData, Product as ProductType } from "../../types";

vi.mock("axios");

describe("Product component", () => {
  let product: ProductType;
  let loadCartData: Mock<LoadCartData>;
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();

    product = {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
    };

    loadCartData = vi.fn();
  });

  it("displays the product details correctly", () => {
    render(<Product product={product} loadCartData={loadCartData} />);

    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs"),
    ).toBeInTheDocument();

    expect(screen.getByText("$10.90")).toBeInTheDocument();

    expect(screen.getByTestId("product-image")).toHaveAttribute(
      "src",
      "images/products/athletic-cotton-socks-6-pairs.jpg",
    );

    expect(screen.getByTestId("product-rating-stars")).toHaveAttribute(
      "src",
      "images/ratings/rating-45.png",
    );

    expect(screen.getByText("87")).toBeInTheDocument();
  });

  it("can select a quantity", () => {
    render(<Product product={product} loadCartData={loadCartData} />);

    const quantitySelector = screen.getByTestId("quantity-selector");
    expect(quantitySelector).toHaveValue("1");
  });

  it("updates quantity when selected", async () => {
    render(<Product product={product} loadCartData={loadCartData} />);

    const quantitySelector = screen.getByTestId("quantity-selector");
    await user.selectOptions(quantitySelector, "3");

    expect(quantitySelector).toHaveValue("3");
  });

  it("adds a product to the cart", async () => {
    render(<Product product={product} loadCartData={loadCartData} />);

    const quantitySelector = screen.getByTestId("quantity-selector");
    await user.selectOptions(quantitySelector, "3");

    const addToCartButton = screen.getByTestId("add-to-cart-button");
    await user.click(addToCartButton);

    expect(vi.mocked(axios.post)).toHaveBeenCalledWith("/api/cart-items", {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
    });

    expect(loadCartData).toHaveBeenCalled();
  });
});
