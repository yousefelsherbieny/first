import { LuMessageSquareMore } from 'react-icons/lu';
import './navbarAfterLogin.css';
import { Link,useNavigate } from 'react-router-dom';

function NavbarAfterLogin() {
    const Navigate=useNavigate();
    return(
        <nav className='nevbar'>
            
            <ul className='ulstyle'>
                
                <button onClick={() => Navigate('/Log')} style={{ border: "0",backgroundColor:"white"}}>ع</button>
                <button className='profile' onClick={() => Navigate('/Log')} style={{ border: "0", borderRadius: '50%', color: '#ffffff',backgroundColor:"white"}}><img src={require('../../../../Images/navbarAfterLog/WhatsApp Image 2024-12-23 at 20.09.18_a8be37d8.jpg')} alt="" width={'40px'} height={'40px'}/></button>
                <button onClick={()=>Navigate('/Join')}  style={{borderRadius:'50%',border:"0",backgroundColor:"white"}}><LuMessageSquareMore style={{width:"30px",height:'30px'}}/></button>
              
               
                <li> 
                    
                      <Link to='/search' className='astyle' style={{color:'#04343E'}}>  ابحث عن اقرب حرفي</Link>

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
export default NavbarAfterLogin;