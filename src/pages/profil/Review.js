import { MdOutlineStarPurple500 } from "react-icons/md";
// import { MdStarBorder } from "react-icons/md";
import { MdStar } from "react-icons/md";
import profileImage from "../../Images/navbarAfterLog/WhatsApp Image 2024-12-23 at 20.09.18_a8be37d8.jpg";
const Review = () => {
  return (
    <div className="review_container">
      <div className="profil_image">
        <img src={profileImage} alt="imagee" />
      </div>
      <div className="header">
        <div>
          <h6>محمد الشافعي</h6>
          <p>ماهر جدا في اختيار انواع الاخشاب المناسبه</p>
        </div>
        <div className="star_icon">
          <span className="negative">
            <MdStar />
          </span>
          <span className="postive">
            <MdOutlineStarPurple500 />
          </span>
          <span className="postive">
            <MdOutlineStarPurple500 />
          </span>
          <span className="postive">
            <MdOutlineStarPurple500 />
          </span>
          <span className="postive">
            <MdOutlineStarPurple500 />
          </span>
          <span className="date">24/11/2024</span>
        </div>
      </div>
    </div>
  );
};
export default Review;
