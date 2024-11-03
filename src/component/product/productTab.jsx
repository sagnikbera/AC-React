import Product from ".";


export default function ProductTab() {

    let features = ["4GB RAM", "1TB Storage", "15.6 inch Display"];
    return(
        <>
             <Product title="Laptop" price={80000} features={features}/>
             <Product title="TV" price={15000}/>
             <Product title="Phone" price={20000}/>
             <Product title="Tab" price={25000}/>
        </>
    )
}