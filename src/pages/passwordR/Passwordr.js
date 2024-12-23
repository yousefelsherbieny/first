import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Passwordr.css';
function Passwordr(){
    const[Language]=useState('ar');
    const [email,Setemail]=useState('');
   
    const Navigate=useNavigate();
    const [action,setaction]=useState('');
    const handleNext=()=>{
        if(action==='Log'){
            Navigate('/Log');
        }
        else if(action==='passwordR'){
            Navigate('/VerificationCodeInput');
        }
    };
    function Submit(e){
        e.preventDefault();
        handleNext();
        
      }

    return(
        <div className="parent">
            
            <div className=" container w-25 align-items-center">
            
                <form onSubmit={Submit} className=" sty2" action="" dir={Language==='ar'?'rtl':'ltr'}>
               <h5 style={{textDecoration:'underline #A9543F 2px '}} dir={Language==='ar'?'rtl':'ltr'}>إعادة تعيين كلمة المرور</h5>
                <p style={{color:'#9F966E'}}>إعادة تعيين كلمة المرور أدخل البريد الإلكتروني</p>
                <label style={{color:'#03333A'}}> البريد الالكتروني   </label>
            <input className="form-control mb-2 intsty"
             placeholder="email" 
            type="text"
            required
            value={email}
            onChange={(e)=> Setemail(e.target.value)}
            
            ></input>
            <div style={{display:'flex',justifyContent:'center'}}>
          <button className="butt2" onClick={()=>setaction('passwordR')} style={{border:'none', backgroundColor:'#A9543F', padding:'10px 60px',color:'#ffffff',marginTop:'5px',borderRadius:'10px'}}   > إعادة تعيين</button>
          </div>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <button className="butt2" onClick={()=>setaction('Log')}  style={{border:'1px #A9543F solid ', backgroundColor:'#ffffff', padding:'10px 50px',color:'#A9543F',marginTop:'5px',borderRadius:'10px'}}>  تسجيل الدخول</button>
          </div>
                </form>
            </div>
        </div>
    )

}
export default Passwordr;