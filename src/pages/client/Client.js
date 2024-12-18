import { useState,useRef } from "react";
import { useNavigate ,Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import './client.css';


function Client( {setFormData}){
    const[Language]=useState('ar');
    const [formData,setLocalFormData]=useState({
        firstName:'',
        phone:'',
        email:'',
    });
    const [profilePicture,SetProfilePicture]=useState('');
    const fileInputRef = useRef(null);
    const Navigate=useNavigate();
    const handleimageupload=(e)=>{
        const file=e.target.file[''];
        if(file){
            const reader=new FileReader();
            reader.onloadend=()=>{
                SetProfilePicture(reader.result);

            }
            reader.readAsDataURL(file);
        }
    };
    const handleChange=(e)=>{
        setLocalFormData({...formData,[e.target.name]:e.target.value});
    };
    function Submit(e){
        e.preventDefault();
        setFormData(formData);
        Navigate('/Client2')
     
      }
      const handleH1Click = () => {
        
        fileInputRef.current.click();
      };
    return(
      
           
            
       <div className="parent">
       <div className="register">
            
     
<form onSubmit={Submit}  className="sty2 " action="" dir={Language==='ar'?'rtl':'ltr'}>
    
<h4  style={{textAlign:'center', marginTop:'5px',fontWeight:'bold'}}>انشاء حساب عميل</h4>
            
        <div style={{marginBottom:'10px',display:'flex',alignItems:'center',justifyContent:'center'}}>
            {profilePicture ?(
                <img 
                src={profilePicture}
                alt="profile"
                style={{width:'150px',height:'150px',borderRadius:'50%'}}/>
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
        <input type="file" accept="image/*" ref={fileInputRef} style={{display:'none'}} onChange={handleimageupload}></input>
    </div>
            <label >الاسم كامل</label>
            <input className="form-control mb-2 intsty"
             placeholder="name" 
            type="text"
            required
            name="firstName"
            onChange={handleChange}
          
            ></input>
            <label >رقم الهاتف</label>
            <input className="form-control mb-2 intsty" placeholder="phone" type="text"
            required
            name="phone"
            onChange={handleChange}
            
            ></input>
            <label > البريد الالكتروني</label>
            <input className="form-control mb-2 intsty" placeholder="email" type="email"
            required
           name='email'
            onChange={handleChange}
        
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