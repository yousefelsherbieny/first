import './Service.css';
function Service(){
    return(
          <div className='container'>
            <div className='row mt-2'>
                <div className='col-md-4 '>
                    <img src={require('../../../../Images/service/photo1.jpg')}width={'300px'} alt=''></img>
                    <div style={{textAlign:'center',color:'#04343E'}}>
                    <h4>خدمة الحرفيين المحليين</h4>
                    <p> نوفر لك مجموعة متنوعة<br></br> من الحرفيين المهرة في مجالات مختلفة<br></br> ، مما يضمن لك العثور على الشخص المناسب لكل احتياجاتك.</p>
                    </div>
                </div>
                <div className='col-md-4  '>
                <img src={require('../../../../Images/service/photo2.jpg')}width={'300px'} alt=''></img>
                <div style={{textAlign:'center',color:'#04343E'}}>
                    <h4>الصيانة والإصلاحات</h4>
                    <p>  احصل على خدمات موثوقة للصيانة <br></br>وإصلاح الأعطال من فنيين  محترفين <br></br>لضمان جودة العمل وسرعة الاستجابة.</p>
                    </div>
                </div>
                <div className='col-md-4 '>
                <img src={require('../../../../Images/service/photo3.jpg' )} width={'300px'} alt='' ></img>
                <div style={{textAlign:'center',color:'#04343E'}}>
                    <h4>طلبات متخصصة </h4>
                    <p>إذا كانت لديك احتياجات خاصة<br></br> نقدم لك حلول مخصصة تناسب <br></br> متطلباتك الفريدة مع دعم من خبراء في مجالاتهم</p>
                    </div>
                </div>
            </div>
            </div>
        
           


          
    )
}
export default Service;