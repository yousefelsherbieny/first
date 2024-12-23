import { useState,useRef } from "react";
import { useNavigate ,Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

import './client.css';


function Client( ){
    const[Language]=useState('ar');
    const[password,setPassword]=useState('');
    const[passwordconfirm,setPasswordconfirm]=useState('');
    const[firstName,setFirstaName]=useState('');
    const[lastName,setLastName]=useState('');
    const[email,setemail]=useState('');
    const[phone,setphone]=useState('');
    const[error,setError]=useState('');
    const[preview,setPreview]=useState('');
    const [loading, setLoading] = useState(false);
    const [profilePicture,SetProfilePicture]=useState('');
    const fileInputRef = useRef(null);
    const Navigate=useNavigate();
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
    
        if (file) {
          // عرض معاينة الصورة
          const reader = new FileReader();
          reader.onloadend = () => setPreview(reader.result);
          reader.readAsDataURL(file);
    
          // رفع الصورة
          const formData = new FormData();
          formData.append("profilePicture", file);
        }}
    
   async function Submit(e){
        e.preventDefault();
        if (password !== passwordconfirm) {
            setError('Passwords do not match');
            return;
          }
          setLoading(true); // Set loading to true
          setError(null); // Reset error
      
          const registerData = { email, password }; // Form data to send
          try {
            const response = await fetch('https://hscoding.runasp.net/api/Register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(registerData), // Send form data in request body
            });
            if (!response.ok) {
                throw new Error('Registration failed. Please try again.');
              
              }
        
              const data = await response.json(); // Get response data
              console.log('Registration successful', data); // Handle successful registration
             
        
              // Redirect or perform other actions after registration success
            } catch (err) {
              setError(err.message); // Set error if registration fails
            } finally {
              setLoading(false); // Set loading to false after the request
            }
          
       
            Navigate('/Join')
     
      }
      const handleH1Click = () => {
        
        fileInputRef.current.click();
      };
    return(
      
           
            
       <div className="parent ">
       
        
       <div className="  container ">
            
     
<form onSubmit={Submit}  className="sty2  " action="" dir={Language==='ar'?'rtl':'ltr'}>

        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            {profilePicture ?(
                <img 
                src={profilePicture}
                alt="profile"
                style={{width:'130px',height:'130px',borderRadius:'50%',marginTop:'5px'}}/>
            ):(
                <div style={{width:'80px',height:'80px',borderRadius:'50%',backgroundColor:'#e0e0e0',display:'flex',alignItems:'center',justifyContent:'center'}}>
                   <FontAwesomeIcon icon={faUser}  />
                  
                    </div> 
                )}
        </div>    
        <div style={{textAlign:'center'}}>
             <h6 onClick={handleH1Click}   style={{color:'#A9543F', fontWeight:'600', fontSize:'18px',cursor:'pointer'}} >إضافة صورة شخصية</h6>
    </div>
    <div>
        <input type="file" accept="image/*" ref={fileInputRef} style={{display:'none'}} onChange={handleFileChange}></input>
    </div>
            <label >الاسم الاول</label>
            <input className="form-control mb-2 intsty"
             placeholder="name" 
            type="text"
            required
            value={firstName}
            onChange={ (e)=>setFirstaName (e.target.value)}
          
            ></input>
             <label >الاسم الثاني</label>
            <input className="form-control mb-2 intsty"
             placeholder="name" 
            type="text"
            required
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
          
            ></input>
             <label >   كلمة المرور</label>
            <input className="form-control mb-2 intsty" placeholder="password" type="password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          
            ></input>
            <label >رقم الهاتف</label>
            <input className="form-control mb-2 intsty" placeholder="phone" type="text"
            
           value={phone}
            onChange={(e)=>setphone(e.target.value)}
            
            ></input>
            <label > البريد الالكتروني</label>
            <input className="form-control mb-2 intsty" placeholder="email" type="email"
            required
            value={email}
            onChange={(e)=>setemail(e.target.value)}
        
            ></input>
             <label >  تأكيد كلمة المرور  </label>
            <input className="form-control mb-2 intsty" placeholder="text" type="password"
            
           value={passwordconfirm}
            onChange={(e)=>setPasswordconfirm(e.target.value)}
        
            ></input>
            <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <button style={{border:'none', backgroundColor:'#A9543F', padding:'10px 15px',color:'#ffffff',borderRadius:'15px'}}  type="submit">متابعة</button>
            </div>
            <h6>هل لديك حساب  بالفعل؟ <Link to='/Log' style={{color:'#A9543F',listStyle:'none',textDecoration:'none'}}>تسجيل الدخول</Link></h6>
           
        
        </form>
        </div>
        </div>
        
    
        
       
        
        
      
    )


}
export default Client;