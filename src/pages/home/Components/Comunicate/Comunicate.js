import { useState } from "react";
function Comunicate() {
    const[Language,Setlanguage]=useState('ar');
    const [firstName,setFirstName]=useState('');
    const [phone,Setphone]=useState('');
    const [message,Setmessage]=useState('');
    
    return(
       <div className="mt-5">
        <div style={{textAlign:'center',color:'#03333E',marginTop:'10px'}}>
        <h4 style={{fontSize:'48px'}}>تواصل معانا</h4>
        <p style={{fontSize:'36px'}}>نحن هنا لنساعدك في أي استفسارات قد تكون لديك</p>
        </div>
        <form className="w-50 p-4 mx-auto" action="" dir={Language==='ar'?'rtl':'ltr'}>
            <label style={{color:'#03333A', fontSize:'26px'}}>الاسم كامل</label>
            <input className="form-control mb-2"
             placeholder="name" 
            type="text"
            required
            value={firstName}
            onChange={(e)=> setFirstName(e.target.value)}
            
            ></input>
            <label style={{color:'#03333A',fontSize:'26px'}}>رقم الهاتف</label>
            <input className="form-control mb-2" placeholder="phone" type="number"
            required
            value={phone}
            onChange={(e)=>Setphone(e.target.value)}
            ></input>
            <label style={{color:'#03333A',fontSize:'26px'}}> الرسالة</label>
            <textarea className="form-control mb-2" placeholder="message" type="text"
            required
            value={message}
            onChange={(e)=>Setmessage(e.target.value)}
            
            ></textarea>
            <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <button style={{backgroundColor:' #03333A',padding:'15px ',borderRadius:'20px',color:'#ffffff',fontWeight:'400',fontSize:'20px',border:'none',textAlign:'center'}}> ارسال</button>
            </div>
        </form>
        
        </div>
       
    )
    
}
export default Comunicate;