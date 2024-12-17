import { useState , useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './tech.css';
function Tech2({Data}){
    const[Language]=useState('ar');
    const [brithDay,setBrithDay]=useState('');
    const [national,setNational]=useState('');
    const [gover,setGover]=useState('');
    const [address,setAdress]=useState('');
    const [password,setPassword]=useState('');
    const [passwordR,setPasswordR]=useState('');
    const [accept,setAccept]=useState(false);
    const Navigate=useNavigate();
    useEffect(()=>{if(Data){console.log('firstform',Data);}},[Data])
      function Submit(e){
        e.preventDefault();
        setAccept(true);
        Navigate('/Congra');
      }
   
    return(
      <div className="parent">
        <div className="register">
        <form onSubmit={Submit} className="   sty2 " action="" dir={Language==='ar'?'rtl':'ltr'} >
        
          <h4 style={{textAlign:'center', marginTop:'5px',fontWeight:'bold'}}>انشاء حساب حرفي</h4>
            <label > تاريخ الميلاد</label>
            <input className="form-control mb-2 intsty"
             placeholder="brithday" 
            type="text"
            required
            value={brithDay}
            onChange={(e)=> setBrithDay(e.target.value)}
            style={{width:'300px'}}
            ></input>
            <label > الرقم القومي</label>
            <input className="form-control mb-2 intsty" placeholder="national number" type="text"
            required
            value={national}
            onChange={(e)=>setNational(e.target.value)}
            style={{width:'300px'}}
            ></input>
            {national.length < 14 && accept &&(
              <p style={{color:'#A9543F',fontWeight:'15px'}}> National Number uncorrect  </p>
            )}
            <label >  المحافظة</label>
            <input className="form-control mb-2 intsty" placeholder="Governorate" type="text"
            required
            value={gover}
            onChange={(e)=>setGover(e.target.value)}
          style={{width:'300px'}}
            ></input>
            <label >  العنوان المحلي</label>
            <input className="form-control mb-2 intsty" placeholder="address" type="text"
            required
            value={address}
            onChange={(e)=>setAdress(e.target.value)}
          style={{width:'300px'}}
            ></input>
            <label >   كلمة المرور</label>
            <input className="form-control mb-2 intsty" placeholder="password" type="password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          style={{width:'300px'}}
            ></input>
             {password.length < 8 && accept &&(
              <p style={{color:'#A9543F',fontWeight:'15px'}}> password must be more than 8  </p>
            )}
             <label >    تأكيد كلمة المرور</label>
            <input className="form-control mb-2 intsty" placeholder="confirm" type="password"
            required
            value={passwordR}
            onChange={(e)=>setPasswordR(e.target.value)}
          style={{width:'300px'}}
            ></input>
            {passwordR !== password && accept && <p>password dose not match</p>}
            <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <button style={{border:'none', backgroundColor:' #A9543F', padding:'10px 15px',color:'#ffffff',borderRadius:'15px'}}  >متابعة</button>
            </div>
           
            
        </form>
        </div>
        </div>
       
        
        
    )

}
export default Tech2;