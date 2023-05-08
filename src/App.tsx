import React from "react";
import Button from "./components/button";
import OrderInfo from "./components/OrderInfo";
import ReviewCard from "./components/ReviewCard";

import "../src/style.css";
import SecondReviewCard from "./components/ReviewCard2";
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


    let obj6 = {
      product: 'Movies',
      amount: 20,
      date: '20/03/2020',
      review: 'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price'
    };

    return (
      <div className="App">
        <Button properties={obj3} />
      <OrderInfo resources={obj5}  isDiscount = {false} />
      <ReviewCard productInfo= {obj6} />
      <SecondReviewCard />
      </div>
    );
  }
}
