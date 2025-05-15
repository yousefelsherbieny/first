import { useState } from 'react';
import { useNavigate ,Link } from 'react-router-dom';
import './congra.css';
function Congra(){
    const[Language]=useState('ar');
     const Navigate=useNavigate();
     
 return(
    <div className='container' >
        <div className="right-section" dir={Language==='ar'?'rtl':'ltr'}>
            
            <h2>تهانينا</h2>
            <hr style={{color:'#A9543F'}}></hr>
            <p style={{color:'#9F966E'}}> لقد تم إنشاء حسابك بنجاح</p>
            <img src={require('../../Images/congrat/undraw_certification_re_ifll 1.jpg')} alt=''/>
            <div style={{display:'flex',justifyContent:'center'}}>
            <Link to='/HomeAfterLog' style={{backgroundColor:'#A9543F',border:'none',color:'white',padding:'3px 35px',marginTop:'10px'}}>التالي</Link>
            </div>
        </div>
       
    </div>
 )
}
export default Congra;