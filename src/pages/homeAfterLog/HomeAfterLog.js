import Header from '../home/Components/header/Header';
import Service from '../home/Components/Services/Service';
import Ourview from '../home/Components/Ourview/Ourview';
import Comunicate from '../home/Components/Comunicate/Comunicate';
import Foot from "../home/Components/footer/Footer";
import NavbarAfterLogin from '../home/Components/navbarAfterLogin/NavbarAfterLogin';
const HomeAfterLog =()=>{
    return(
        <div>
            {/* <Navbaar/> */}
            <NavbarAfterLogin/>
            <Header/>
            <Service/>
            <Ourview/>
            <Comunicate/>
            <Foot/>
        </div>

    )

}
export default HomeAfterLog;