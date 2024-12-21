import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Join.css';

export default function Join(){
    const Navigate=useNavigate();
    const [action,setaction]=useState('');
    const handleNext=()=>{
        if(action==='Tech'){
            Navigate('/Tech2');
        }
        else if(action==='client'){
            Navigate('/Congra');
        }
    };
    return(
       <div className='container' >
        
        <div className='right-section text-center d-flex align-items-center '>
            <div>
            <h2>  انشاء حساب </h2>
            <hr style={{color:'#2352A1'}}></hr>
            <p style={{color:'#9F966E'}}>اختر النوع</p>
            <button onClick={()=>setaction('Tech')} style={{backgroundColor:'#ffffff',padding:'20px 40px', color:'#9F966E'}} className='sty me-3'><img src={require('../../Images/navbar/Vector (1).png')} alt=''/> <br></br>حرفي</button>
            <button onClick={()=>setaction('client')} style={{backgroundColor:'#ffffff',padding:'20px 40px', color:'#9F966E'}} className='sty '> <img src={require('../../Images/navbar/Vector (1).png')} alt=''/> <br></br> طالب خدمة</button>
            <div>
            <button onClick={handleNext} style={{backgroundColor:'#A9543F',border:'none',color:'white',padding:'3px 35px',marginTop:'10px'}}>التالي</button>
            </div>
            </div>
        </div>
       </div>
    )
}