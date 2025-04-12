import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./content.css";
import { FaRegEdit } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";
import profileImage from "../../Images/navbarAfterLog/WhatsApp Image 2024-12-23 at 20.09.18_a8be37d8.jpg";
import { IoMdAdd } from "react-icons/io";

function Content() {
  const [Language] = useState("ar");
  return (
    <div className="content">
      <div className="prof">
        <div className="contain">
          <div className="prof-img">
            <img src={profileImage} alt="Profile" />
            <div className="prof-img-layer">
              <FaRegEdit />
            </div>
          </div>
        </div>
        <div className="add-work-icon">
          <MdCloudUpload />

          <p>اضافة عمل</p>
        </div>
      </div>
      <div className="edit-form" dir={Language === "ar" ? "rtl" : "ltr"}>
        <form>
          <div className="name">
          <label>الاسم بالكامل</label>
          <input
            className="mb-2"
            value={"mohamed elshafei"}
            type="text"
            required
          />
          </div>
          <div className="email">
          <label>الايميل الالكتروني</label>
          <input
            className="mb-2"
            value={"mohamed elshafei@gmail.com"}
            type="text"
            required
          />
          </div>
          <div className="phone">
          <label>رقم الهاتف </label>
          <input
            className="mb-2"
            value={"012345567"}
            type="phone"
            required
          />
          </div>
          <div className="add">
          <label>العنوان</label>
          <input
            className="mb-2"
            value={"Tanta, Egypt"}
            type="text"
            required
          />
          </div>
          <div className="cv">
            <label>السيره الذاتية</label>
            <div className="cv-text">
            <textarea 
              required
            value={"خدمات النجارة في كفر عصام طنطا مصممة لتلبية احتياجات عملائنا بأعلى مستوى من الجودة والاحترافية. نقدم أعمال نجارة دقيقة ومتقنة، مع التركيز على تلبية متطلبات كل عميل بشكل خاص. سواء كنت بحاجة إلى تجديالأثاث، بناء وحدات خشبية مخصصة، أو أي خدمة نجارة أخرى،نحن هنا لضمان أن تحصل على أفضل النتائج في وقت مناسب وبسعر مناسب."}/>

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
              <li>مناطق ترفهيهعائليه لاعمال المشتركه</li>
            </ul>
            </div>
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
                <li><IoMdAdd/></li>
                
              </ul>
            </div>
          </div>
        </form>
        <div className="btns">
          <div className="save">
        <button type="submit">حفظ</button>

          </div>
          <div className="ignore">
            <button type="submit">تجاهل</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Content;
