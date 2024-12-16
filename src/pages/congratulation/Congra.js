import { useState } from 'react';
function Congra(){
    const[Language]=useState('ar');
 return(
    <div className="container">
        <div className="right-section" dir={Language==='ar'?'rtl':'ltr'}>
            <h2>تهانينا</h2>
            <hr style={{color:'#A9543F'}}></hr>
            <p style={{color:'#9F966E'}}> لقد تم إنشاء حسابك بنجاح</p>
            <img src={require('../../Images/congrat/undraw_certification_re_ifll 1.jpg')} alt=''/>
            <div style={{display:'flex',justifyContent:'center'}}>
            <button  style={{backgroundColor:'#A9543F',border:'none',color:'white',padding:'3px 35px',marginTop:'10px'}}>التالي</button>
            </div>
        </div>
    </div>
 )
}
export default Congra;