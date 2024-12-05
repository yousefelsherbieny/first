import { useState } from "react";
import './tech.css';
function Tech2(){
    const[Language]=useState('ar');
    const [brithDay,setBrithDay]=useState('');
    const [city,SetCity]=useState('');
    const [gover,setGover]=useState('');
    const [address,setAdress]=useState('');
    const [password,setPassword]=useState('');
    const [confirmpassword,setConfirmPassword]=useState('');
   
    return(
        <form className=" p-4 mx-auto w-25 sty2 " action="" dir={Language==='ar'?'rtl':'ltr'} style={{position:'fixed',bottom:'0',right:'0',left:'0'}}>
        <div style={{marginTop:'90px',width:'411px',height:'533px',backgroundColor:'#f6f6f6',display:'flex',justifyContent:"center",alignItems:'center'}}>
        <div >
          <h4 style={{textAlign:'center', marginTop:'5px'}}>انشاء حساب حرفي</h4>
            <label > تاريخ الميلاد</label>
            <input className="form-control mb-2 intsty"
             placeholder="brithday" 
            type="text"
            required
            value={brithDay}
            onChange={(e)=> setBrithDay(e.target.value)}
            style={{borderRadius:'15px',width:'300px'}}
            ></input>
            <label > البلد</label>
            <input className="form-control mb-2 intsty" placeholder="city" type="text"
            required
            value={city}
            onChange={(e)=>SetCity(e.target.value)}
            style={{borderRadius:'15px',width:'300px'}}
            ></input>
            <label >  المحافظة</label>
            <input className="form-control mb-2 intsty" placeholder="Governorate" type="text"
            required
            value={gover}
            onChange={(e)=>setGover(e.target.value)}
          style={{borderRadius:'15px',width:'300px'}}
            ></input>
            <label >  العنوان المحلي</label>
            <input className="form-control mb-2 intsty" placeholder="address" type="text"
            required
            value={address}
            onChange={(e)=>setAdress(e.target.value)}
          style={{borderRadius:'15px',width:'300px'}}
            ></input>
            <label >   كلمة المرور</label>
            <input className="form-control mb-2 intsty" placeholder="password" type="password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          style={{borderRadius:'15px',width:'300px'}}
            ></input>
             <label >    تأكيد كلمة المرور</label>
            <input className="form-control mb-2 intsty" placeholder="confirm" type="password"
            required
            value={confirmpassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
          style={{borderRadius:'15px',width:'300px'}}
            ></input>
            <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <button style={{border:'none', backgroundColor:' #0609DD', padding:'10px 15px',color:'#ffffff',borderRadius:'15px'}} >متابعة</button>
            </div>
            </div>
            </div>
            
        </form>
       
        
        
    )

}
export default Tech2;