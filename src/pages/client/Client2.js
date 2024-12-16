import { useState ,useEffect } from "react";
import { useNavigate} from "react-router-dom";
import './client.css';

function Client2({formData}){
    const[Language]=useState('ar');
    const [brithDay,setBrithDay]=useState('');
    const [city,SetCity]=useState('');
    const [gover,setGover]=useState('');
    const [address,setAdress]=useState('');
    const [password,setPassword]=useState('');
    const [passwordR,SetPasswordR]=useState('');
    const [accept,setAccept]=useState(false);
    const Navigate=useNavigate();
    useEffect(()=>{if(formData){console.log('firstform',formData);}},[formData])
    function Submit(e){
      e.preventDefault();
      setAccept(true);
      Navigate('/Congra');
    }
    
    return(
      <div className="parent">
        <div className="register">
        <form onSubmit={Submit} className=" sty2 " action="" dir={Language==='ar'?'rtl':'ltr'} >
        
       
          <h4 style={{textAlign:'center', marginTop:'5px',fontWeight:'bold'}}>انشاء حساب  عميل</h4>
            <label > تاريخ الميلاد</label>
            <input className="form-control mb-2 intsty"
             placeholder="brithday" 
            type="text"
            value={brithDay}
            onChange={(e)=> setBrithDay(e.target.value)}
          
            ></input>
            <label > البلد</label>
            <input className="form-control mb-2 intsty" placeholder="city" type="text"
            value={city}
            onChange={(e)=>SetCity(e.target.value)}
           
            ></input>
            <label >  المحافظة</label>
            <input className="form-control mb-2 intsty" placeholder="Governorate" type="text"
            value={gover}
            onChange={(e)=>setGover(e.target.value)}
        
            ></input>
            <label >  العنوان المحلي</label>
            <input className="form-control mb-2 intsty" placeholder="address" type="text"
            
            value={address}
            onChange={(e)=>setAdress(e.target.value)}
          style={{width:'300px'}}
            ></input>
            <label >   كلمة المرور</label>
            <input className="form-control mb-2 intsty" placeholder="password" type="password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          
            ></input>
            {password.length < 8 && accept &&(
              <p> password must be more than 8  </p>
            )}
             <label >    تأكيد كلمة المرور</label>
            <input className="form-control mb-2 intsty" placeholder="Repeat Password" type="password"
            required
            value={passwordR}
            onChange={(e)=>SetPasswordR(e.target.value)}
          
            ></input>
            {passwordR !== password && accept && <p>password dose not match</p>}
            <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <button style={{border:'none', backgroundColor:'#A9543F ', padding:'10px 15px',color:'#ffffff',borderRadius:'15px'}}  >متابعة</button>
            </div>
            
        </form>
        </div>
        </div>
       
        
        
    )

}
export default Client2;