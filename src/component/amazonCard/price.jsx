export default function Price({oldPrice , newPrice}) {

    return (
        <div style={{display:"flex"}}>
            <span style={{textDecorationLine:"line-through"}}>{oldPrice}</span>
            &nbsp;
            &nbsp;
            <span style={{fontWeight:"bold"}}>{newPrice}</span>
        </div>
    )
}