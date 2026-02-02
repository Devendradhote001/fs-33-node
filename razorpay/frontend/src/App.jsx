import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [amount, setAmount] = useState(0);

  const handlePay = async () => {
    try {
      let res = await axios.post(
        "http://localhost:3000/api/payment/create-order",
        { amount }
      );

      if (res) {
        console.log("res->", res);

        let options = {
          key: res.data?.rzp_key_id,
          amount: res.data?.amount,
          currency: "INR",
          order_id: res.data?.order.order_id,
          name: "FS33/E-comm",
          description: "Test Transaction",

          handler: async (response) => {
            let res = await axios.post(
              "http://localhost:3000/api/payment/verify-payment",
              response
            );
            if (res) {
              console.log(res);
            }
          },
          theme: {
            color: "red",
          },
        };

        let rzp = new window.Razorpay(options);
        rzp.open();
      }
    } catch (error) {
      console.log("error in orders api", error);
    }
  };

  return (
    <div>
      <h1>hello</h1>
      <input
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        placeholder="Enter amount"
      />

      <button onClick={handlePay}>Pay now</button>
    </div>
  );
};

export default App;
