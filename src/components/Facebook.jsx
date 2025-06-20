import { useState } from "react"




function Facebook(){
    let [like,setLike] = useState(0);
     let [dislike,setDisLike] = useState(0);
      let [comment,setComment] = useState("");
    let[commentlist,setCommentList] = useState([]);
    return(
        <div>
            <div className="container">
            
           <img src="/download.jpg" alt="img" />

            <div className="section">
            <button onClick={()=>setLike(like+1)}>Like:{like}</button>
            <button onClick={()=>setDisLike(dislike+1)}>DisLike:{dislike}</button>
            
            <textarea  placeholder="Comments Please..." onChange={(event)=>setComment(event.target.value)}></textarea>

            <button onClick={()=>setCommentList([...commentlist,comment])}>Add Comment</button>   
            <ul>
                {
                    commentlist.map((c)=>(
                        <li>{c}</li>
                    ))
                }
            </ul>
            </div>
</div>
        </div>
    )
}
export default Facebook