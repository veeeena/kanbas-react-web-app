import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsCalendar2Week, BsFillInboxFill, BsClock } from "react-icons/bs";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { BiLogoCreativeCommons } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";


function KanbasNavigation() {
  const links =
   ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const linksToIconsMap = {
    Account: <MdOutlineAccountCircle className="fs-2 text" />,
    Dashboard: <RiDashboard3Line className="fs-2 text" />,
    Courses: <FaBook className="fs-2 text" />,
    Calendar: <BsCalendar2Week className="fs-2 text" />,
    Inbox: <BsFillInboxFill className = "fs-2 text" />,
    History: <BsClock className="fs-2 text" />,
    Studio: <HiOutlinePresentationChartLine className = "fs-2 text" />,
    Commons: <BiLogoCreativeCommons className = "fs-2 text" />,
    Help: <AiOutlineQuestionCircle className="fs-2 text" />
  };

  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-navigation list-group" style={{ width: 125 }}>
      <div className="list-group-item border-0" style={{ backgroundColor: "black" }}>
        <img src={require('../images/northeastern.png')} class="card-img border-none"/>
      </div>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item text-center p-3 ${
            pathname.includes(link) && "active"
          }`}
        >
          {linksToIconsMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
