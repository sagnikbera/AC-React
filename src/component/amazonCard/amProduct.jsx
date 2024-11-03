import AmazonProduct from "./amazonProduct";


export default function AmazonProductTab() {


    return(
        <>
        <h1>Blockbuster Deals | Shop Now</h1>
        <div style={{display:"flex" , gap:"10px" ,justifyContent:"center" , alignItems:"center" , textAlign:"center"}}>
             <AmazonProduct title="Logitech MX Master" idx={0} />
             <AmazonProduct title="Apple Pencil (2nd Gen)" idx={1}/>
             <AmazonProduct title="Zebronics Zeb-transformer" idx={2}/>
             <AmazonProduct title="Petronics Toad 23" idx={3}/>
        </div>
        </>
    )
}