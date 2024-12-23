import { useState  } from "react";
import { useNavigate } from "react-router-dom";
import './tech.css';
function Tech2(){
  const [additonalData,setAdditionalData]=useState({tech:'',experiance:'',cv:'',skills:''})
    const[Language]=useState('ar');
    const[skills,setSkills]=useState('')
    
    const Navigate=useNavigate();
    const handleSkillchange=(index,event)=>{
      const newSkillls=[...skills];
      newSkillls[index]=event.target.value;
      setSkills(newSkillls);
    }
   
      const handleChange=(e)=>{
        setAdditionalData({...additonalData, [e.target.name]:e.target.value})
      }
      const addSkill = () => {
        setSkills([...skills, '']);
      };
      /*let skillElements = [''];
      skills.forEach((skill, index) => {
        skillElements.push(
          <input
            key={index}
            type="text"
            value={skill}
            onChange={(event) => handleSkillchange(index, event)}
            placeholder={`ادخل المهارة ${index + 1}`}
          />
        );
      });*/
      function Submit(e){
        e.preventDefault();
        Navigate('/Congra');
      }
   
    return(
      <div className="parent">
        <div className="container align-items-center">
        <form onSubmit={Submit} className="   sty2 " action="" dir={Language==='ar'?'rtl':'ltr'} >
        <h4  style={{textAlign:'center', marginTop:'5px',fontWeight:'bold'}}>انشاء حساب حرفي</h4>
            <label >  ما هى حرفتك</label>
            <input className="form-control mb-2 intsty"
            type="text"
            required
            name="tech"
            onChange={handleChange}
           
            ></input>
            <label > عدد سنين الخبره </label>
            <input className="form-control mb-2 intsty"  type="text"
            required
            name="experiance"
            onChange={handleChange}
          
            ></input>
            <label >  السيره الذاتيه</label>
            <input className="form-control mb-2 intsty"  type=" file"
            required
            name="cv"
            onChange={handleChange}
         
            ></input>
             <label >  المهارات الخاصة </label>
            <input className="form-control mb-2 intsty"  type=" file"
            required
            name="cv"
            onChange={handleChange} 
            ></input>
            <label >   المهارات </label>
           

              <button style={{border:'none'}} type="button"  onClick={addSkill}>+</button>
          
           
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <button style={{border:'none', backgroundColor:' #A9543F', padding:'10px 15px',color:'#ffffff',borderRadius:'15px'}}  >متابعة</button>
            </div>
           
            
        </form>
        </div>
        </div>
       
        
        
    )

}
export default Tech2;