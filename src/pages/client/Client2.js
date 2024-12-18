import { useState ,useEffect } from "react";
import { useNavigate} from "react-router-dom";
import './client.css';

function Client2({formData}){
  const [additonalData,setAdditionalData]=useState({national:'',password:'',passwordR:''})
    const[Language]=useState('ar');
    const [brithDay,setBrithDay]=useState('');
    const [gover,setGover]=useState('');
    const [address,setAdress]=useState('');
    const [Error,setError]=useState('');
    
    const Navigate=useNavigate();
    useEffect(()=>{if(formData){console.log('firstform',formData);}},[formData])
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
      const finalData={...formData,...additonalData}
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
            <label > الرقم القومي</label>
            <input className="form-control mb-2 intsty" placeholder="national number" type="text" required
           name="national"
            onChange={handleChange}
           
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
           name="password"
            onChange={handleChange}
          
            ></input>
          
           
             <label >    تأكيد كلمة المرور</label>
            <input className="form-control mb-2 intsty" placeholder="Repeat Password" type="password"
            required
            name="passwordR"
            onChange={handleChange}
          
            ></input>
           
            <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <button style={{border:'none', backgroundColor:'#A9543F ', padding:'10px 15px',color:'#ffffff',borderRadius:'15px'}}  >متابعة</button>
            </div>
            
        </form>
        </div>
        </div>
       
        
        
    )

}
export default Client2;