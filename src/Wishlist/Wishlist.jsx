import React from "react";

function Wishlist(){
    const [query, setQuery] = React.useState("");
    const[wishes,setWishes] = React.useState([]);
    const handelChange = (e) => {
        const {value} = e.target;
        setQuery(value)
    }
    const handelAdd = () => {
        const payload = {
            title : query,
            status:false
        };
        let newWishlist = [...wishes,payload]
        setWishes(newWishlist)
    }
    console.log(wishes.length)

    return(
        
        <>
        <h1>Wishlist Page</h1>
        <input value={query} onChange = {handelChange} placeholder="Add Items" />
        <button onClick={handelAdd}>ADD</button>
        <div>
            
            {wishes.map((item) =>{
                if(wishes.length<=3){
                return <div> {item.title} </div>
                }
                
            })}
            
        </div>
        </>
    );
}
export {Wishlist}