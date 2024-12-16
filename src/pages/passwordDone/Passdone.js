import { useState } from "react";
import { Link } from "react-router-dom";
function Passdone(){
    const[Language]=useState('ar');
    return(
        <div className="container">
            <div className="right-section d-flex align-items-center justify-content-center" dir={Language==='ar'?'rtl':'ltr'}>
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