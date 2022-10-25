import { Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const NavBar = () => { 
  let user = JSON.parse(localStorage.getItem('user'))
  let history = useNavigate() 

 
  const handleLogout = ()=>{
    Cookies.remove("userId", {path:"/", domain:"localhost"})
    localStorage.clear()
     localStorage.setItem("token","")
    console.log(localStorage);
  history("/")
}
  return (
    <>
      <div className="">
        <nav className="nav-bar">
          <span className="user">User ID: {user.email}</span>
          <span className="logout">
            <i class="fa-solid fa-user"></i>{" "}
            <Nav className="nav-logout">
              <NavDropdown className="nav-email" title={user.email} >
                <button>
                  <NavDropdown.Item onClick={handleLogout} >Logout</NavDropdown.Item>
                </button>
              </NavDropdown>
            </Nav>
            <i class="fa-solid fa-chevron-down"></i>
          </span>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
