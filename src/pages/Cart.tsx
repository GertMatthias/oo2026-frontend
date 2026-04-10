import { useState } from "react";

function Cart() {
const [orderRow, setOrderRows] = useState(JSON.parse(localStorage.getItem("cart") || "[]"));

  return (
    <div>
      {orderRow.map(orderRow =>
        <div key={orderRow.product.id}>
          <div>{orderRow.product.name}</div>
          <div>{orderRow.product.price}$</div>
          <div>{orderRow.quantity}tk</div>
          <div>{orderRow.product.price * orderRow.quantity}$</div>
          <button>x</button>
        </div>
      )}
    </div>
  )
}

export default Cart