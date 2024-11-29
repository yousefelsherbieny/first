import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbaar() {
    return(
        <nav className='nevbar'>
            
            <ul className='ulstyle'>
               <li> 
                    <Link to={'/Comunicate'} className='astyle'> تواصل معانا</Link>
                </li>
                <li> 
                    
                      <Link className='astyle'> من نحن</Link>
                </li>
                <li> 
                    <Link to ='/Login'  className='astyle' > انضم إلينا </Link>
                </li>
                <li> 
                    < Link  className='astyle'> تسجيل الدخول</Link>
                </li>
                <li> 
                    <Link to ='/' className='astyle'> الرئيسية</Link>
                </li>
            </ul>
            <img src={require('../../../../Images/navbar/logo.png')} alt='' width={'65px'}/>
        </nav>
    )
    
}
export default Navbaar;