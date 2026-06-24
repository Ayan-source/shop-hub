import React, { createContext, useState } from 'react'

const Cartcontext = createContext(null)
const CartProvider = ({children}) => {
    const [cartitems,setcartitems] = useState([])
    function additems(productid){
        const existing = cartitems.find(prod=>prod.id == productid)
        if(existing){
            const tempitems = cartitems.map((prod)=> prod.id == productid ? {...prod, quantity: prod.quantity + 1} : prod)
            setcartitems(tempitems)
        }
        else{
            setcartitems([...cartitems,{id: productid, quantity:1}])
        }
    }

    function removeitems(productid){
        setcartitems(cartitems.filter(prod => prod.id !== productid))
    }
    function updatequantity(productid,quantity){
        if(quantity <=0){
            removeitems(productid)
        }
        else{
            setcartitems(cartitems.map(prod => prod.id == productid ? {id:productid,quantity:quantity}:prod))
        }
    }

  return (
    <Cartcontext.Provider value={{cartitems, additems, removeitems, updatequantity}}>{children}</Cartcontext.Provider>
  )
}

export default CartProvider
export {Cartcontext}
