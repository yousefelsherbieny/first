import { useState } from "react";
import { Link } from "react-router-dom";
import './log.css';
function Log(){
    const[Language]=useState('ar');
    const [email,Setemail]=useState('');
    const [phone,Setphone]=useState('');
   
    return(
        <div>
            <div style={{marginBottom:'90px'}}>
         <div style={{display:'flex',justifyContent:'center',alignItems:'center',transform:'translateY(50%)',marginRight:'120px'}}>
            <img src={require('../../Images/navbar/logo.png')} alt='' width={'80px'} className='no'/>
            </div >
            
        <form className="w-25 p-4 mx-auto sty2" action="" dir={Language==='ar'?'rtl':'ltr'}>
        <div style={{width:'411px',height:'371px',backgroundColor:'#f6f6f6',display:'flex',justifyContent:"center",alignItems:'center'}} className="smm">
            <div>
        <div style={{textAlign:'center',color:'#03333E',marginTop:'10px'}}>
        <h4>تسجيل الدخول</h4>
        <p style={{fontSize:'16px'}}>ابق على اطلاع على أحدث  أخبار عالمك الاحترافي</p>
        </div>
            <label style={{color:'#03333A'}}> البريد الالكتروني أو رقم الهاتف</label>
            <input className="form-control mb-2"
             placeholder="name" 
            type="text"
            required
            value={email}
            onChange={(e)=> Setemail(e.target.value)}
            
            ></input>
            <label style={{color:'#03333A'}}>كلمة المرور </label>
            <input className="form-control mb-2" placeholder="phone" type="text"
            required
            value={phone}
            onChange={(e)=>Setphone(e.target.value)}
            ></input>
            <Link to= '/VerificationCodeInput' style={{color:'#0a0eff',listStyle:'none',textDecoration:'none'}}>هل نسيت كلمة السر</Link>
            <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <button style={{border:'none', backgroundColor:'#0609DD', padding:'10px 30px',color:'#ffffff',borderRadius:'15px'}}   >تسجيل الدخول</button>
            </div>
            <h6>عضو جديد على الحرفي؟ <Link to ='/Join' style={{color:'#0a0eff',listStyle:'none',textDecoration:'none'}}>انضم إلينا </Link></h6>
           </div>
          </div>
            
        </form>
        </div>
        </div>
       
        
       
    )
    
}


export default Log;