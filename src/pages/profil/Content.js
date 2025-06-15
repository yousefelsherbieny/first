import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./content.css";
import Swiper from "../../Swiper";

// import { FaRegEdit } from "react-icons/fa";
import profileImage from "../../Images/navbarAfterLog/WhatsApp Image 2024-12-23 at 20.09.18_a8be37d8.jpg";
import { IoMdAdd } from "react-icons/io";
// import { MdOutlineEmail } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Review from "./Review";
function Content() {
  const [Language] = useState("ar");
  const navigate = useNavigate();
  return (
    <div className="contentt">
      <div className="profilo">
        <div className="containn">
          <div className="prof-img">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="prof-name">
            <h4>محمد الشافعي</h4>
          </div>
          <div className="email_prof">
            <MdOutlineMail />
            <span>mohamedelshafie@gmail.com</span>
          </div>
          <div className="address_prof">
            <FaLocationDot />
            <span>+20123456789</span>
          </div>
          <div className="phone_prof">
            <FaPhone />
            <span>+20123456789</span>
          </div>
        </div>
      </div>
      <div className="show-form" dir={Language === "ar" ? "rtl" : "ltr"}>
        <div className="hello">
          <h2>مرحبا, محمد</h2>
          <button  onClick={()=>navigate('/EditProfil')} >تعديل البروفيل</button>

        </div>
        <h2 style={{paddingRight:'2em'}}>الاعمال السابقه</h2>
        <div className="swiperr">
          <Swiper/>

        </div>

        <form>
          <div className="cv">
            <label>نجار كفر عصام طنطا</label>
            <div className="cv-text">
              <textarea
              className="cv-textarea"
                required
                value={
                  "خدمات النجارة في كفر عصام طنطا مصممة لتلبية احتياجات عملائنا بأعلى مستوى من الجودة والاحترافية. نقدم أعمال نجارة دقيقة ومتقنة، مع التركيز على تلبية متطلبات كل عميل بشكل خاص. سواء كنت بحاجة إلى تجديالأثاث، بناء وحدات خشبية مخصصة، أو أي خدمة نجارة أخرى،نحن هنا لضمان أن تحصل على أفضل النتائج في وقت مناسب وبسعر مناسب."
                }
                
              />
            </div>

            <div className="skills">
              <label>المهارات</label>
              <div className="skills-text">
                <ul>
                  <li>تصميم الاثاث</li>
                  <li>الفهم الفني</li>
                  <li>التركيز والانتباه</li>
                  <li>الصيانه</li>
                  <li>التشطيب</li>
                  <li>التعامل مع المواد</li>
                  <li>الابداع</li>
                  <li>الابتكار</li>
                  <li>القياسات الدقيقه</li>
                  <li>
                    <IoMdAdd />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="props">
            <label>الميزات الخاصه</label>
            <div className="props-li">
              <ul>
                <li>خدمة استشارية شخصية</li>
                <li>استخدام مواد خشبيه صديقه للبيئه</li>
                <li>اصلاحات سريعه وفعاله</li>
                <li>تقنيات حديثه في التنفيذ</li>
                <li>مرافق ورشه عمل متطوره</li>
                <li>خدمات متنوعة</li>
                <li>خدمه تركيب احترافيه</li>
                <li>مناطق ترفهيه عائليه لاعمال المشتركه</li>
              </ul>
            </div>
          </div>
        </form>
        <div className="reviews">
          <h4>رأي العملاء</h4>
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <button className="show-more">عرض المزيد</button>
        </div>
        <div className="social">
          <h4>طرق التواصل</h4>
          <div className="email">
          <IoMdMail />
            <span>mohamedelshafie@gmail.com</span>
          </div>
          <div className="phone">
            <FaPhone />
            <span>0123456789</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
