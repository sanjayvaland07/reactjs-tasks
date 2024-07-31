import { useContext, useState } from "react";
import "./cart.css";
import ItemsContext from "../context/itemContext";
import { Link } from "react-router-dom";
function Cart() {
  const { product,setProduct,total,setTotal } = useContext(ItemsContext);
  const [text,setText] = useState("Proceed to Payment")
  const [url, setUrl] = useState("/payment")

  function addQty(itemId)
  {
    setProduct((product)=>(
      product.map((prd)=>{
        setTotal(total+prd.price)
        return (
          prd.id === itemId ? {...prd,qty :  prd.qty + 1} : prd
        )
      })
    ))
  }

  function removeQty(itemid)
  {
    setProduct((product)=>(
      product.map((prd)=>{
        setTotal(total-prd.price)
        return (
          prd.id === itemid ? {...prd,qty : prd.qty-1} : prd
        )
      }).filter((prd)=>{
        if(prd.qty>0)
          {
            return true;
          }
          setTotal(total-prd.price)
      })
    ))
  }

  function handleMainBtn()
  {
      
      if(text === "Proceed to Payment")
      {
        setText("Go to Home");
        setUrl("/");
        console.log('home')
      }
      else if(text === "Go to Home"){
        setText("Proceed to Payment");
        setUrl("/payment");
        console.log('payment')
      }
  }
  
  return (
    // <div className="cart-container">
      <div className="cart">
        <h2>Cart</h2>
        <table>
          <thead>
            <tr>
              <th>image</th>
              <th>Name and price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {
              product.map((dt,index)=>{
                return (
                  (
                    <tr key={dt.id}>
                        <td className='tbl-img'><img src={dt.image} alt="" /></td>
                        <td>{dt.name} <br />
                            Price : ${dt.price}</td>
                        <td className='qty-btn'><button id='minusbtn' onClick={()=>{removeQty(dt.id)}}>-</button><span key={index}>{dt.qty}</span><button id='plusbtn' onClick={()=>{addQty(dt.id)}}>+</button></td>
                    </tr>
                )
                )
              })
            }
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>Total price : </td>
              <td>${total}</td>
            </tr>
            <tr>
              <td colSpan={3} className="main-td"><Link to={url} className="main-btn" onClick={handleMainBtn}>{text}</Link></td>
            </tr>
          </tfoot>
        </table>
        
      </div>
    // </div>
  );
}

export default Cart;
