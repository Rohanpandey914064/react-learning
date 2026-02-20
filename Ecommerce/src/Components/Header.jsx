export default function Header({cart,totalAmount}) 
{
    return(
        <div style={{width:"100vw",backgroundColor:"lightgray",color:"black",display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",marginTop:"0px" , margin:"0px"    }}>
            <h1 style={{margin: "0px"}} >Rohan store</h1>
            <p style={{margin: "0px",marginBottom:"10px"}}>Items in cart: {cart}</p>
            <p style={{margin: "0px"}}>Total Amount: ₹{totalAmount}</p>
        </div>
    );
}