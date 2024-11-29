import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Join.css';

export default function Join(){
    const Navigate=useNavigate();
    return(
        <div  style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'90px'}}>
            <div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src={require('../../Images/navbar/logo.png')} alt='' width={'80px'}/>
           
            </div >
            <div style={{width:'411px',height:'321px',backgroundColor:'#f6f6f6',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div>
           <h5 style={{fontSize:'30px', margin:'10px',textAlign:'center'}}> انشاء حساب</h5>
           <button onClick={()=>Navigate('/Tech')} style={{margin:'5px'}} className='buttSty' > حرفي</button>
           <div>
           <button onClick={()=>Navigate('/Client')} style={{margin:'5px'}} className='buttSty'>طالب خدمة</button>
           </div>
           <p style={{color:'#000000'}}>هل لديك حساب بالفعل؟ <Link style={{color:'#0A0DE2',listStyle:'none',textDecoration:'none'}}> تسجيل الدخول</Link></p>
           </div>
           </div>
           </div>
           </div>
       
    )
}