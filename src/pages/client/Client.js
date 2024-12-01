import { useState } from "react";
import { useNavigate ,Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import './client.css';


function Client(){
    const[Language]=useState('ar');
    const [firstName,setFirstName]=useState('');
    const [phone,Setphone]=useState('');
    const [email,Setemail]=useState('');
    const [profilePicture,SetProfilePicture]=useState('');
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
    return(
        <div  style={{marginBottom:'60px'}} className="small">
        <div>
            <div style={{ display:'flex',justifyContent:'center', alignItems:'center',transform:'translateY(50%)',marginRight:'120px'}}>
        <img src={require('../../Images/navbar/logo.png')} alt='' width={'85px'} className="no"/>
       
        </div >
        <form className=" p-4 mx-auto w-25 sty2" action="" dir={Language==='ar'?'rtl':'ltr'} style={{position:'fixed',bottom:'0',right:'0',left:'0'}}>


<div style={{marginTop:'90px',width:'411px',height:'511px',backgroundColor:'#f6f6f6',display:'flex',justifyContent:"center",alignItems:'center'}}>
<div style={{display:'flex',justifyContent:"center",alignItems:'center'}}>
             <div >
            
        <div style={{marginBottom:'10px',display:'flex',alignItems:'center',justifyContent:'center'}}>
            {profilePicture ?(
                <img 
                src={profilePicture}
                alt="profile"
                style={{width:'150px',height:'150px',borderRadius:'50%'}}/>
            ):(
                <div style={{width:'80px',height:'80px',borderRadius:'50%',backgroundColor:'#e0e0e0',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  
                  <FontAwesomeIcon icon={faUser} />
                    </div>
                    
                )}
        </div>
        <div style={{textAlign:'center'}}>
             <h6 style={{color:'#0a0eff', fontWeight:'600', fontSize:'18px'}}>إضافة صورة شخصية</h6>
    </div>
    <div>
        <input type="file" accept="image/*" onChange={handleimageupload}></input>
    </div>
            <label >الاسم كامل</label>
            <input className="form-control mb-2 intsty"
             placeholder="name" 
            type="text"
            required
            value={firstName}
            onChange={(e)=> setFirstName(e.target.value)}
            style={{borderRadius:'15px',width:'300px'}}
            ></input>
            <label >رقم الهاتف</label>
            <input className="form-control mb-2 intsty" placeholder="phone" type="text"
            required
            value={phone}
            onChange={(e)=>Setphone(e.target.value)}
            style={{borderRadius:'15px',width:'300px'}}
            ></input>
            <label > البريد الالكتروني</label>
            <input className="form-control mb-2 intsty" placeholder="email" type="text"
            required
            value={email}
            onChange={(e)=>Setemail(e.target.value)}
          style={{borderRadius:'15px',width:'300px'}}
            ></input>
            <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <button style={{border:'none', backgroundColor:'#0609DD', padding:'10px 15px',color:'#ffffff',borderRadius:'15px'}}  onClick={()=>Navigate('/Client2')} >متابعة</button>
            </div>
            <h6>هل لديك حساب  بالفعل؟ <Link to ='/Log' style={{color:'#0a0eff',listStyle:'none',textDecoration:'none'}}>تسجيل الدخول</Link></h6>
            </div>
            </div>
        </div>
        </form>
        </div>
        </div>
        
       
    )
}
export default Client;