import React from "react";
import Button from "./components/button";
import OrderInfo from "./components/OrderInfo";


import "../src/style.css";
export default class App extends React.Component<{}, { lo: number }> {
  

  render() {
   
    let obj3 = {
      padding: "6px",
      width: "full",
      content: "Check out",
      bgcolor: "400",
    };

    let obj5 = {
      Order: 30,
      Delivery: 15,
      Discount: 0
    };

    return (
      <div className="App">
        <Button properties={obj3} />
      <OrderInfo resources={obj5}  isDiscount = {false} />
      </div>
    );
  }
}
