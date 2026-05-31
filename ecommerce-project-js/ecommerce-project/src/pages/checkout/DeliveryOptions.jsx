import { formatMoney } from "../../utils/money";
import axios from "axios";
import dayjs from "dayjs";

export function DeliveryOptions({ cartItem, deliveryOptions, loadCartData }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOption) => {
        let priceString = "Free Shipping";

        if (deliveryOption.priceCents > 0) {
          priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`;
        }

        const updateDeliveryOPtion = async () => {
          await axios.put(`/api/cart-items/${cartItem.productId}`, {
            deliveryOptionId: deliveryOption.id,
          });
          await loadCartData();
        };

        return (
          <div
            key={deliveryOption.id}
            className="delivery-option"
            onClick={() => {
              updateDeliveryOPtion();
            }}
          >
            <input
              type="radio"
              checked={cartItem.deliveryOptionId === deliveryOption.id}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
              onClick={() => {}}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D",
                )}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
