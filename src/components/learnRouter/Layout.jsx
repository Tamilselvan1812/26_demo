import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>                   {/* <a href="/">Home</a> = does a full page reload.  */}

                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>           {/*navigates without refreshing the page  */}
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />                  {/*  Acts as a placeholder where the child routes (Home, Blogs, Contact, etc.) will render. */}
        </div>
    )
};

export default Layout;