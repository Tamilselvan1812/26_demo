import { useState } from "react"

function Hooks(){

    let [like,setLike] = useState(0);
    let [dislike,setDislike] = useState(0);

    let [comment,setComment] = useState("");
    let[commentlist,setCommentList] = useState([]);
    return(
        <div >
            <div className="container">
             <h1>Like:{like}</h1>
            <h1>Dislike:{dislike}</h1>
            <ul>
                {
                    commentlist.map((c)=>(
                        <li>{c}</li>
                    ))
                }
            </ul>
            <button onClick={()=>setLike(like+1)} >Like</button>
            <button onClick={()=>setDislike(dislike+1)}>Dislike</button>

            <textarea  placeholder="Comments Please..." onChange={(event)=>setComment(event.target.value)}></textarea>

            <button onClick={()=>setCommentList([...commentlist,comment])}>Add Comment</button>         {/*... = spread operator*/}
        </div>
        </div>
    )
}
export default Hooks