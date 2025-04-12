import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Search.module.css";
import { faHome } from '@fortawesome/free-solid-svg-icons';

const governorates = [
  "القاهرة", "الإسكندرية", "الجيزة", "الدقهلية", "الشرقية",
  "المنيا", "أسيوط", "سوهاج", "قنا", "أسوان",
  "بورسعيد", "الإسماعيلية", "السويس", "مطروح", "البحيرة",
  "الفيوم", "بني سويف", "الأقصر", "دمياط", "الوادي الجديد",
  "البحر الأحمر", "شمال سيناء", "جنوب سيناء", "كفر الشيخ",
  "القليوبية", "المنوفية", "الغربية",
];

const areas = {
  "الغربية": ["طنطا", "المحلة الكبرى", "زفتي", "كفر الزيات", "بسيون", "سمنود", "السنطة"],
  "القاهرة": ["وسط البلد", "المهندسين", "مدينة نصر", "المعادى", "الزمالك", "شبرا", "العباسية", "المقطم", "الجيزة", "مصر الجديدة"],
  "الإسكندرية": ["المنشية", "سموحة", "العصافرة", "محطة الرمل", "بحري", "كرموز", "ميامي", "سان ستيفانو", "المنتزه", "مناخ البحر"],
  "الجيزة": ["الدقي", "المهندسين", "6 أكتوبر", "الشيخ زايد", "الهرم", "الجيزة", "المنيب", "بولاق الدكرور", "أكتوبر", "بني سويف"],
  "الدقهلية": ["المنصورة", "طلخا", "نبروه", "ديروط", "شربين", "ميت غمر", "بني عبيد", "الجمالية", "محلة دمنة"],
  "الشرقية": ["الزقازيق", "بلبيس", "القرين", "الاهرام", "العدوة", "أبوحماد", "ديروط", "منيا القمح", "الحسينية"],
  "المنيا": ["المنيا", "أبو قرقاص", "مغاغة", "ديروط", "ملوي", "سمالوط", "قنا", "الناصرية", "مصر"],
  "أسيوط": ["أسيوط", "ديروط", "أبنوب", "الغنايم", "الفتح", "أبو تشت", "ساحل سليم", "منفلوط", "أبو حماد"],
  "سوهاج": ["سوهاج", "أخميم", "ساقلته", "طما", "جرجا", "البلينا", "ديروط", "نقادة", "قوص"],
  "قنا": ["قنا", "نقادة", "دشنا", "الوقف", "فرشوط", "قوص", "أبو تشت", "ديروط"],
  "أسوان": ["أسوان", "دراو", "كوم أمبو", "إدفو", "نصر النوبة", "بندر أسوان", "إسنا", "الشعب"],
  "بورسعيد": ["بورسعيد", "العاشر من رمضان", "جهاز المدينة", "الشرقية", "الشرق", "غرب", "العاشر"],
  "الإسماعيلية": ["الإسماعيلية", "التل الكبير", "أبو صوير", "القصاصين", "مركز الإسماعيلية", "الشيخ زايد"],
  "السويس": ["السويس", "أبو حماد", "محافظة السويس", "الهيئة العامة", "الميناء"],
  "مطروح": ["مطروح", "الضبعة", "الساحل الشمالي", "الواحة", "سيدي عبدالرحمن"],
  "البحيرة": ["دمنهور", "كفر الدوار", "حوش عيسى", "إدكو", "أبو حمص", "رشيد", "شبراخيت"],
  "الفيوم": ["الفيوم", "سنورس", "طامية", "إطسا", "الفيوم الجديدة", "القصير"],
  "بني سويف": ["بني سويف", "الواسطي", "الفشن", "ناصر", "ببا", "سمسطا", "الصفوة"],
  "الأقصر": ["الأقصر", "إسنا", "أرمنت", "البياضية", "القرنة", "طود", "الأميرة"],
  "دمياط": ["دمياط", "فارسكور", "كفر سعد", "الزرقا", "الدمياط الجديدة", "المدينة"],
  "الوادي الجديد": ["الخارجة", "الداخلة", "باريس", "الفرافرة", "الواحات البحرية"],
  "البحر الأحمر": ["الغردقة", "سفاجا", "القصير", "البرلس", "رأس غارب", "الزعفرانة"],
  "شمال سيناء": ["العريش", "رفح", "الشيخ زويد", "بئر العبد", "الحسنة"],
  "جنوب سيناء": ["شرم الشيخ", "دهب", "نويبع", "طابا", "سانت كاترين", "وادي فيران"],
  "كفر الشيخ": ["كفر الشيخ", "دسوق", "بيلا", "الرياض", "قلين", "فوه", "المطوبى"],
  "القليوبية": ["بنها", "قليوب", "شبرا الخيمة", "الخانكة", "الخصوص", "كفر شكر"],
  "المنوفية": ["شبين الكوم", "سرس الليان", "الباجور", "أشمون", "الشهداء", "منوف"],
};



const crafts = [
  "نجار", "كهربائي", "سباك", "دهان", "حداد",
  "مبلط", "بناء", "عامل بناء", "سقف", "زجاجي",
  "فني تبريد", "ميكانيكي", "محاسب", "فني كهرباء", "حدادة",
  "فني تصليح أجهزة", "فني تكييف", "سائق", "فني صيانة", "نجار خشب",
  "فني لحام", "كهربائي سيارات", "مزارع", "فني دهانات", "تركيب أسطح",
  "لحام", "فني تبريد وتكييف", "عامل زراعة", "مساعد كهربائي", "عامل ميكانيكي",
  "مصمم داخلي", "رجل إطفاء", "مساعد بناء", "عامل نقل", "حلاق", 
  "مصور فوتوغرافي", "خباز", "طباخ", "محترف إعلانات", "محاسب قانوني",
  "فني أجهزة كهربائية", "عامل تعبئة", "فني صيانة ميكانيكية", "صانع أثاث",
  "مترجم", "كاتب", "مصمم جرافيك", "أخصائي تسويق", "مطور ويب"
];


const Search = () => {
  const [query, setQuery] = useState("");
  const [selectedGovernorate, setSelectedGovernorate] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedCraft, setSelectedCraft] = useState("");
  const [technicians, setTechnicians] = useState([]);
  const [filteredTechnicians, setFilteredTechnicians] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchExecuted, setSearchExecuted] = useState(false);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    // Fetch technicians when the component mounts
    const fetchTechnicians = async () => {
      try {
        const response = await axios.get(
          "https://hscoding.runasp.net/api/Techinican/All Techinican"
        );
        setTechnicians(response.data);
        setFilteredTechnicians(response.data);
      } catch (error) {
        console.error("Error fetching technicians:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechnicians();
  }, []);

  const handleGovernorateChange = (e) => {
    const selectedGov = e.target.value;
    setSelectedGovernorate(selectedGov);
    setSelectedArea(""); // Reset the area when the governorate changes
  };

  const handleSearch = () => {
    setSearchExecuted(true);
    const results = technicians.filter((tech) => {
      return (
        (query === "" || tech.name.toLowerCase().includes(query.toLowerCase())) &&
        (selectedGovernorate === "" || tech.governorate === selectedGovernorate) &&
        (selectedArea === "" || tech.area === selectedArea) &&
        (selectedCraft === "" || tech.craft === selectedCraft)
      );
    });
    setFilteredTechnicians(results);
    setNoResults(results.length === 0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPane}>
      <i class="fa-solid fa-location-dot"></i>
        <h1>حلول تصنع الفرق في كل زاوية</h1>
        <p>ابحث عن أقرب حرفي حولك</p>
      </div>

      <div className={styles.rightPane}>
        <h1>ابحث عن اقرب حرفي حواليك</h1>
        <b>قم بتشغيل خدمات الموقع علشان تعرف اقرب حرفي حواليك</b>
        <button className={styles.enableButton}>قم بتشغيل خدمات الموقع</button>
        <div className={styles.searchForm}>
          <input
            type="text"
            placeholder="بحث عن حرفي"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.input}
          />
          <span className={styles.orText}>أو</span>

          {/* Governorate Dropdown */}
          <select
            value={selectedGovernorate}
            onChange={handleGovernorateChange}
            className={styles.select}
          >
            <option value="">المحافظة</option>
            {governorates.map((gov, index) => (
              <option key={index} value={gov}>
                {gov}
              </option>
            ))}
          </select>

          {/* Area Dropdown (always shown) */}
          <select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className={styles.select}
          >
            <option value="">المنطقة</option>
            {selectedGovernorate
              ? areas[selectedGovernorate]?.map((area, index) => (
                  <option key={index} value={area}>
                    {area}
                  </option>
                ))
              : Object.values(areas).flat().map((area, index) => (
                  <option key={index} value={area}>
                    {area}
                  </option>
                ))}
          </select>

          {/* Craft Dropdown */}
          <select
            value={selectedCraft}
            onChange={(e) => setSelectedCraft(e.target.value)}
            className={styles.select}
          >
            <option value="">نوع الحرفي</option>
            {crafts.map((craft, index) => (
              <option key={index} value={craft}>
                {craft}
              </option>
            ))}
          </select>

          {/* Search Button */}
          <button className={styles.searchButton} onClick={handleSearch}>
            بحث
          </button>

          {/* No results message */}
          {searchExecuted && noResults && (
            <p className={styles.noResultsMessage}>لم يتم العثور على فنيين. حاول تعديل البحث.</p>
          )}
        </div>
      </div>

      {/* Loading Message - Show at the top */}
      {loading && <p className={styles.loadingMessage}>جاري تحميل البيانات...</p>}

      {/* Results */}
      <div className={styles.results}>
        {filteredTechnicians.length > 0 && !loading ? (
          <ul>
            {filteredTechnicians.map((tech) => (
              <li key={tech.id}>
                <h3>{tech.name}</h3>
                <p>المحافظة: {tech.governorate}</p>
                <p>المنطقة: {tech.area}</p>
                <p>الحرفة: {tech.craft}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
