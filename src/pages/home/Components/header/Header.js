import './Header.css';
import { useNavigate } from 'react-router-dom';
const Header =()=>{
    const Navigate=useNavigate();
    return(
        <header>
            <div className="head">
        <div style={{display:'flex', justifyContent:'center',alignItems:'center',height:'100%',width:'100%',textAlign:'center'}}>
            <div>
            <h2 style={{fontSize:'60px',color:'white'}}>الحرفي هنا</h2>
            <p style={{fontSize:'30px', color:'white'}}>اكتشف أفضل الحرفيين بالقرب منك بسهولة و سرعة</p>
            <button onClick={()=>Navigate('/login')} className='butt'>انضم إلينا</button>
            </div>
        </div>
        </div>
       
    


        </header>
    )
}
export default Header;