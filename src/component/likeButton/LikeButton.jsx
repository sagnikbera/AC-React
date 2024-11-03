import { useState } from "react";

export default function LikeButton() {

    let [isLiked , setIsLiked] = useState(true);

    let toggleLike = () => {
        setIsLiked(!isLiked);
        
    }

    return (
        <>
            <div>
                <h1 onClick={toggleLike}>
                    {
                    isLiked ? <i className="ri-heart-line"></i> : <i className="ri-heart-fill" style={{color:"red"}}></i>
                    }
                 </h1>
            </div>
        </>
    )
}