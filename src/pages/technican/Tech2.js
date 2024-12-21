import { useState  } from "react";
import { useNavigate } from 'react-router-dom';
import './tech.css';
function Tech2({Data}){
  const [additonalData,setAdditionalData]=useState({tech:'',experiance:'',cv:'',skills:''})
    const[Language]=useState('ar');
  
    
    const Navigate=useNavigate();
   
      const handleChange=(e)=>{
        setAdditionalData({...additonalData, [e.target.name]:e.target.value})
      }
      function Submit(e){
        e.preventDefault();
        Navigate('/Congra');
      }
   
    return(
      <div className="parent">
        <div className="register">
        <form onSubmit={Submit} className="   sty2 " action="" dir={Language==='ar'?'rtl':'ltr'} >
            <label >  ما هى حرفتك</label>
            <input className="form-control mb-2 intsty"
            type="text"
            required
            name="tech"
            onChange={handleChange}
            style={{width:'300px'}}
            ></input>
            <label > عدد سنين الخبره </label>
            <input className="form-control mb-2 intsty"  type="text"
            required
            name="experiance"
            onChange={handleChange}
            style={{width:'300px'}}
            ></input>
            <label >  السيره الذاتيه</label>
            <input className="form-control mb-2 intsty"  type=" file"
            required
            name="cv"
            onChange={handleChange}
          style={{width:'300px'}}
            ></input>
            <label >   المهارات</label>
            <input className="form-control mb-2 intsty"  type="text"
            required
            name="skills"
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