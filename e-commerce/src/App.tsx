import React from 'react';
import Button from './components/button';
import Footer from './components/footer';
import Order from './components/Order';
import OrderCard from './components/OrderCard';

import '../src/style.css'
export default class App extends React.Component {
  render() {
    let obj =  {
      padding: "4",
      width: "4/5",
      content: "Check out",
      bgcolor: "900"
    }
    let obj2 =  {
      padding: "4",
      width: "3/5",
      content: "Check out",
      bgcolor: "600"
    }
    let obj3 =  {
      padding: "6",
      width: "full",
      content: "Check out",
      bgcolor: "400"
    }
    return (
      <div className="App">
       Components
        <Button size= {obj} /> 
        <Button size= {obj2} /> 
        <Button size= {obj3} /> 
        <Order />
        <Footer />
<OrderCard />
      </div>
    );
  }
  
}


