import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Passwordr2(){
    const[Language]=useState('ar');
    
    const [passwordR,SetpasswordR]=useState('');
    const Navigate=useNavigate()
    function Submit(e){
        e.preventDefault();
        
        Navigate('/Passdone')
      }

    return(
        <div className="parent">
            <div className="log">
            
                <form onSubmit={Submit} className=" sty2" action="" dir={Language==='ar'?'rtl':'ltr'}>
               <h5 style={{textDecoration:'underline #A9543F 2px '}} dir={Language==='ar'?'rtl':'ltr'}>إعادة تعيين كلمة المرور</h5>
                <p style={{color:'#9F966E'}}>إعادة تعيين كلمة المرور أدخل البريد الإلكتروني</p>
                <label style={{color:'#03333A'}}> رقم مرور جديد    </label>
            <input className="form-control mb-2 intsty"
             placeholder="email" 
            type="text"
            required
            value={passwordR}
            onChange={(e)=> SetpasswordR(e.target.value)}
            
            ></input>
            <div style={{display:'flex',justifyContent:'center'}}>
          <button  style={{border:'none', backgroundColor:'#A9543F', padding:'10px 60px',color:'#ffffff',marginTop:'5px'}}   > إعادة تعيين</button>
          </div>
                </form>
            </div>
        </div>
    )

}
export default Passwordr2;