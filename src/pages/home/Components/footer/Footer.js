import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faLocationCrosshairs} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";


function Foot(){
    return(
        <footer style={{backgroundColor:'#C38779',color:'#FFFFFF',fontSize:'13px'}}>
            <img src={require('../../../../Images/navbar/logo.png')} alt='' width={'60px'}/>
             <div style={{display:'flex',justifyContent:'space-evenly'}}>
                <div>
                    <h6>الحرفي</h6>
                    <p>اكتشف أفضل الحرفيين <br></br> بسهولة و سرعة</p>
                </div>
              
                <div>
                    
                    <h6>المعلومات</h6>
                    <div style={{display:'flex-Column',alignItems:'center',justifyContent:'center'}}>
                    <p>الرئيسية</p>
                    <p>الخدمات</p>
                    <p>من نحن</p>
                    <p>انضم إلينا</p>  
                   </div>
            </div>
                <div>
                    <h6>التواصل</h6>
                    <div style={{display:'flex',justifyContent:'space-evenly'}}>
                    <FontAwesomeIcon icon={faPhone} style={{marginRight:'2px'}} />
                        <p>+201066047856</p>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-evenly'}}>
                    <FontAwesomeIcon icon={faLocationCrosshairs}  />
                        <p>Tanta,Egypt</p>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-evenly'}}>
                    <FontAwesomeIcon icon={faEnvelope} style={{marginRight:'4px'}} />
                        <p>Elharfi@gmail.com</p>
                    </div>
                </div>
                <div>
                    <p>لا تترد في سؤلنا</p>
                    <input type='email' placeholder='Email'></input>
                    
                   
                </div>
                </div>
                <p style={{textAlign:'center',fontSize:'15px'}} >@جميع الحقوق محفوظة2024</p>
           
        </footer>
    )

}
export default Foot;