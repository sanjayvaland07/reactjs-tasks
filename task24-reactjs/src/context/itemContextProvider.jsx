import { useState } from "react";
import ItemsContext from "./itemContext";

function ItemContextProvider({children})
{
    const [product,setProduct]=useState([])
    const [total,setTotal] = useState(0)
    return(
        <ItemsContext.Provider value={{product,setProduct,total,setTotal}}>
            {children}
        </ItemsContext.Provider>
    )
}

export default ItemContextProvider;