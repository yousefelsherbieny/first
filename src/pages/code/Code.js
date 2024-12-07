import React, { useState } from "react";
import { Link } from "react-router-dom";
const VerificationCodeInput = () => {
  const [codes, setCodes] = useState(Array(6).fill(""));

  const handleChange = (value, index) => {
    const updatedCodes = [...codes];
    updatedCodes[index] = value.slice(0, 1); // يقبل حرفًا واحدًا فقط
    setCodes(updatedCodes);

    // التنقل بين الحقول تلقائيًا
    if (value && index < 5) {
      document.getElementById(`input-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entered Code:", codes.join(""));
    // تحقق من الرمز هنا
  };

  return (
    
    <form onSubmit={handleSubmit}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{width:'311px',height:'211px',backgroundColor:'#f6f6f6',display:'flex',justifyContent:"center",alignItems:'center'}} >
        <div>
            <h4 style={{textAlign:'center'}}>تم إرسال رمز التحقق</h4>
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
      <Link style={{textAlign:'center',color:'#0a0eff',listStyle:'none',textDecoration:'none',display:'flex',alignItems:'center',justifyContent:'center'}}>إعادة إرسال رمز التحقق</Link>
     <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <button type="submit" style={{ marginTop: "20px",border:'none', backgroundColor:'#0609DD', padding:'10px 15px',color:'#ffffff',borderRadius:'15px'}}>
        تحقق
      </button>
      </div>
      </div>
      </div>
      </div>
    </form>
   
  );
};

export default VerificationCodeInput;
