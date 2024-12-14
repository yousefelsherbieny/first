import './Navbar.css';
import { Link,useNavigate } from 'react-router-dom';

function Navbaar() {
    const Navigate=useNavigate();
    return(
        <nav className='nevbar'>
            
            <ul className='ulstyle'>
                
                <button onClick={()=>Navigate('/Join')}  style={{border:'solid 2px #A9543F',borderRadius:'20px',padding:'9px',color:'#A9543F'}}>انشاء حساب</button>
                <button onClick={()=>Navigate('/Log')} style={{border:'solid 2px #A9543F',borderRadius:'20px',padding:'9px',color:'#ffffff',backgroundColor:'#A9543F'}}>تسجيل الدخول</button>
              
               
                <li> 
                    
                      <Link to ='/Join'  className='astyle' style={{color:'#04343E'}}>  انضم إلينا</Link>
                </li>
                <li>
                <Link className='astyle' style={{color:"#000000",fontWeight:'bold'}}> من نحن </Link>
                </li>
                <li> 
                    <Link  className='astyle' style={{color:'#04343E'}} >  خدماتنا  </Link>
                </li>
                
                <li> 
                    <Link to ='/' className='astyle' style={{color:'#AE9E56'}}> الرئيسية</Link>
                </li>
            </ul>
            <img src={require('../../../../Images/navbar/logo.png')} alt='' width={'65px'}/>
        </nav>
    )
    
}
export default Navbaar;