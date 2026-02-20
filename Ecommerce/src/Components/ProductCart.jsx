export default function ProductCart({product,addToCart}){
    return(
        <div style={{border:"1px solid black",padding:"30px",borderRadius:"10px",width:"200px",backgroundColor:"lightgray"}}>
            <img src={product.image} alt={product.name} style={{width:"200px",height:"200px",borderRadius:"10px"}}/>
            <h4 style={{color:"black"}}>{product.name}</h4>
            <p style={{color:"black"}}>{product.price}</p>
            <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
    )
}