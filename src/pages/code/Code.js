import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
const VerificationCodeInput = () => {
  const [codes, setCodes] = useState(Array(6).fill(""));
  const Navigate=useNavigate();

  const handleChange = (value, index) => {
    const updatedCodes = [...codes];
    updatedCodes[index] = value.slice(0, 1); 
    setCodes(updatedCodes);

        
    if (value && index < 5) {
      document.getElementById(`input-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entered Code:", codes.join(""));
    Navigate('/Passdone');
    
  };

  return (
    <div className="container">
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
    <form onSubmit={handleSubmit}>
       
        
        <div>
            <h4 style={{textAlign:'center',color:'#A9543F'}}>تم إرسال رمز التحقق</h4>
      <div style={{ display: "flex", gap: "10px" }}>
        {codes.map((code, index) => (
          <input
            key={index}
            id={`input-${index}`}
            type="text"
            value={code}
            onChange={(e) => handleChange(e.target.value, index)}
            maxLength={1}
            style={{
              width: "40px",
              height: "40px",
              textAlign: "center",
              fontSize: "18px",
            }}
          />
        ))}
      </div>
      <Link style={{textAlign:'center',color:'#A9543F',listStyle:'none',textDecoration:'none',display:'flex',alignItems:'center',justifyContent:'center'}}>إعادة إرسال رمز التحقق</Link>
     <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <button type="submit"  style={{ marginTop: "20px",border:'none', backgroundColor:'#A9543F', padding:'10px 15px',color:'#ffffff',borderRadius:'15px'}}>
        تحقق
      </button>
      </div>
      </div>
      
     
    </form>
    </div>
    </div>
   
  );
};

export default VerificationCodeInput;
