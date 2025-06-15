import { useState } from 'react';
import './aboutus.css'; // ملف CSS لتنسيق الصفحة

function AboutUs() {
    const [language] = useState('ar'); // تحديد اللغة (العربية هنا)

    return (
        <div className="aboutus-container">
            {/* العنوان */}
            <h3 dir={language === 'ar' ? 'rtl' : 'ltr'} style={{ marginTop: '20px', fontWeight: 'bold', color: '#04343E', marginRight: '15px' }}>
                من نحن
            </h3>

            {/* القسم الرئيسي */}
            <div className="aboutus-content" style={{ backgroundColor: '#f4f4f4', padding: '20px' }}>
                <div className="aboutus-text">
                    <p style={{ color: '#333', fontSize: '16px', lineHeight: '1.6' }}>
                        نحن شركة مبتكرة نقدم حلولاً وخدمات عالية الجودة لعملائنا في مختلف الصناعات. هدفنا هو تزويد عملائنا بتجارب استثنائية وخدمات مهنية تعزز من نجاحهم.
                    </p>
                    <p style={{ color: '#333', fontSize: '16px', lineHeight: '1.6' }}>
                        لدينا فريق من المتخصصين ذوي الخبرة الذين يكرسون جهدهم لتحقيق أعلى معايير الجودة والاحترافية.
                    </p>
                </div>

                {/* صورة عن الشركة */}
                
            </div>

            {/* قسم الرؤية */}
            <div className="vision-section" style={{ padding: '20px', textAlign: 'center' }}>
                <h4 style={{ color: '#04343E', fontWeight: 'bold' }}>رؤيتنا</h4>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>
                    رؤيتنا هي أن نكون الشركة الرائدة في تقديم حلول مبتكرة تعمل على تحسين الأداء والفعالية في كافة المجالات التي نعمل فيها.
                </p>
            </div>

            {/* قسم المهمة */}
            <div className="mission-section" style={{ padding: '20px', textAlign: 'center' }}>
                <h4 style={{ color: '#04343E', fontWeight: 'bold' }}>مهمتنا</h4>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>
                    مهمتنا هي تقديم خدمات وحلول تكنولوجية مبتكرة تلبي احتياجات عملائنا وتساهم في نجاحهم وتطورهم في سوق العمل.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
