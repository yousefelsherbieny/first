import { useState , useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './tech.css';
function Tech2({Data}){
  const [additonalData,setAdditionalData]=useState({national:'',password:'',passwordR:''})
    const[Language]=useState('ar');
    const [brithDay,setBrithDay]=useState('');
    const [gover,setGover]=useState('');
    const [address,setAdress]=useState('')
    const [Error,setError]=useState('');
    const Navigate=useNavigate();
    useEffect(()=>{if(Data){console.log('firstform',Data);}},[Data])
      const handleChange=(e)=>{
        setAdditionalData({...additonalData, [e.target.name]:e.target.value})
      }
      function Submit(e){
        e.preventDefault();
        if(additonalData.password.length<8){
          setError('كلمة المرور يجب ان لا تقل عن 8 أحرف')
          return;
        }
        if(additonalData.password!==additonalData.passwordR){
          setError('كلمات المرور لا تتطابق')
        }
        setError();
        const finalData={...Data,...additonalData}
       
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
            <input className="form-control mb-2 intsty" placeholder="national id" type="text"
            required
            name="national"
            onChange={handleChange}
            style={{width:'300px'}}
            ></input>
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
            name="password"
            onChange={handleChange}
          style={{width:'300px'}}
            ></input>
             <label >    تأكيد كلمة المرور</label>
            <input className="form-control mb-2 intsty" placeholder="confirm" type="password"
            required
            name="passwordR"
            onChange={handleChange}
          style={{width:'300px'}}
            ></input>
            <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <button style={{border:'none', backgroundColor:' #A9543F', padding:'10px 15px',color:'#ffffff',borderRadius:'15px'}}  >متابعة</button>
            </div>
           
            
        </form>
        </div>
        </div>
       
        
        
    )

}
export default Tech2;