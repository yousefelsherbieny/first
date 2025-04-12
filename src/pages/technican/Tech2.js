import { useState  } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import './tech.css';
function Tech2(){
  const [additonalData,setAdditionalData]=useState({jopId:'',skillDescription: "",
    experienceYears: "",
    location: "",
    hourlyRateAtHire: "",
    userId: "",})
    const[Language]=useState('ar');
    const[skills,setSkills]=useState('')
  const [loading,setLoading]=useState(false);
const [error,setError]=useState(false);
    
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
    async  function Submit(e){
        e.preventDefault();
        setLoading(true);
        setError(null);
        
          try{
            const response=await fetch("https://hscoding.runasp.net/api/Techinican/Add",
                {
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json',
                      },

                      body: JSON.stringify(additonalData), // Send form data in request body
                    });
                    if (!response.ok) {
                        throw new Error('Login failed. Please try again.');
                      }
                
                      const data = await response.json(); // Get response data
                      console.log('Login successful', data); // Handle successful login (e.g., store token)
                      Navigate('/HomeAfterLog');
                
                      // Redirect or perform other actions after login success
                    } catch (err) {
                      setError(err.message); // Set error if login fails
                    } finally {
                      setLoading(false); // Set loading to false after the request
                    }
                  
                  };
            
    
        
   
            

        
      
    return(
      <div className="parent">
        <div className="container align-items-center">
        <form onSubmit={Submit} className="   sty2 " action="" dir={Language==='ar'?'rtl':'ltr'} >
        <h4  style={{textAlign:'center', marginTop:'5px',fontWeight:'bold'}}>انشاء حساب حرفي</h4>
            <label >   معرّف الوظيفة: </label>
            <input className="form-control mb-2 intsty"
            type="text"
            required
            name="JopId"
            onChange={handleChange}
           
            ></input>
            <label >    المهارات: </label>
            <input className="form-control mb-2 intsty"  type="text"
            required
            name="skillDescription"
            onChange={handleChange}
          
            ></input>
            <label >  سنوات الخبرة: </label>
            <input className="form-control mb-2 intsty"  type=" file"
            required
            name=" experienceYears"
            onChange={handleChange}
         
            ></input>
             <label >  الموقع:  </label>
            <input className="form-control mb-2 intsty"  type=" file"
            required
            name="location"
            onChange={handleChange} 
            ></input>
             <label >  الأجر بالساعة عند التوظيف:  </label>
            <input className="form-control mb-2 intsty"  type=" file"
            required
            name="hourlyRateAtHire"
            onChange={handleChange} 
            ></input>
             <label >  معرّف المستخدم:  </label>
            <input className="form-control mb-2 intsty"  type=" file"
            required
            name=" userId"
            onChange={handleChange} 
            ></input>
            
          
           
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <button style={{border:'none', backgroundColor:' #A9543F', padding:'10px 15px',color:'#ffffff',borderRadius:'15px'}}  >متابعة</button>
            </div>
           
            
        </form>
        </div>
        </div>
       
        
        
    )

}
export default Tech2;