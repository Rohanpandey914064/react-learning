import ProductCart from "./ProductCart";

export default function ProductList({products,addToCart})
{
    return(
        <div style={{display:"flex",flexWrap:"wrap",gap:"30px",justifyContent:"center",width:"100vw"}}>
            {products.map(product=>
                <ProductCart 
                key={product.id}
                product={product}
                addToCart={addToCart}
                />
            )}
        </div>
    );
}