import { useState } from "react";
import { Link } from "react-router-dom";
function Passdone(){
    const[Language]=useState('ar');
    return(
        <div className="parent vh-100 m-0">
           
            <div className="right-section d-flex me-5 justify-content-between w-50" dir={Language==='ar'?'rtl':'ltr'}>
                <div>
                <h4 style={{textDecoration:'underline #A9543F 2px '}}>إعادة تعيين كلمة المرور</h4>
                <p> تم إعادة تعيين كلمة المرور</p>
                <img src={require('../../Images/passwordR/4322853 2.jpg')} alt=""/>
                <div style={{marginTop:'5px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img style={{marginLeft:'8px'}} src={require('../../Images/passwordR/Vector.jpg')} width={'18px'} alt=""/>
                <Link to={'/Log'} style={{color:'#000000',listStyle:'none',textDecoration:'none'}}>اذهب إلى تسجيل الدخول</Link>
                </div>
                </div>

            </div>

        </div>
    )

}export default Passdone;