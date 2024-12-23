import Header from "./header/Header";
import Navbaar from './Navbar/Navbaar';
import Service from './Services/Service';
import Ourview from './Ourview/Ourview';
import Comunicate from './Comunicate/Comunicate';
import Foot from "./footer/Footer";

import './Home.css';
const Home =()=>{
    return(
        <div>
            <Navbaar/>
            
            <Header/>
            <Service/>
            <Ourview/>
            <Comunicate/>
            <Foot/>
        </div>

    )

}
export default Home;