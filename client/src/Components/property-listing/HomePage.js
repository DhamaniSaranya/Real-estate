import '../../App.css';
import NavBar from './Navbar';
import SideBar from './LeftSideBar';
import Listing from './PropertyListing';
// import Header from '../AddNewProperty/Header'

const HomePage=()=> {
  return (<>
      <NavBar/>
      <SideBar/>
      <Listing/>
      {/* <Header/> */}
    </>)}

export default HomePage;