import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Layout() {

    const navigate = useNavigate();
    return (
        <div>
            <nav>
                <ul>
                    <li>

                     {/* <Link to="/">Home</Link>             
                     <a href="/">Home</a> = does a full page reload.  */}  

                      <button onClick={() => navigate("/")}>Home</button></li>

                    <li>
                       
                      {/* <Link to="/blogs">Blogs</Link>   =   navigates without refreshing the page  */} 

                     <button onClick={() => navigate("/blogs")}>Blogs</button>

                      
                    </li>
                    <li>
                      
                      {/* <Link to="/contact">Contact</Link> */}
                    
                    <button onClick={() => navigate("/contact")}>Contact</button>
                        
                    </li>
                </ul>
            </nav>

            <Outlet />              {/*  Acts as a placeholder where the child routes (Home, Blogs, Contact, etc.) will render. */}
        </div>
    )
};

export default Layout;