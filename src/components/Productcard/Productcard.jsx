function Productcard({data}){                             //  for props give (props)
    return(                                  

        
            
         <div className="container">
             <img src={data.img}  />                     {/*  {props.name }*/}
            <h4>{data.name}</h4>
            <p>{data.description}</p>
            <h4>₹{data.price}</h4>
         
        </div>
    );
}
export default Productcard;