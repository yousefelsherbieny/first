import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbaar() {
  const Navigate = useNavigate();
  return (
    <nav className="nevbar">
      <ul className="ulstyle">
        {/* أزرار تسجيل الدخول وإنشاء حساب */}
        <button
          className="stl"
          onClick={() => Navigate("/Client")}
          style={{
            border: "solid 2px #A9543F",
            borderRadius: "20px",
            padding: "9px",
            color: "#A9543F",
            marginRight: "15px" /* إضافة مسافة بين الأزرار */,
          }}
        >
          انشاء حساب
        </button>
        <button
          className="stl stl2"
          onClick={() => Navigate("/Log")}
          style={{
            border: "solid 2px #A9543F",
            borderRadius: "20px",
            padding: "9px",
            color: "#ffffff",
            backgroundColor: "#A9543F",
          }}
        >
          تسجيل الدخول
        </button>

        {/* الروابط الأخرى */}
        <li>
          <Link
            to="Ourview"
            smooth={true}
            duration={500}
            className="astyle"
            style={{ color: "#AE9E56", fontWeight: "bold" }}
          >
            خدماتنا
          </Link>
        </li>

        <li>
          <Link
            to="AboutUs"
            className="astyle"
            style={{ color: "#AE9E56" }}
            id="servise"
          >
            من نحن
          </Link>
        </li>

        <li>
          <Link to="/Search" className="astyle" style={{ color: "#AE9E56" }}>
            بحث
          </Link>
        </li>

        <li>
          <Link to="/" className="astyle" style={{ color: "#AE9E56" }}>
            الرئيسية
          </Link>
        </li>
      </ul>

      {/* الشعار */}
      <img
        src={require("../../../../Images/navbar/logo.png")}
        alt="Logo"
        width={"65px"}
      />
    </nav>
  );
}

export default Navbaar;
