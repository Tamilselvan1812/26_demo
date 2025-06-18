function Userinfo() {
    const name = "Tamil";
    const age = "29"
    const city = "Tiruppur"
    const skills = ["java", "react", "javascript"]

    return (
        <div>
            Name = {name}
            <br />
            Age = {age}
            <br />
            City = {city}
            <br />
            
            {skills.map((skill) =>(
                <li>{skill}</li>
            ))
            }


            {/* <ul>
        <li>{skills[0]}</li>
        <li>{skills[1]}</li>
        <li>{skills[2]}</li>
        
        
       </ul> */}
        </div>)
}

export default Userinfo