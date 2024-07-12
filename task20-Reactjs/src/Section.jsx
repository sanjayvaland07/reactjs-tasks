import './section.css'
import laptop1 from './assets/laptop1.png'
import laptop2 from './assets/laptop2.png'
import laptop3 from './assets/laptop3.png'
import laptop4 from './assets/laptop4.png'
import laptop5 from './assets/laptop5.png'
import laptop6 from './assets/laptop6.png'
import laptop7 from './assets/laptop7.png'
import laptop8 from './assets/laptop8.png'
import { useState } from 'react'

const items = [
    {id : 0, image : laptop1, name : "HP 17 Laptop, 17.3 HD+ Display, 11th Gen Intel Core i3-1125G4 Processor", price : 491, qty : 1},
    {id : 1, image : laptop2, name : "Lenovo IdeaPad 1 Student Laptop, Intel Dual Core Processor, 20GB RAM", price : 389, qty : 1},
    {id : 2, image : laptop3, name : "Acer Aspire 3 A315-24P-R7VH Slim Laptop AMD Ryzen 3 7320U", price : 299, qty : 1},
    {id : 3, image : laptop4, name : "Dell Inspiron 15 3511 15.6 Inch Laptop, Intel Core i3-1115G4, 8GB DDR4 RAM,", price : 334, qty : 1},
    {id : 4, image : laptop5, name : "Acer Nitro V Gaming Laptop Intel Core i5-13420H NVIDIA GeForce RTX 4050,", price : 777, qty : 1},
    {id : 5, image : laptop6, name : "ASUS ROG Strix G16 Gaming Laptop NVIDIA® GeForce RTX™ 4060 Intel Core i7-13650HX", price : 1309, qty : 1},
    {id : 6, image : laptop7, name : "HP Victus 15 Gaming Laptop AMD Ryzen 5 7535HS NVIDIA GeForce RTX 2050", price : 670, qty : 1},
    {id : 7, image : laptop8, name : "Lenovo Legion 5i Gaming Laptop NVIDIA GeForce RTX 4070 8GB Intel Core i7-14650HX,", price : 1499, qty : 1},
]


function Section(){
    const [data,setData] = useState([]);
    let [total,setTotal] = useState(0);
    function additems(item)
    {
        let isContaine = false;

        data.map((dt)=>{
            if(dt.id === item.id)
                {
                    isContaine=true;
                }
        })

        if(!isContaine)
            {
                setData([...data,item]);
                console.log(data);
                setTotal(total + item.price);
            }
    }
    function removeQty(itemId)
    {
        setData(
            (data)=>(
                data.map((item)=>(
                    
                    itemId === item.id ? {...item,qty : item.qty - 1} : item
                )).filter((item)=>{
                    setTotal(total - item.price)
                    if(item.qty > 0)
                        {
                            return true;
                        }
                })
            )
            
        )
    }
    function addQty(itemId)
    {   
        setData(
            data=>
                data.map((item)=>{
                    setTotal(total + item.price)
                    return itemId === item.id ? {...item,qty : item.qty + 1} : item
                })
            
        )
    }
    return (
        <div className="container">
            <div className="show-item">
                <h1>products</h1>
            {
                items.map((item)=>{
                    return (
                    <div className="box" key={item.id}>
                        <div className="item-img">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="item-detail">
                            <h3>{item.name}</h3>
                            <p>Price : ${item.price}</p>
                            <button onClick={() => {additems(item)}}>Add to cart</button>
                        </div>
                    </div>
                )})
            }
       </div>
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
                    data.map((dt,index)=>(
                        <tr key={dt.id}>
                            <td className='tbl-img'><img src={dt.image} alt="" /></td>
                            <td>{dt.name} <br />
                                Price : ${dt.price}</td>
                            <td className='qty-btn'><button id='minusbtn' onClick={()=>{removeQty(dt.id)}}>-</button><span key={index}>{dt.qty}</span><button id='plusbtn' onClick={()=>{addQty(dt.id)}}>+</button></td>
                        </tr>
                    ))
                }
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td>Total price : </td>
                        <td>${total}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        </div>
    )
}

export default Section;