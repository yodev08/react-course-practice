import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router";
import { PaymentSummary } from "./paymentSummary";
import axios from "axios";

vi.mock("axios");

describe("PaymentSummary component", () => {
  let paymentSummary;
  let loadCartData;
  let user;

  beforeEach(() => {
    user = userEvent.setup();
    loadCartData = vi.fn();

    paymentSummary = {
      totalItems: 3,
      productCostCents: 3189,
      shippingCostCents: 1500,
      totalCostBeforeTaxCents: 4689,
      taxCents: 469,
      totalCostCents: 5158,
    };
  });

  // 9i: Integration test for PaymentSummary component
  it("displays payment summary correctly", () => {
    render(
      <MemoryRouter>
        <PaymentSummary
          paymentSummary={paymentSummary}
          loadCartData={loadCartData}
        />
      </MemoryRouter>,
    );

    expect(screen.getByText("Payment Summary")).toBeInTheDocument();
    expect(screen.getByText("Items (3):")).toBeInTheDocument();
    expect(screen.getByText("$31.89")).toBeInTheDocument();
    expect(screen.getByText("Shipping & handling:")).toBeInTheDocument();
    expect(screen.getByText("$15.00")).toBeInTheDocument();
    expect(screen.getByText("Total before tax:")).toBeInTheDocument();
    expect(screen.getByText("$46.89")).toBeInTheDocument();
    expect(screen.getByText("Estimated tax (10%):")).toBeInTheDocument();
    expect(screen.getByText("$4.69")).toBeInTheDocument();
    expect(screen.getByText("Order total:")).toBeInTheDocument();
    expect(screen.getByText("$51.58")).toBeInTheDocument();
  });

  // 9j: Test Place Order button functionality
  it("calls axios.post and loadCart on Place Order click", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PaymentSummary
                paymentSummary={paymentSummary}
                loadCartData={loadCartData}
              />
            }
          />
          <Route path="/orders" element={<div>Orders Page</div>} />
        </Routes>
      </MemoryRouter>,
    );

    const placeOrderButton = screen.getByText("Place your order");
    await user.click(placeOrderButton);

    expect(axios.post).toHaveBeenCalledWith("/api/orders");
    expect(loadCartData).toHaveBeenCalled();
  });
});
