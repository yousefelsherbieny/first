function Ourview() {
    return(
        <div style={{marginTop:'50px',backgroundColor: '#CDAD2D4F'}}id='our'>;

        <div style={{textAlign:'center',}}>
        <h3 style={{color:'#000000',fontSize:'48px',fontWeight:'700'}}>الحرفية تلتقي بالمجتمع</h3>
        <p style={{color:'#04343E',fontSize:"32px",fontWeight:'400',fontFamily:'italic'}}>في منصتنا نؤمن بأن الحرفية ليست مجرد مهنة بل هى فن يجمع بين المهارات <br/> التقليدية واحتياجات المجتمع نحن نوفر مساحة حيث يمكن الحرفيين المحليين تقديم <br></br>خدماتهم مما يسهل على العملاء الوصول إلى خبراتهم</p>
    </div>
    
        <div className="row">
            <div className="col-md-3 p-1">
                <img src={require('../../../../Images/ourview/ourview4.jpg')} alt=''className='w-100'/>
            </div>
            <div className="col-md-3 p-1">
                <img src={require('../../../../Images/ourview/ourview2.png')} alt=''className='w-100'/>
            </div>
            <div className="col-md-3 p-1">
                <img src={require('../../../../Images/ourview/ourview3.jpg')} alt=''className='w-100'/>
            </div>
            <div className="col-md-3 p-1">
                <img src={require('../../../../Images/ourview/ourview1.png')} alt=''className='w-100' />
            </div>
        
    </div >
    <div style={{color:"#04343E", textAlign:'center',fontSize:'32px',fontWeight:'400',marginTop:'10px'}}>
       <p>من خلال تعزيز بين الحرفيين والمجتمع و نساعد في بناء مجتمع متماسك بدعم المواهب المحلييه ويعزز <br/>  من جودة الخدمات المقدمةانضم إلينا في هذا الجهد لخلق بيئة تفاعلية حيث يمكن للجميع الاستفادة من مهارات الحرفيين ودعمهم</p>
       </div>
       </div>
    
   

    )
}
export default Ourview;

        