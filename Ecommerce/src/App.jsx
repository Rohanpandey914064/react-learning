import { useState } from "react";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import "./App.css";
import Cart from "./Components/ProductCart";
export default function App() {
  const [cart,setCart] = useState([]);
  const [totalAmt,setTotalAmt] = useState(0); 
  const product = [
    {
      id:1,
      name:"MOTOROLA G22",
      price: 10099,
      image: "https://m.media-amazon.com/images/I/711oVGbSmzL._AC_SL1500_.jpg"
    },
    {
      id:2,
      name:"Laptop",
      price: 59099,
      image: "https://th.bing.com/th/id/OIP.7AXuxbrhKyVKdQwn-tbDqAHaE8?w=251&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
      id:3,
      name:"sumsang TV",
      price: 199999,
      image: "https://th.bing.com/th/id/OIP.0PBQ24psj-bzLZDvontZywHaDn?w=311&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    }
  ]

  function addToCart(product){
    setCart([...cart,product]);
    setTotalAmt(totalAmt+product.price);
  }

  function removeFromCart(index){
    setCart(cart.filter((_,i)=>i!=index));
  }

  //const totalAmount = cart.reduce((total,index)=>(total+index.price),0);

  return(
    <div>
      <Header cart={cart.length} totalAmount={totalAmt}/>
      <ProductList products={product} addToCart={addToCart}/>
      {/* <h2>Total Amount: ₹{totalAmount}</h2> */}
      {/* <Cart cart={cart} removeFromCart={removeFromCart} totalAmount={totalAmount}/> */}
    </div>
  )
};