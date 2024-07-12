import './products.css';
import logo from './assets/logo.png';
const items = [
    {
        id : 0,
        name : "Lenovo ideapad 3i 8gb ram",
        image : logo,
        price : 299
    },
    {
        id : 0,
        name : "Lenovo ideapad 3i 8gb ram",
        image : logo,
        price : 299
    },
    {
        id : 1,
        name : "Lenovo ideapad 3i 8gb ram",
        image : logo,
        price : 299
    },
    {
        id : 2,
        name : "Lenovo ideapad 3i 8gb ram",
        image : logo,
        price : 299
    },
    {
        id : 3,
        name : "Lenovo ideapad 3i 8gb ram",
        image : logo,
        price : 299
    }
]

function Products(){
    return (
        <div className="item">
            {items.map((Element)=>{
                return(
                    <div className='item-box' id={Element.id} key={Element.id}>
                        <div className="item-img">
                            <img src={Element.image}/>
                        </div>
                        <div className="item-detail">
                            <h3>{Element.name}</h3>
                            <p>Price : ${Element.price}</p>
                            <button>Add Item</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function check()
{
    console.log("helll");
}

// const item = document.querySelector(".item");

export default Products;