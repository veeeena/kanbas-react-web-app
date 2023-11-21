import { FaBars } from "react-icons/fa6";
import "./index.css";
import { useLocation } from "react-router-dom"

function PageHeader({name, number, date}) {
    const { pathname } = useLocation();
    const i = pathname.lastIndexOf("/");
    const header = pathname.substring(i + 1);
    const newPath = pathname.substring(0, i)
    const num = newPath.lastIndexOf("/");
    const courseNum = newPath.substring(num + 1);
    console.log(courseNum);

    return(
        <div class="row">
            <div class="page-header mt-2">
                <FaBars className="mx-1 text-danger"/>
                <div className="header-text">
                    <nav className="header-text mx-1">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active text-danger"> {courseNum}.823784 </li>
                            <li className="text-secondary"> &nbsp; {'>'} {header} </li>
                        </ol>
                    </nav>                
                </div>
            </div>
        </div>
        
    )
}

export default PageHeader;