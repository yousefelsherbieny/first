import { useState } from 'react';
import './ourview.css';
function Ourview() {
   const[Language]=useState('ar');
    return(
     <div >
      <h3 dir={Language==='ar'?'rtl':'ltr'} style={{marginTop:'20px', fontWeight:'bold',color:'#04343E',marginRight:'15px'}}>خدماتنا</h3>
      <div style={{backgroundColor:'#A9543F'}}>
        <img src={require('../../../../Images/ourview/Vector (2).png')} alt=''/>
    <div className='stly' style={{ display:'flex',justifyContent:'space-evenly'}} >
       
        <div className=' ms-5 p-4 ' >
         <div style={{display:'flex'}} >
            <div style={{textAlign:'center'}}>
         <h5 style={{color:'#F8F9FB'}}>الصيانة والتجهيز</h5>
         <p style={{color:'#D7D7D7',fontSize:'12px'}}>احصل على خدمات موثوقة للصيانة وإصلاح الأعطال<br></br> من فنيين محترفيين لضمان جودة العمل وسرعة الاستجابة</p>
          </div>
            <img className='stly2' style={{marginLeft:'5px'}} src={require('../../../../Images/ourview/image 57.png')} alt=''/>
         </div>
         <div style={{display:'flex'}}>
            <div style={{textAlign:'center'}}>
         <h5 style={{color:'#F8F9FB'}}>الصيانة والتجهيز</h5>
         <p style={{color:'#D7D7D7',fontSize:'12px'}}>احصل على خدمات موثوقة للصيانة وإصلاح الأعطال<br></br> من فنيين محترفيين لضمان جودة العمل وسرعة الاستجابة</p>
          </div>
            <img className='stly2' style={{marginLeft:'5px'}}  src={require('../../../../Images/ourview/image 58.png')} alt=''/>
         </div>
         <div style={{display:'flex'}}>
            <div style={{textAlign:'center'}} >
         <h5 style={{color:'#F8F9FB'}}>الصيانة والتجهيز</h5>
         <p style={{color:'#D7D7D7',fontSize:'12px'}}>احصل على خدمات موثوقة للصيانة وإصلاح الأعطال<br></br> من فنيين محترفيين لضمان جودة العمل وسرعة الاستجابة</p>
          </div>
            <img className='stly2' style={{marginLeft:'5px'}}  src={require('../../../../Images/ourview/image 59.png')} alt=''/>
         </div>
         </div>
         <div className=' pt-3 '>
            <img className='styles' src={require('../../../../Images/ourview/Group 1597881274.png')} alt='' width={'300px'}/>
        </div>
        </div>
        </div>
    </div>
     
   
    
    )
}
export default Ourview;

        